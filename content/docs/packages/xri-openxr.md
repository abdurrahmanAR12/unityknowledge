# XR Interaction Toolkit and OpenXR

These are two of the most important packages in many XR projects.

## OpenXR

OpenXR is the runtime/plugin standardization path that helps target multiple XR devices.

## XR Interaction Toolkit (XRI)

XRI provides:
- XR Origin setups
- interactors/interactables
- grab/select patterns
- locomotion systems
- XR UI input support

## Common problems

## Problem: Controllers visible but no interaction happens

### Check
- Input System configured?
- XRI action presets/setup complete?
- interactors and interactables on correct objects?
- ray/direct interaction mode expected?

## Problem: Locomotion conflicts or feels wrong

### Check
- multiple locomotion providers active?
- origin/camera rig assumptions wrong?
- custom player movement fighting XRI systems?

## Problem: Device support assumptions fail

### Check
- OpenXR feature support
- provider-specific additions required?
- package versions aligned to editor version?

## Best practices

- begin with official XR templates when possible
- validate interaction in a dedicated test scene
- keep XR-specific input separate from non-XR fallback logic

## Official references

- XR project setup: https://docs.unity3d.com/Manual/configuring-project-for-xr.html
- Create XR project: https://docs.unity3d.com/Manual/xr-create-projects.html
- OpenXR package page: https://docs.unity3d.com/6000.2/Documentation/Manual/com.unity.xr.openxr.html
