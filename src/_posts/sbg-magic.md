---
layout: post
title: SBG Spellcasters
summary: Filterable list of all the spells in the Middle Earth Strategy Battle Game, along with the spellcasters that can use them.
date: 2026-05-17
categories: [ "sbg" ]
headerjs: [ "mithril-2.0.4.js", "sbg-tools.js" ]
footerjs: [ "sbg-magic.js" ]
extracss: [ "sbg-tools.css", "sbg-magic.css" ]
---
<div id="magic"></div>

<script>
const db = <%== site.data.sbg_magic_data.to_json %>
</script>
