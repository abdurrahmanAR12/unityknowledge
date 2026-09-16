# Start Here

If you only have ten minutes, read this page.

## The best default path for most Unity developers

Unless your project has a strong reason to do something else, start here:

- **Unity version:** current Unity 6 LTS-style production baseline
- **Render pipeline:** URP
- **Architecture:** GameObjects + MonoBehaviours + C#
- **UI:** UI Toolkit for modern interfaces, uGUI when legacy or plugin needs justify it
- **Asset loading:** direct references for tiny prototypes, Addressables for serious projects
- **Version control:** Git or Unity Version Control from day one
- **Performance discipline:** Profiler + Memory Profiler + Project Auditor early, not late

## The first mistakes to avoid

### 1. Installing random packages too early
Every package increases project surface area.
If you do not know why it is in the project, it probably should not be there yet.

### 2. Starting with a giant scene
Big scenes slow iteration, hide dependencies, and make debugging much worse.
Prefer smaller test scenes and additive scene structure when needed.

### 3. Building the whole game before profiling
Unity can look fine in the Editor and feel terrible on real devices.
Profiling late is one of the costliest habits in game development.

### 4. Copy-pasting tutorial architecture
Tutorials are good at teaching motion.
They are not always good at teaching maintainable systems.

### 5. Treating every Unity feature as equally important
Most developers need a strong grasp of:

- scenes
- prefabs
- C# scripting
- serialization
- UI
- profiling
- asset management
- builds

before they need advanced DOTS, complex shaders, or multiplayer hosting.

## What to do in your first 7 days

### Day 1
- install Unity Hub
- install one editor version cleanly
- install the right build modules
- open Unity Learn
- create a URP test project

### Day 2
- learn the Hierarchy, Inspector, Project, Console, Scene, and Game windows
- create a GameObject
- add components
- make one script compile successfully

### Day 3
- learn prefab basics
- learn scene saving
- move a player cube with keyboard input
- make a camera follow system

### Day 4
- add collisions and rigidbodies
- learn the difference between `Update` and `FixedUpdate`
- intentionally break and fix one script

### Day 5
- set up version control
- create a proper folder structure
- make your first ScriptableObject config asset

### Day 6
- open the Profiler
- inspect a frame
- learn where GC allocations appear
- build a development build once

### Day 7
- write a one-page internal note called `What I Understand About Unity So Far`
- yes, seriously

That note helps more than people expect.

## What to do when you get stuck

Use this order:

1. read the official docs page for the feature
2. check the API page for the type
3. reproduce in a tiny scene
4. check the Console carefully
5. search Unity Discussions / Issue Tracker
6. compare with an official sample if one exists

## When to move beyond the default stack

### Use HDRP when
- your project is high-end PC/console focused
- visual fidelity is a major pillar
- the team can handle more complexity

### Use DOTS when
- scale is part of the design
- CPU cost is real and measured
- you know what problem DOTS is solving

### Use advanced multiplayer services when
- you actually need sessions, relay, lobby, hosting, or authoritative networking

### Use XR packages when
- your target platform genuinely requires them
- not because they sounded interesting in a roadmap post

## The golden rule for Unity learning

> Learn just enough of the next system to solve your current problem well.

Not less. Not ten systems more.
