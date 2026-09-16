# WebGL Guide

WebGL exposes memory, load size, and browser-specific expectations quickly.

## Common WebGL problems

## Problem: Build is huge

### Check
- unnecessary packages
- oversized textures/audio
- content that should be loaded more selectively

## Problem: App crashes or hangs in browser

### Check
- memory assumptions
- unsupported plugin/native expectations
- browser-specific limitations
- blocking synchronous logic during startup

## Problem: Performance is unstable

### Check
- CPU-heavy gameplay systems
- too many draw calls/transparencies
- UI cost
- Web-specific threading/feature assumptions

## Best practices

- keep startup footprint disciplined
- test in target browsers early
- remove packages and assets that are not essential to the web target
