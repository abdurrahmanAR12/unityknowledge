# Shader and Rendering Debugging Deep Dive

When graphics go wrong in Unity, the visible symptom is often far away from the actual cause.

## What this page is for

Use this page when you need to debug:
- pink materials
- missing or black rendering
- suspicious draw call count
- shader compatibility issues
- GPU performance bottlenecks
- pipeline-specific visual bugs

## Core debugging tools

- Frame Debugger
- RenderDoc
- platform frame debuggers such as Xcode frame debugger or PIX where relevant
- Profiler / GPU-related views

## Common visual failure patterns

## Problem: Material is pink

Usually means:
- shader missing
- shader compile failure
- render pipeline mismatch
- asset imported for another pipeline/version

## Problem: Scene renders black or incomplete

Check:
- camera culling masks
- render pipeline asset assignment
- render feature configuration
- post-processing/volume setup
- lighting exposure/sky/environment

## Problem: Performance tanks in scenes with certain materials/effects

Check:
- transparency/overdraw
- expensive full-screen effects
- too many variants or passes
- shader complexity not justified by art payoff

## Frame Debugger workflow

Use it to answer:
- what is actually being drawn?
- how many passes occur?
- where are extra draw calls introduced?
- are intermediate textures or extra render passes appearing?

## RenderDoc workflow

Use when you need deeper GPU/frame inspection.

Good for:
- pass inspection
- resource bindings
- shader debugging clues
- understanding exactly what the GPU received

## Shader debugging mindset

Do not start by rewriting the shader.
First identify whether the issue is:
- pipeline compatibility
- wrong material settings
- missing keywords/variants
- unsupported platform feature
- actual shader logic bug

## Common performance traps

- too many textures/material variants breaking batching
- depth/alpha-heavy UI and VFX
- too many cameras
- decals and renderer features used casually
- expensive volume updates every frame when avoidable

## Best practices

- keep material counts under control
- use simpler shaders when the player will not notice the difference
- document custom shader dependencies and supported pipelines
- test rendering on target platforms early

## Official references

- RenderDoc integration: https://docs.unity3d.com/Manual/RenderDocIntegration.html
- URP performance guidance: https://docs.unity3d.com/Manual/urp/configure-for-better-performance.html
- Shader debugging with PIX: https://docs.unity3d.com/Manual/DebuggingShadersWithPIX.html
- Xcode frame debugger integration: https://docs.unity3d.com/Manual/XcodeFrameDebuggerIntegration.html
