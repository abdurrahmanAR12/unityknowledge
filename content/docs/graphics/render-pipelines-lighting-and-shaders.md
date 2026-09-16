# Render Pipelines, Lighting, and Shaders

Graphics problems in Unity usually come from one of four roots:

- wrong render pipeline assumptions
- mismatched materials/shaders
- lighting configuration issues
- performance cost hidden behind pretty output

## Choosing a pipeline

### URP
Best default for most projects.

### HDRP
Better for higher-end visuals and stronger hardware targets.

### Built-in
Mostly a maintenance or compatibility path now.

## Common graphics problems

## Problem: Materials are pink

That almost always means the shader is missing, broken, or incompatible with the active render pipeline.

### Check
- pipeline mismatch
- imported asset pack from another pipeline
- custom shader compile failure
- package dependency missing

## Problem: Scene is too dark / too bright / inconsistent

### Check
- active lighting settings
- environment lighting
- post-processing / exposure
- camera overrides
- baked vs realtime assumptions

## Problem: Shadows look ugly or unstable

### Check
- shadow distance
- bias/normal bias values
- light type and quality settings
- cascades and platform settings

## Problem: Camera renders black or missing elements

### Check
- render pipeline asset assigned?
- culling masks
- camera stack setup in URP
- target texture usage
- post-processing volume setup

## Shader workflow advice

Start with:
- built-in pipeline-compatible shaders for the chosen RP
- Shader Graph when possible
- HLSL/custom shader work only when needed

Custom shaders are powerful, but they multiply maintenance cost.

## Graphics performance reminders

Watch out for:
- material explosion
- too many lights/cameras
- expensive transparencies/overdraw
- unbounded post-processing
- shader variant bloat

## Official references

- URP: https://docs.unity3d.com/Manual/urp/index.html
- HDRP: https://docs.unity3d.com/Manual/hdrp/index.html
- Shaders: https://docs.unity3d.com/Manual/Shaders.html
