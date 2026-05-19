---
layout: post
title: DaveT's Unfinished Tales
---

Welcome to my part of the internet.  I'm [Dave Townsend](mailto:dave@davetownsend.org), a programmer (now retired) living in Northern Virginia.

<ul>
<% site.collections["posts"].each do |r| %>
  <li class="post-summary">
    <a href="<%= r.relative_url %>"><b><%= r.data.title %></b></a> <span class="post-date"><%= r.date.to_s[0..9] %></span>
    <div><%= r.data.excerpt %></div>
  </li>
<% end %>
</ul>
