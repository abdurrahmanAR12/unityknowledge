# DOTS, Jobs, Burst, and Entities

This page is deliberately blunt.

## What these systems are for

They exist to help solve performance and scale problems through data-oriented design and parallel execution.

## What they are not for

They are not automatically the best choice for every Unity game.

## Use them when
- you have measured CPU-bound problems
- large-scale simulation matters
- the team is ready for more complexity

## Common adoption mistake

Teams jump to DOTS because it sounds advanced,
when what they really need is:
- better GameObject architecture
- fewer allocations
- smaller scenes
- cleaner update logic

## Jobs and Burst

These are often easier to justify earlier than full DOTS.

Use them when you can isolate:
- pure compute-heavy work
- batched operations
- data processing that does not need normal object-oriented scene coupling

## Common problems

## Problem: Team cannot debug or extend the system confidently

This is a real cost.
Advanced performance wins are not free if maintainability collapses.

## Problem: Mixed architecture becomes confusing

If part of the project is classic Unity and another part is DOTS,
be explicit about boundaries and ownership.

## Best practices

- adopt incrementally
- use official samples as labs, not as blind architecture templates
- document which systems are DOTS-based and why
- measure improvement, do not assume it

## Official references

- Burst compilation: https://docs.unity3d.com/Manual/script-compilation-burst.html
- Job System overview: https://docs.unity3d.com/Manual/job-system-overview.html
- ECS samples: https://github.com/Unity-Technologies/EntityComponentSystemSamples
