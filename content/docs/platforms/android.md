# Android Guide

Android is where many Unity projects first learn humility.

## Common Android problems

## Problem: Build setup fails before the app even installs

### Check
- Android module installed via Hub
- SDK/NDK/JDK setup
- signing/keystore expectations
- package/plugin compatibility

## Problem: App installs but performs badly

### Check
- device profiling on real hardware
- thermal throttling
- overdraw/UI cost
- texture compression and memory pressure
- shader cost and quality settings

## Problem: Permissions break features

### Check
- camera/microphone/storage/location permissions as relevant
- AR/XR feature permissions
- manifest behavior from plugins/packages

## Problem: Touch input feels inconsistent

### Check
- Input System setup
- multi-touch assumptions
- device-specific UI scaling/input behavior

## Best practices

- test on at least one weak-ish real device early
- define texture and memory budgets
- keep Android notes in repo docs
