---
index: 0
slug: moon-lander
title: Moon Lander
date: Oct 2025
description: A 3D lunar landing simulator where you program autonomous rocket guidance in JavaScript
quickLinks:
- title: Play Online
  link: https://moon-lander.daniel-ives.com
---

Moon Lander is a 3D lunar landing sim where your JavaScript flies the rocket. Read from the vehicle's "sensors" and land with 6-DOF physics.

Highlights
- Physics: Rigid-body 6-DOF with quaternion attitude, RK4 at 60 FPS in Web Workers..
- Sensors: IMU, GPS, radar altimeter with realistic noise/latency.
- Tools: Monaco editor, telemetry plots, logs, HUD, 3D replay.

How it plays
- Implement `step(sensors, dt)` returning throttle, engine gimbal, and RCS.
- Run, analyze telemetry, iterate, and optimize for smooth, efficient touchdowns.
- Different levels put you in different starting situations.

Learn by doing
- From thrust-to-weight and PID basics to full attitude/translation control and state-machine landings. 
- Wordle-like scoring rank fuel, accuracy, and smoothness. Shareable with your friends.