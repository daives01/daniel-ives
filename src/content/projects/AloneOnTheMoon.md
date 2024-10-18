---
index: 4
slug: cs-462
title: Alone on the Moon 
date: Fall 2022
description: A Unity Project for CS462 - Engaging in Virtual Worlds
quickLinks:
    - title: Youtube 
      link: https://youtu.be/VxQ042pkxsU
---
# [CS462](https://www.cs.colostate.edu/~cs462/) - Engaging in Virtual Worlds, Final Project

### Overview

I took this class in Fall 2022. It was all about learning the basics of how computers render graphics. The culmination of this was a semester-long project to create a "Virtual World" in Unity. We basically had to have:

1. Interactions with a 3d environment
2. At least one animated blender model.
3. A brief video presentation, under five minutes, outlining the creation.

I went a little above and beyond with this, as you can see in the [video](https://youtu.be/VxQ042pkxsU) presentation I made. I created a full 4km x 4km lunar terrain, bounded the player's oxygen meter, complete with realistic lighting, a time warp feature, and dynamic sound design.

### Figuring out the "Flat Moon" Model

A lot of (frankly unnecessary) effort was put into to doing as much as I can to make it feel like the player is on the moon. I wanted the sun and earth to move semi-realistically. Of course, my player was simply on a flat plane, and instead of being thousands/millions of miles away, my earth and moon were much closer to the player.

To achieve accurate Sun motion, I wrote a function that took a latitude and a time, and returned the correct alt/az coordinates to place the Sun. This was ultimately just some complicated math, but it paid off (watch the video and note the Sun's motion). To get accurate shadows, I simply found the angle between the Sun and the player, and pointed a directional sky light at that angle.

For the Earth, the number of rotations per one solar revolution is just the real life moon's orbital period in days, minus one. Subtracting one is necessary because the moon revolves once around the Earth. Imagine if the Earth wasn't rotating at all, if you were on the moon, it would look like the Earth rotates once clockwise (the opposite direction) per revolution.

### "is the Sun small and close or big and far away?"

Unity can't really handle solar system scale objects without some intense trickery. The parallax between these objects and the skybox was subtle, but visible, while the player traverse's terrain. To counter this, I synced the coordinates of the earth and sun to be always relative to player, basically "following" them. This removes the parallax, making it seem like they are infinitely far away.

### Sound design

As if this project didn't exceed the requirements enough, my older brother ([Henry Ives](https://henryives.com)) encouraged me to improve the sound design. After a late evening with our parent's baby grand piano, his microphones, and a lot of reverb, we compiled a bunch of sounds that work in any order. After that, I wrote a simple function that plays a random sound at random intervals.
