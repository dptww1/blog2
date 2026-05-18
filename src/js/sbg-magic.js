/* global db, m */
const spellCharacters = {}; // key: spell name, value: array of character names

const initDb = () => {
  Object.keys(db.spellcasters).forEach(name => {
    Object.keys(db.spellcasters[name].spells).forEach(spName => {
      if (!spellCharacters[spName]) {
        spellCharacters[spName] = [];
      }
      spellCharacters[spName].push(name);
    });
  });
};

const spellDetails = spell =>
      " ("
      + spell["dr"] + "+"
      + (spell["range"]
         ? "/" + spell["range"] + "\""
         : "")
      + ")";

initDb();

m.mount(document.getElementById('magic'), {
  view: () => [
    m("div.intro",
      "Ever looked through the list of spells in the ",

      m("a",
        { href: "https://www.warhammer.com/en-US/shop/middle-earth" },
        "Middle Earth Strategy Battle Game"),

      " rulebook and thought \"That spell sounds cool, I wonder who can cast it?\"  This page can tell you."),
    m(FactionSelect),
    m("table",
      m("tr.headerRow", m("th", "Spell"), m("th", "Spellcasters")),
      Object.keys(spellCharacters)
            .sort()
            .map(spellName =>
                 m("tr.dataRow",
                   m("td", { valign: "top"}, spellName),
                   m("td", m.trust(
                     spellCharacters[spellName]
                       .sort()
                       .filter(characterName => shouldShow(db.spellcasters[characterName]["factions"]))
                       .map(name => name + spellDetails(db.spellcasters[name]["spells"][spellName]))
                       .join("<br>"))))))
    ]
});
