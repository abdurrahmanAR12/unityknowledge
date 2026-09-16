# iOS Guide

iOS issues often arrive as export/signing/device-specific integration problems.

## Common iOS problems

## Problem: Unity build succeeds, Xcode side fails

### Check
- signing/team configuration
- bundle identifiers
- package/native plugin compatibility
- required capabilities entitlements

## Problem: Feature works in editor, not on device

### Check
- permissions
- platform-specific API assumptions
- camera/microphone/location/ARKit requirements

## Problem: Performance seems surprisingly poor

### Check
- profiling on actual device
- texture format/compression choices
- post-processing cost
- CPU-heavy gameplay systems

## Best practices

- document Xcode post-build steps if any exist
- test real devices early
- treat signing/config as team knowledge, not one-person magic
