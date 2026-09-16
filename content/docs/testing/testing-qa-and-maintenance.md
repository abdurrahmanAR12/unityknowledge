# Testing, QA, and Maintenance

Testing in Unity is not just automated unit tests.
It is a layered quality discipline.

## The layers

- small manual test scenes
- runtime smoke tests
- unit tests where pure logic benefits
- integration tests for systems with scene/content interactions
- build verification on target platforms
- regression notes and bug reproduction docs

## What to test early

- scene loading
- input
- save/load
- prefab wiring
- UI navigation
- build startup
- Addressables/content loading

## Common testing failures

## Problem: Bugs keep returning after being fixed

Usually means one of these:
- no repro note was written
- no test scene exists for the feature
- the bug was fixed locally but not turned into a team lesson

## Problem: No one knows how to verify a system safely

Fix with:
- one small feature README
- one test scene
- one checklist for expected behavior

## Minimal QA checklist per major feature

- [ ] happy path works
- [ ] obvious invalid state handled
- [ ] scene reload safe
- [ ] prefab references intact
- [ ] build behavior checked
- [ ] basic performance smell checked

## Maintenance mindset

The best maintenance work in Unity often looks like:
- removing unused packages
- splitting giant scenes
- fixing fragile references
- cleaning import settings
- documenting assumptions
- capturing profiling baselines
