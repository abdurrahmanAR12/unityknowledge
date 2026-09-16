# Input System Package

The new Input System is the best default for most fresh Unity projects.

## What it is for

It provides a more flexible and modern alternative to the legacy Input Manager.

It is especially valuable for:
- multiple device support
- rebinding workflows
- local multiplayer/player joining
- cleaner action-based input design
- XR input integration

## Core concepts

- **Input Actions**
- **Action Maps**
- **Control Schemes**
- **Player Input**
- **Player Input Manager**

## Most common beginner mistake

Mixing legacy input code and Input System assumptions without realizing it.

## Common problems

## Problem: Input does nothing

### Check
- is the Input System package installed and enabled?
- is active input handling configured correctly?
- are the action maps enabled?
- is `PlayerInput` actually using the intended actions asset?

## Problem: UI input works, gameplay input does not

### Check
- wrong action map active?
- event system/input module setup mismatch?
- gameplay object not receiving the correct callbacks?

## Problem: Rebinding or multiple devices behave strangely

### Check
- control scheme design
- duplicate bindings
- per-player vs global input assumptions
- local multiplayer setup with `PlayerInputManager`

## Best practices

- design actions by intent, not physical keys
- keep action maps readable and named by context
- do not hard-code device logic everywhere
- create a small input test scene
- decide early how input state reaches gameplay systems

## Good input architecture habit

Treat input as:
- **player intent**, then
- gameplay interpretation

not as raw keyboard logic scattered in all systems.

## Official references

- Input overview: https://docs.unity3d.com/Manual/Input.html
- Input System package: https://docs.unity3d.com/Manual/com.unity.inputsystem.html
