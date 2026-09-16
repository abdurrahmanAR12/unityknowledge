# Profiling, Memory, GC, and Performance

This is the page most teams wish they had taken seriously earlier.

## The performance rule that matters most

> Measure first. Then optimize the hottest real problem.

## Your core tools

- Profiler
- Memory Profiler
- Frame Debugger
- Profile Analyzer
- Project Auditor

## The safest optimization workflow

1. profile a development build on target hardware
2. identify whether the issue is CPU, GPU, memory, loading, UI, or physics
3. isolate a reproducible scene or action
4. fix the highest-cost root cause
5. capture again and compare

## Why the Editor lies sometimes

The Editor is useful, but it is not the same as a player build.

Differences include:
- editor overhead
- editor-only allocations
- asset/database behavior
- dev tooling noise

So if something matters for ship quality, confirm it in a build.

## GC spikes: what usually causes them

- string concatenation in hot paths
- new lists/arrays every frame
- closures/boxing in critical loops
- repeated instantiate/destroy patterns
- hidden allocations from APIs and LINQ in hot code

## Fast GC diagnosis checklist

- inspect `GC.Alloc` in CPU profiler
- check hot paths in `Update`, `FixedUpdate`, UI refresh, AI loops
- look for recurring allocations rather than one-time setup allocations
- confirm behavior on target build, not just Editor

## Object pooling: when it helps

Great candidates:
- projectiles
- enemies with high churn
- damage popups
- repeated UI list elements
- particle/VFX objects

Less useful when:
- object count is small
- lifetime is long anyway
- code complexity becomes worse than the actual gain

## Memory mindset

Track:
- total memory use
- managed heap growth
- texture/mesh/audio pressure
- scene-to-scene cleanup behavior
- addressable content release correctness

## Common performance problems

## Problem: FPS is bad on mobile but okay on desktop

### Likely causes
- texture/shader cost too high
- too many transparent/UI layers
- overdraw
- CPU work acceptable on desktop but too costly on weaker cores
- thermal throttling on device

## Problem: Build stutters every few seconds

### Likely causes
- garbage collection spikes
- sync loading during play
- shader compilation hiccups
- streaming/content release timing issues

## Problem: UI feels more expensive than expected

### Check
- canvas rebuilds (uGUI)
- layout/style churn (UI Toolkit)
- frequent text updates
- dynamic list creation/destruction

## Problem: Scene loads are too slow

### Check
- giant scene content
- unnecessary always-loaded assets
- asset import/compression strategy
- Addressables/content-loading design
- synchronous blocking patterns

## Performance budget thinking

Create budgets for:
- target FPS / frame time
- memory ceiling
- startup time
- scene transition time
- draw call/material complexity
- audio/texture budgets

Teams that define budgets earlier usually debug less blindly later.

## Project Auditor use

Use it as a normal health tool.
It helps catch:
- code issues
- asset issues
- project settings issues
- build report insights

## Healthy optimization habits

- test on target hardware early
- compare captures, not just feelings
- fix one hotspot class at a time
- keep performance notes in the repo/docs
- teach the team what common red flags look like

## Official references

- Optimization hub: https://docs.unity3d.com/Manual/analysis.html
- Track garbage collection allocations: https://docs.unity3d.com/Manual/performance-track-garbage-collection.html
- Project Auditor: https://docs.unity3d.com/Manual/project-auditor/project-auditor-introduction.html
