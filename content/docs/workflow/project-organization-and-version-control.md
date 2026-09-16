# Project Organization and Version Control

This is one of the highest ROI pages in the whole site.

Weak workflow discipline silently taxes every future feature.

## The goal

Build a project structure that helps developers answer these questions fast:

- where does this file live?
- who owns this system?
- what depends on what?
- can I change this safely?
- why did this scene/prefab break?

## Folder structure: keep it boring

A good Unity structure is not clever. It is obvious.

Example:

```text
Assets/
  _Project/
    Art/
    Audio/
    Materials/
    Prefabs/
    Scenes/
    Settings/
    ScriptableObjects/
    UI/
    Features/
      Core/
      Player/
      Combat/
      Inventory/
      AI/
    Systems/
      Save/
      Loading/
      Audio/
      Analytics/
    Tests/
```

## Why this works

It separates:

- shared content
- feature-specific content
- system-level code
- test assets
- project settings/data

## Version control rules that should be non-negotiable

- commit `.meta` files
- never let teammates ignore `.meta` files casually
- use a proper Unity `.gitignore` or UVCS setup
- branch risky work
- tag milestone builds
- avoid force-pushing shared history unless the team has explicitly agreed

## Why `.meta` files matter so much

Unity uses GUIDs from `.meta` files to keep references stable.

If `.meta` files are lost, regenerated, or duplicated incorrectly:
- references break
- scenes lose links
- prefabs lose links
- Addressables and other asset relationships may become messy

## Common workflow problems

## Problem: Missing references after pulling from Git

### Likely causes
- `.meta` files were not committed
- files were copied outside of version control discipline
- merge conflict resolved by deleting or regenerating assets badly

### What to do
- inspect Git history for the asset and its `.meta`
- restore the original GUID-bearing `.meta` when possible
- avoid "just reassign everything" as the first instinct if the history can restore it

## Problem: Scene merge conflicts are awful

They often are.

### Mitigation habits
- split work into smaller scenes/additive scenes when sensible
- avoid multiple people editing the same monolithic scene constantly
- keep prefabs modular
- communicate scene ownership during active tasks

## Problem: Project compiles slowly after every change

### Likely causes
- no assembly definitions
- too much code in one assembly
- packages or plugins causing wide recompilation

### Fix direction
- introduce assembly definitions gradually
- separate Editor/runtime/tests/integrations
- reduce unnecessary script churn in shared assemblies

## Problem: Third-party plugins contaminate the whole project

### Prevention
- isolate integrations in their own folder and assembly
- document plugin version and setup
- avoid modifying third-party assets directly if you can wrap them instead

## Problem: Nobody knows which scene is safe to test in

Solve this by creating explicit test scenes.

Examples:
- `Movement_Test`
- `Inventory_Test`
- `Lighting_Test`
- `Addressables_Test`

## Good branch habits

- feature branch for risky changes
- migration branch for Unity upgrades
- hotfix branch for emergency build issues
- avoid piling unrelated changes into the same branch

## Documentation that saves teams

Every major feature folder can contain a small `README.md` that answers:

- what this feature owns
- how to test it
- scene/prefab dependencies
- setup steps
- failure modes

## Best practices for package discipline

- do not install packages "to maybe use later"
- prefer released packages for production unless a preview package solves a real need and the risk is accepted
- document why each non-default package exists
- re-check package compatibility before editor upgrades

## Small but powerful team rule

> If a workflow mistake can break references, builds, or iteration speed, document it once and stop relearning it by pain.

## Official references

- Version control guide: https://unity.com/resources/best-practices-version-control-unity-6
- Assembly definitions intro: https://docs.unity3d.com/Manual/assembly-definitions-intro.html
