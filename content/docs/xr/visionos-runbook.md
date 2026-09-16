# visionOS / Apple Vision Pro Runbook

visionOS development has its own constraints and mental model.

## Key reality

For Apple Vision Pro AR/MR workflows, PolySpatial and visionOS support change how presentation and simulation relate.

## Common problems

## Problem: Existing Unity project does not port cleanly

Usually caused by:
- unsupported/reduced feature set assumptions
- input model differences
- rendering/presentation differences
- components or workflows that do not translate well

## Problem: App mode confusion

Check:
- is the project meant to run windowed, immersive VR, or AR/MR with PolySpatial?
- are PolySpatial/XR settings aligned with that mode?

## Problem: Hands/input/features expected but missing

Check:
- XR Hands or AR Foundation requirements where relevant
- package versions aligned
- project mode and device/simulator expectations

## Best practices

- start from official visionOS guidance or templates when possible
- document which features are unsupported or reduced compared to vanilla Unity assumptions
- keep a small porting checklist per project

## Official references

- PolySpatial visionOS: https://docs.unity3d.com/Manual/com.unity.polyspatial.visionos.html
- Start a new visionOS project: https://docs.unity3d.com/Packages/com.unity.polyspatial.visionos@2.2/manual/TutorialCreateFromScratch.html
