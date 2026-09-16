# Animation, Mecanim, and Rigging Issues

Animation problems can come from import settings, controller logic, rig setup, or timing assumptions.

## Common animation problems

## Problem: Animation does not play

### Check
- Animator enabled?
- controller assigned?
- correct state transition conditions?
- object active?
- speed/time scale assumptions?

## Problem: Humanoid import fails or looks broken

### Check
- avatar mapping
- rig type correct?
- source skeleton consistency
- import warnings in model settings

## Problem: Root motion behaves strangely

### Check
- is root motion supposed to drive movement or not?
- animation authored with expected root behavior?
- gameplay movement system conflicting with animation movement?

## Problem: Animation events feel unreliable

They are easy to overuse.

Use them for:
- precise VFX/audio triggers
- lightweight event timing

Avoid relying on them as the only backbone of major gameplay state.

## Problem: Blend tree or layer setup becomes unreadable

Fix by:
- simplifying state structure
- reducing unnecessary parameters
- separating full-body vs upper-body intent clearly
- documenting controller assumptions

## Prevention habits

- use dedicated animation test scenes
- keep animator parameters named clearly
- document whether movement is gameplay-driven or root-motion-driven
- review import settings whenever new source rigs enter the project

## Official references

- Animation overview: https://docs.unity3d.com/Manual/AnimationSection.html
