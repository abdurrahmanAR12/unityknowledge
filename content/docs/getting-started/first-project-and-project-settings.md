# First Project and Project Settings

Project settings are not glamorous, but a lot of future pain starts here.

## Goal

Create a project baseline that is:

- understandable
- versionable
- reasonably future-proof
- aligned to target platform and team needs

## First decisions that matter most

- Unity version
- render pipeline
- 2D or 3D template
- input approach
- color space and graphics defaults
- target platforms
- naming and folder conventions

## Render pipeline decision

### Choose URP when
- you want the safest modern default
- you target multiple platforms
- you care about performance and modern graphics workflows

### Choose HDRP when
- you target stronger hardware
- high-end visuals are central
- your team can absorb more graphics complexity

### Stay away from random switching
Changing pipeline later is possible, but usually annoying.
Choose carefully up front.

## Input setup

One of the earliest confusing choices is input.

### Rule of thumb
- use the **new Input System** if you are starting fresh
- only stay with legacy input if a project dependency or maintenance constraint clearly requires it

### Common early issue
"My input isn't working."

Usually caused by one of these:
- Input System package not installed or not active
- project active input handling set incorrectly
- action maps not enabled
- scripts written for legacy input in a new-input project or vice versa

## Project settings worth checking early

### Player settings
Review:
- company/product name
- scripting backend expectations per target
- bundle identifiers for mobile later
- development build expectations

### Quality settings
Do not assume default quality levels are correct for your target.
Especially important for mobile and XR.

### Time settings
Watch `Fixed Timestep` if your physics feels unstable or too expensive.

### Physics settings
Review layer collision matrix early.
Many unnecessary physics checks can be prevented here.

### Build Profiles / build targets
Set up target platforms intentionally.
Do not wait until release week to discover missing platform-specific settings.

## Common project-setup problems

## Problem: Scene looks different on another machine

### Likely causes
- different editor version
- package mismatch
- missing render pipeline assets/settings
- project-specific graphics settings not committed properly

### Prevention
- commit project settings
- align Unity version
- document package decisions

## Problem: New project already feels messy

That usually means no folder rules were established.

Solve it early with a simple project root like:

```text
Assets/_Project/
```

and put your real content there.

## Problem: Physics feels jittery immediately

Check:
- are you moving Rigidbody objects through transform edits?
- are you using `FixedUpdate` correctly for physics-driven movement?
- is interpolation needed?
- is the fixed timestep too coarse or too aggressive?

## Problem: Lighting or materials are already strange

Check:
- correct render pipeline asset assigned?
- imported assets made for a different pipeline?
- project created in HDRP but package assets or shaders expect URP or built-in?

## Recommended first project checklist

- [ ] choose URP/HDRP intentionally
- [ ] create `_Project` root folder
- [ ] set input approach
- [ ] review physics collision matrix
- [ ] create first test scene
- [ ] create first prefab folder
- [ ] create first ScriptableObject data folder
- [ ] set version control before serious content arrives

## Prevention mindset

A healthy first project is not the one with the most features.
It is the one that still feels understandable after two weeks of work.

## Official references

- Unity Manual: https://docs.unity3d.com/Manual/index.html
- Best practice guides: https://docs.unity3d.com/Manual/best-practice-guides.html
