# Physics 2D/3D and Gameplay Issues

Physics bugs are often really workflow bugs.

## First rule

Do not mix transform-driven movement and Rigidbody-driven expectations casually.

## Common physics problems

## Problem: Object passes through colliders

### Likely causes
- moving too fast for collision mode
- wrong collision detection mode
- transform teleporting instead of physics movement
- layers not colliding

## Problem: Rigidbody movement feels jittery

### Check
- movement in `FixedUpdate`?
- interpolation enabled where useful?
- camera following in `LateUpdate`?
- fixed timestep reasonable?

## Problem: 2D physics callbacks are not firing

### Check
- 2D and 3D physics are separate systems
- correct collider types?
- Rigidbody2D where required?
- layer matrix allowing collision?

## Problem: Raycast/overlap queries feel expensive

### Fix direction
- reduce frequency
- use layers to filter early
- use non-alloc patterns when appropriate
- avoid giant brute-force query habits in Update loops

## Problem: Character movement fights physics

Decide early whether the character is:
- physics-driven
- kinematic/controller-driven
- mostly transform-driven with controlled collision support

Half-committing to all three usually hurts.

## Prevention habits

- define collision layers early
- create test scenes for contact/query behavior
- profile physics cost when systems scale
- document movement model decisions

## Official references

- Physics overview: https://docs.unity3d.com/Manual/PhysicsSection.html
- Physics 2D: https://docs.unity3d.com/Manual/Physics2D.html
