# Timeline

Timeline is for sequencing content over time without hardcoding everything into procedural scripts.

## What it is for

Use Timeline for:
- cutscenes
- scripted sequences
- coordinated animation/audio/effects
- gameplay moments that are easier to author visually than procedurally

## When it helps most

Timeline is strongest when multiple disciplines need to coordinate:
- camera
- animation
- audio
- VFX
- activation/state events

## Common problems

## Problem: Timeline plays in editor test but not in gameplay flow

### Check
- PlayableDirector triggered?
- bindings assigned correctly?
- scene objects expected by the Timeline present and active?
- gameplay state machine interfering?

## Problem: Sequence works in one scene and breaks in another

### Check
- bindings lost or scene-specific references missing
- prefab/scene assumptions
- duplicated directors using mismatched assets

## Problem: Timeline becomes a hidden gameplay dependency

That happens when too much critical gameplay state is buried only inside tracks/signals without documentation.

## Best practices

- document what a Timeline owns
- keep gameplay-critical logic understandable outside the Timeline asset too
- use named tracks and clear binding conventions
- test sequence startup, interruption, and restart behavior

## Official references

- Manual package page: https://docs.unity3d.com/Manual/com.unity.timeline.html
