---
index: 1
slug: this-project
title: Personal site (this project!)
date: Winter 2024
description: A personal portfolio built with Astro and deployed on Cloudflare Pages 
quickLinks:
    - title: Github
      link: https://github.com/daives01/daniel-ives
---
## What is this site?

Like many other software engineers, I feel an inherent need to share with others how cool and skilled I think I am. I mean really, did you see how fast each page loads? Did you notice my cmd + k menu? Have you ever seen a personal website with a dark mode? What about that AI generated drawing of me in the top left?

Just kidding, I mostly built this to try out a few new technologies.

### [Astro](https://astro.build/)

Astro is a really nice framework for building content-based websites like this one. But, it also has the power to create these "islands" of interactivity where needed. Most of the site is written with `.astro` files, but where I need it (like the cmd + k component), I can use react components (or many other frameworks, for that matter). Additionally, astro makes it really nice to build pages from markdown files, for example for a blog (I promise I will never write a blog). Each project of mine is defined using a single markdown file, it's even used in the project overview page.

### Cloudflare

Cloudflare's free tier is insanely generous, why not build a personal site and throw it on the internet using cloudflare pages? The only thing I'm paying for is the domain. Cloudflare makes deploying sites like this incredibly easy, though it was a nice refresher on some basic internet things (DNS, etc).
