# Scene Management and Bootstrap Architecture

A lot of Unity projects become unstable because no one made a clear decision about startup and scene ownership.

## What bootstrap architecture means

It means defining:
- what starts first
- what persists across scenes
- what belongs to individual scenes
- how scenes are loaded and unloaded
- how systems know when they are allowed to initialize

## Common startup models

### Model 1: Single gameplay scene with everything in it
Fine for tiny prototypes.
Usually becomes painful later.

### Model 2: Bootstrap scene + content scenes
A strong default for medium and larger projects.

Bootstrap scene usually owns:
- persistent services
- save/load init
- settings
- audio root
- loading screen system

Content scenes usually own:
- level geometry
- enemies
- local UI pieces
- encounter-specific content

### Model 3: Additive scene architecture
Useful when separating:
- persistent systems
- environment
- gameplay logic
- UI
- lighting or streamed content

## Common scene problems

## Problem: Duplicate managers after scene change

### Usually caused by
- same prefab/system included in multiple scenes
- `DontDestroyOnLoad` used without a real bootstrap plan

## Problem: UI or gameplay initializes before data/services are ready

### Usually caused by
- relying on implicit `Awake`/`Start` timing
- no loading/ready state contract

## Problem: Additive scenes create strange ownership bugs

### Check
- which scene is active?
- which objects are persistent?
- are services trying to reference scene-local content too early?
- are objects moved between scenes intentionally or by accident?

## Better bootstrap rules

- one clearly documented startup path
- one place where persistent services are created
- explicit loading states
- scene-specific systems do not pretend to be global systems

## Helpful scene split example

```text
Bootstrap
MainMenu
Gameplay_Core
Gameplay_Level_01
Gameplay_UI
Debug_TestScene
```

## Additive loading notes

Additive loading is powerful, but it adds responsibility.

You must be clear about:
- which scene becomes active
- which objects belong where
- which systems survive unloads
- how lighting, probes, and baked data are handled across scenes

## Safe loading flow

1. bootstrap initializes services
2. loading screen enters active state
3. content scene loads
4. scene-level objects initialize
5. save/restore or gameplay state applies
6. UI unlocks and player control starts

## Best practices

- create a real bootstrap strategy early
- document persistent vs scene-local systems
- use additive scenes intentionally, not accidentally
- avoid hidden initialization order dependencies
- test first boot, reload, additive load, and scene return flows

## Official references

- Working with scenes: https://docs.unity3d.com/Manual/scenes-working-with.html
- LoadSceneMode: https://docs.unity3d.com/ScriptReference/SceneManagement.LoadSceneMode.html
- Additive loading: https://docs.unity3d.com/ScriptReference/SceneManagement.LoadSceneMode.Additive.html
