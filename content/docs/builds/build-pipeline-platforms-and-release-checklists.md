# Build Pipeline, Platforms, and Release Checklists

Build issues usually hurt because they appear late.
This page exists to make them appear earlier.

## Build mindset

A project is not real until it has been built and run on target hardware.

## Build problems that happen constantly

## Problem: Works in Editor, fails in build

### Likely causes
- scene not included or loaded differently
- Addressables/build content not prepared correctly
- platform-specific code path differences
- stripping/reflection problems
- race conditions hidden by Editor timing

## Problem: Android build setup explodes

### Check
- Android module installed?
- correct SDK/NDK/OpenJDK setup through Hub or intended path?
- package conflicts?
- keystore and signing setup documented?

## Problem: iOS build works until Xcode/export step

### Check
- iOS module installed
- bundle identifiers and signing expectations
- native plugin/package compatibility
- post-build steps documented for the team

## Problem: WebGL build is huge or unstable

### Check
- texture/audio compression strategy
- memory assumptions
- unnecessary package footprint
- unsupported platform expectations from plugins

## Problem: Build times are painful

### Check
- giant content in one build target
- unnecessary packages
- no asset/content discipline
- script compilation/assembly layout inefficiency

## Release checklist

- [ ] target platform modules installed
- [ ] development build tested
- [ ] release build tested
- [ ] scenes/content lists verified
- [ ] package versions frozen for release branch
- [ ] profiling done on release-like conditions
- [ ] crash and log collection plan ready
- [ ] signing/identifiers documented

## Prevention habits

- create build notes per platform
- run platform smoke tests earlier than you think you need to
- do not let release week be the first time mobile/web/xr gets real attention

## Official references

- Build profiles and build docs: https://docs.unity3d.com/Manual/index.html
