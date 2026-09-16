# AR Foundation

AR Foundation is the main Unity package for cross-platform AR development.

## What it is for

It provides a common Unity-facing layer for AR features like:
- session management
- plane detection
- raycasting
- anchors
- image tracking
- meshing
- occlusion

## Important truth

AR Foundation does not implement native AR by itself.
It sits on top of provider plugins for the target platform.

## Required mindset

AR setup is package-stack-sensitive.
Version mismatches cause a lot of wasted time.

## Common problems

## Problem: AR scene opens, but no tracking or planes appear

### Check
- AR Session present?
- correct XR Origin variant present?
- provider plugin enabled for platform?
- camera permissions granted?
- supported device/platform feature?

## Problem: It works in simulation/sample, fails on real device

### Check
- provider setup
- permissions
- unsupported device capability
- build target configuration

## Problem: Team assumes one feature exists everywhere

AR features vary by platform.
Always verify the package's platform support matrix.

## Best practices

- start from official samples/templates
- test real device behavior early
- keep a small AR smoke-test scene
- document which AR features are required on which platforms

## Official references

- Manual package page: https://docs.unity3d.com/Manual/com.unity.xr.arfoundation.html
- AR overview: https://docs.unity3d.com/Manual/AROverview.html
- Sample repo: https://github.com/Unity-Technologies/arfoundation-samples
