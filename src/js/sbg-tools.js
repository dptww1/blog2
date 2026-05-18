/* global db, m */
const FactionSelectState = {
  summary: true,
  allGood: true,
  allEvil: true
};

//========================================================================
const normalize = s =>
      s.replace(/[^-A-Za-z0-9]/g, "-")
      .replace(/--+/g, "-")
      .replace(/^-/, "")
      .replace(/-$/, "");

//========================================================================
const mapEachFaction = (alignment, callback) =>
      Object.keys(db.factions)
        .sort()
        .filter(name => !alignment || db.factions[name].alignment === alignment)
      .map(name => callback.apply(null, [ name, db.factions[name] ]));

//========================================================================
// alignment: "Good" or "Evil"
const domDetailsAlignment = alignment =>
      m("div.factionSelectors",
        m("input[type=checkbox]",
          {
            name: "all" + alignment,
            value: "all" + alignment,
            checked: FactionSelectState["all" + alignment],
            onchange: ev => {
              FactionSelectState["all" + alignment] = ev.target.checked;
              if (!FactionSelectState["all" + alignment]) {
                mapEachFaction(alignment, (name, faction) => faction.selected = false);
              }
            }
          }),
        "All " + alignment,
        m("br"),
        FactionSelectState["all" + alignment]
        ? null
        : mapEachFaction(alignment, name => [
          m("input[type=checkbox].factionCheckbox",
            {
              id: normalize(name),
              name: name,
              value: name,
              checked: db.factions[name].selected,
              onchange: ev => db.factions[name].selected = ev.target.checked
            }),
          m("label", { for: normalize(name) }, name),
          m("br")
        ]));

//========================================================================
const domDetails = () => [
  m("div.factionsSelectors", ["Good", "Evil"].map(domDetailsAlignment)),
  m("br")
];

//========================================================================
const widgetSummary = () => {
  return [
    alignmentSummary("Good", FactionSelectState.allGood),
    alignmentSummary("Evil", FactionSelectState.allEvil)
  ]
    .filter(s => s !== "")
    .join(", ");
};

//========================================================================
const alignmentSummary = (alignmentName, showAll) =>
      showAll
        ? "All " + alignmentName
        : Object.keys(db.factions)
            .filter(f => db.factions[f].alignment === alignmentName)
            .filter(f => db.factions[f].selected)
            .join(", ");

//========================================================================
const shouldShowFaction = factionName =>
      (db.factions[factionName].alignment === "Good" && FactionSelectState.allGood) ||
      (db.factions[factionName].alignment === "Evil" && FactionSelectState.allEvil) ||
      db.factions[factionName].selected;

//========================================================================
const shouldShow = factionNameArray => factionNameArray != null && factionNameArray.some(shouldShowFaction);

//========================================================================
const FactionSelect = {
  view: () => [
    m("div.factionMenu",
      {
        className: FactionSelectState.summary ? "" : "selected",
        onclick: () => FactionSelectState.summary = !FactionSelectState.summary
      },
      "Factions: " + (FactionSelectState.summary ? widgetSummary() : "")),
    FactionSelectState.summary ? null : domDetails()
  ]
};
