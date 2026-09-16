# Meta Quest Runbook

This page is for Meta Quest-specific setup and failure patterns.

## Current direction

Unity recommends the OpenXR path for long-term support and cross-platform compatibility, with Meta-specific packages layered in where needed.

## Common Quest problems

## Problem: Project builds, but headset behavior is wrong or incomplete

Check:
- OpenXR installed and enabled?
- Meta-specific OpenXR package needed for your feature set?
- build profile targeting Quest configured correctly?

## Problem: Passthrough / MR features missing

Check:
- Meta-specific package/extensions installed
- feature supported on the target device/runtime
- permissions and MR setup expectations

## Problem: Performance is uncomfortable

Quest is very sensitive to:
- overdraw
- transparency-heavy UI
- expensive post-processing
- unstable CPU work

## Best practices

- use Quest build profile intentionally
- profile on headset early
- validate Vulkan / target architecture / stereo rendering settings
- keep one Quest smoke-test scene

## Official references

- Meta Quest workflow: https://docs.unity3d.com/Manual/xr-meta-quest-develop.html
- Meta Quest build profile: https://docs.unity3d.com/Manual/xr-meta-quest-build-profile.html
