# Mobile Optimization Deep Dive

Mobile is where sloppy Unity habits become visible fast.

## Mobile optimization priorities

In mobile, you usually care about:
- stable frame time
- battery/power usage
- thermal behavior
- memory pressure
- load time and build size
- touch/UI clarity

## Mobile-specific realities

A project can feel acceptable on desktop and still be unacceptable on phone hardware.

Common reasons:
- weaker CPU cores
- tighter memory budgets
- GPU bandwidth sensitivity
- thermal throttling
- mobile-friendly shader/lighting constraints

## The mobile optimization order

1. profile on real device
2. check CPU/GPU frame time split
3. inspect memory pressure
4. inspect UI and overdraw
5. inspect texture, shader, and lighting cost
6. simplify content before adding heroic code complexity

## Biggest mobile offenders

- overdraw and layered transparency
- too many dynamic lights/shadows
- heavy post-processing
- large textures with bad compression choices
- unnecessary cameras
- UI rebuild churn
- GC spikes from scripting
- sync loading

## Rendering guidance

For many mobile projects, URP is the safest path.

Common wins:
- use simpler lit models where possible
- reduce additional lights
- reduce soft shadow use
- disable high-cost features not central to the game
- strip shader variants you do not need

## Texture and memory guidance

- use platform overrides intentionally
- reduce max size for assets that do not justify large resolutions
- atlas UI/sprites where sensible
- do not let large unused textures live forever in memory

## UI guidance

Mobile UI problems often combine:
- scaling issues
- text/layout churn
- touch target problems
- overdraw

Profile UI separately enough to see if menus are costing more than gameplay.

## Scripting guidance

- avoid per-frame allocations
- reduce unnecessary Update loops
- keep component lookups cached
- use pooling for repeated high-churn objects

## Loading guidance

Mobile users feel load hitches sharply.

Improve by:
- async loading where practical
- Addressables/content discipline
- smaller scene payloads
- preloading critical assets intentionally

## Thermal awareness

A game that holds target FPS for 30 seconds but throttles after a few minutes is not really stable.

Test longer sessions on real devices.

## Best practices

- define mobile quality tiers early
- profile on weakest realistic device class
- create a mobile checklist per release
- keep texture/shader/UI budgets visible to the team

## Official references

- Android manual hub: https://docs.unity3d.com/Manual/android.html
- iOS manual hub: https://docs.unity3d.com/Manual/iphone.html
- Optimization hub: https://docs.unity3d.com/Manual/analysis.html
- URP performance guidance: https://docs.unity3d.com/Manual/urp/configure-for-better-performance.html
