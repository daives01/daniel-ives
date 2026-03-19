
---
index: 9
slug: global-domination
title: Legally Distinct Global Domination
date: Spring 2026
description: Play realtime or asynchronous games of risk with your friends or coworkers
quickLinks:
- title: Take a look
  link: https://global-domination.daniel-ives.com/play/js7bht5j8hnh56z6p55t308q4s81mfar
---

Inspired by wargear.net, this is mostly built with Cursor and Codex. I started by building a Typescript game engine library that models the entire finite state machine for Risk. It also supports custom game rules: team play, custom fortify counts, and more. This library is used both on the react/vite frontend *and* the convex backend to do all game logic operations (get valid moves, calculating bonuses, etc).

For auth I am using Convex' Better Auth component, I have Resend setup for those email verifications (and in-game notifications!). I've also setup slack webhook support so you can get slack notifications when it's their turn.

Up next, now that I have a headless risk library, I'd love to try and train a neural net to to play risk. It's been a while since I've trained a model, but could be interesting. 🤔
