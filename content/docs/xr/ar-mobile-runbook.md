# AR Mobile Runbook

This page is for handheld mobile AR workflows.

## Best starting point

The AR Mobile template is one of the safest starting paths for new AR mobile projects.

## Common AR mobile problems

## Problem: Camera feed or tracking does not behave correctly

Check:
- AR Session present
- correct XR Origin variant present
- provider plugin enabled
- permissions granted
- supported device and OS level

## Problem: Plane detection or raycasting never seems to work

Check:
- relevant manager components present
- feature supported by provider/device
- enough environmental features/light for detection

## Problem: Touch interactions feel confusing

Check:
- XR Interaction Toolkit AR helpers configured as expected
- UI blocking AR interactions accidentally
- gesture logic mixed with standard mobile UI input badly

## Best practices

- start from template/sample when possible
- test on real devices early
- document required device capabilities
- keep a simple AR smoke-test scene

## Official references

- AR overview: https://docs.unity3d.com/Manual/AROverview.html
- Create XR project: https://docs.unity3d.com/Manual/xr-create-projects.html
- AR Mobile template guide: https://docs.unity3d.com/Packages/com.unity.template.ar-mobile@1.0/manual/index.html
