# Reference Architecture: Bootstrap, Save/Load, and Scene Transitions

This page gives you one **simple reference architecture** that many Unity teams can adapt.

It is not the only valid architecture.
It is a practical one.

## Goal

Create a project structure where:
- startup is predictable
- persistent systems are explicit
- scene loading is controlled
- save/load is not glued to scene objects randomly
- testing transitions is realistic

## High-level flow

```text
App Launch
  -> Bootstrap Scene
    -> Persistent Services Init
    -> Load Save Profile / Settings
    -> Decide Destination (Menu / Continue / Intro)
    -> Load Target Content Scene(s)
    -> Apply Save State
    -> Hand Off Control to Gameplay/UI
```

## Recommended scene model

```text
Bootstrap
MainMenu
Gameplay_Core
Gameplay_Level_01
Gameplay_UI
Debug_TestScene
```

## Recommended persistent systems

Good candidates for persistence:
- SaveSystem
- SettingsSystem
- AudioRouter / MusicSystem
- SceneLoader
- Profile/session manager
- analytics / telemetry wrapper if needed

Not everything needs to persist.
Persistent systems should be few and well-owned.

## Suggested responsibility split

### Bootstrap scene
Owns:
- creation of persistent services
- application-level initialization
- loading destination decision

### Gameplay scenes
Own:
- local content
- enemies/props/level objects
- local UI panels if scene-specific

### Save DTOs
Own:
- durable data only
- not live scene references

## Example save/load flow

1. user presses Continue
2. save profile loads JSON data
3. scene loader loads target gameplay scenes
4. content init completes
5. save applicators restore inventory, player state, checkpoint, etc.
6. UI unlocks and gameplay starts

## Important rule

> Load scenes first, then apply save state to the newly available systems.

Trying to restore into objects that do not exist yet is a classic failure mode.

## Example service map

```text
BootstrapRoot
  SaveSystem
  SceneLoader
  SettingsSystem
  AudioSystem
  AppFlowController
```

## Example scene transition sequence

```text
Current gameplay ends
  -> freeze input
  -> trigger save/checkpoint if needed
  -> show loading state
  -> unload old content scene(s)
  -> load next content scene(s)
  -> apply transition state / save data
  -> restore input
```

## Common failure points

### Failure: Duplicate systems
Usually caused by putting persistent prefabs in multiple scenes.

### Failure: Save applies too early
Usually caused by applying data before the target scene systems exist.

### Failure: Scene-local systems pretend to be global
Usually caused by weak ownership rules.

### Failure: Menu flow and gameplay flow initialize differently
Usually caused by missing a single canonical startup path.

## Good test checklist

- [ ] cold boot to menu works
- [ ] continue/load save works from fresh boot
- [ ] scene reload works
- [ ] death/retry works
- [ ] return to menu and re-enter gameplay works
- [ ] additive scene unload/reload does not duplicate services

## Read next

- [Save/Load Systems](/docs/systems/save-load-systems)
- [Scene Management and Bootstrap Architecture](/docs/architecture/scene-management-and-bootstrap-architecture)
- [Scene Loading, Lifecycle, and Execution Order](/docs/troubleshooting/scene-loading-lifecycle-and-execution-order)
