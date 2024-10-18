---
index: 0
slug: lit-shelf
title: LitShelf
date: Aug 2024
description: An AI powered book discovery tool 
quickLinks:
    - title: Site
      link: https://litshelf.app

---
### The problem with Goodreads

Goodreads has been the goto app for book tracking for years, but it isn't actually all that good. The ui is outdated, there are some core features missing, and it's generally a lot of work to keep it up to date. It also has a bunch of social features which I frankly find useless.

### A better book discovery tool

One day I was playing around with text embeddings and vector search, and I considered if it would be possible to embed a big database of books, with their summaries, genres, themes, etc. and then do a "vibe search" to find the next book I want to read. So, I downloaded the "works" DB from openlibrary, and discovered that the summaries were mostly lacking, and creating a good dataset would be really hard. I tried reaching to an LLM to generate summaries, then I thought: "why don't I just ask the LLM for book recommendations". Even with a smaller model like Llama3-7b, it worked suprisingly well. Thus the idea to create this app was born.

The main downside to this approach is that an LLM won't know about the most recently released works, but I do have some ideas to address that.

### Data source

For my data source, I've decided to lean on openlibrary's database, both for book metadata and for their covers. However, for the purpose of speed (and in case openlibrary is down, like right now in October 2024), I also cache these "work" results into my own database. When the LLM gives me structured output, I first check my database. If it's a "cache miss", only then will I reach to open library's API. As time goes on, my cache will grow bigger and I'll rely on open library even less.

### Book tracking

Although I've only built search and not tracking yet, I have some ideas on how to make it better. I want to enable each user to create their own set of attributes to track, whatever they want. I'll have some built in ones (Status, Rating, Review, etc), but otherwise I could allow the user to create any set of "custom fields". Then, if I can build a good reporting/chart screen to run queries on these, each user could setup their app exactly how they want.

It may take some time to get their, and I might start with the basics before diving into fully custom fields. For now, it's a clean UI with a cool search function.
