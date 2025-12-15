
---
index: 0
slug: cozy-tab
title: cozytab
date: Winter 2026
description: A multiplayer interactive room decorator, built for and designed by my wife
quickLinks:
- title: Make your own cozytab
  link: https://cozytab.club
---

This is the first time building a project that is explicitly *not* for me. It's very refreshing to get product insights from your customer, in this case, my wife.

Cozytab is a virtual isometric sticker pack, you can buy new items from the shop and decorate your "room" with them. It also allows you to invite others into your room to share it with them. You can see each others' cursors and type to them in real time (heavily inspired by FigJam)

All of the artwork is done by my wife, and I've given her an admin dashboard so she can upload new ones, price them, etc. All without me.

It's a basic client-side react app, built on top of a convex backend, clerk for authentication, and a simple cloudflare worker connected to a durable object for room multiplayer (shared cursors).

Convex is *amazing*, absolutely will be my goto backend for any future personal projects.