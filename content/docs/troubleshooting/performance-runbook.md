# Performance Runbook

Use this page when the project suddenly feels slow and you need a practical response.

## Triage flow

1. reproduce on target hardware
2. identify whether the slowdown is CPU, GPU, memory, loading, UI, or physics
3. capture profiler data
4. identify the hottest recurring cost
5. fix one root cause at a time

## If frame time spikes every few seconds

Check:
- GC allocations
- sync loading
- large timed systems or expensive scans
- shader compile/warmup issues

## If scene transitions hitch badly

Check:
- sync asset loads
- too-large scene payloads
- no preloading strategy
- missing Addressables/content discipline

## If mobile performance is unstable

Check:
- actual device thermals
- quality settings too high
- UI/overdraw
- texture memory pressure
- CPU-heavy gameplay code

## If UI is the hidden bottleneck

Check:
- canvas rebuild churn
- dynamic text spam
- UI Toolkit layout/style changes too often
- repeatedly creating/destroying visual elements

## If memory keeps climbing

Check:
- released handles/resources
- scene cleanup behavior
- pooled objects never returned/reused badly
- large textures/audio lingering

## Good emergency rule

Do not optimize five systems at once.
Fix the single biggest measured cause first.
