---
index: 11
slug: ksp-bench
title: KSP Bench
date: Summer 2026
description: A benchmark for seeing whether AI agents can fly a rocket into orbit in Kerbal Space Program
quickLinks:
- title: View the leaderboard
  link: https://kspbench.daniel-ives.com
- title: Source code
  link: https://github.com/daives01/ksp-bench
---

I built KSP Bench to test whether AI agents can fly a rocket into orbit in Kerbal Space Program. There are three main parts:

- **MCP server:** Gives agents tools to read telemetry and control the rocket through kRPC.
- **Harness:** Runs agents through OpenCode, resets the mission between attempts, and records telemetry, tool calls, token usage, and estimated cost.
- **Benchmark site:** A leaderboard and flight replays for comparing models. Each gets the same rocket and the same goal: reach an 80 km orbit around Kerbin.
