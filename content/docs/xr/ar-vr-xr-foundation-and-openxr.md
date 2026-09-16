# AR, VR, XR Foundation, and OpenXR

XR setup problems are often package/version/setup problems long before they are interaction problems.

## Core package stack to know

- AR Foundation for cross-platform AR
- XR Interaction Toolkit for interactions/locomotion patterns
- OpenXR for broad XR runtime support where appropriate
- provider-specific plugins when required by device/platform

## Common XR problems

## Problem: AR features do not work on device even though the scene opens

### Check
- AR Foundation version matches provider package versions
- device permissions granted
- `AR Session` and correct `XR Origin` present
- provider plugin actually enabled for platform

## Problem: XR controllers or hands are not responding

### Check
- Input System installed/configured
- XR Interaction Toolkit starter/input setup aligned
- provider plugin active
- scene origin/controller setup correct

## Problem: Works in one headset/device, breaks in another

XR portability is real work.

Check:
- OpenXR/runtime feature support
- provider-specific package requirements
- platform-specific interaction assumptions
- performance/quality settings too aggressive for one target

## Problem: XR app runs, but performance is uncomfortable

XR has far less tolerance for frame instability.

Check:
- GPU-heavy post effects
- too many transparent/UI surfaces
- scene complexity and lighting
- unnecessary scripts or UI updates
- platform-specific quality settings

## Best setup habits

- start from official templates or samples when possible
- validate package version compatibility early
- test on target devices early and repeatedly
- keep a dedicated XR smoke-test scene

## Official references

- AR overview: https://docs.unity3d.com/Manual/AROverview.html
- VR overview: https://docs.unity3d.com/Manual/VROverview.html
- AR Foundation samples: https://github.com/Unity-Technologies/arfoundation-samples
