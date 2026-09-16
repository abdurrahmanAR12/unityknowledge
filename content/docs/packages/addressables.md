# Addressables

Addressables is one of the most valuable Unity packages for medium and larger projects.

## What it is for

Addressables gives you a higher-level asset loading system built on top of AssetBundles.

It helps with:
- async loading
- loading by address/reference rather than hard scene coupling
- dependency handling
- content distribution and updates
- memory-aware content lifecycle management

## When to use it

Use Addressables when:
- your project is bigger than a tiny prototype
- content must load dynamically
- scenes should not directly own everything forever
- memory and download size need more discipline

## When not to rush into it

If you are still learning Unity basics and the project is truly tiny,
direct references may be simpler at first.

## Core concepts

- **Address**: string/key used to load content
- **AssetReference**: strongly typed reference workflow
- **Groups**: packaging/content grouping configuration
- **Profiles**: environment/build path configuration
- **Handle**: object you must often keep/release correctly

## Common Addressables problems

## Problem: It works in Editor but not in build

### Usually check these first
- did you build Addressables content?
- wrong address/key?
- profile/path mismatch?
- dependency content not included as expected?

## Problem: Memory keeps growing

### Usually check
- did you release handles?
- did you release instantiated Addressable objects properly?
- are scene references or cached refs still holding content alive?

## Problem: Team does not know when to use direct refs vs Addressables

Create a rule.

Example:
- direct refs for tiny prototype-only static content
- Addressables for dynamic, shared, streamable, or content-heavy systems

## Best practices

- standardize group naming
- document profile usage
- test load/unload flows in small scenes
- do not mix random `Resources` habits into the same content strategy
- track release patterns in code reviews

## Great first test scene

Make a scene that:
- loads one prefab by address
- spawns it
- unloads/releases it
- logs memory before/after

If the team cannot explain that flow, do not scale the system yet.

## Official references

- Manual package page: https://docs.unity3d.com/Manual/com.unity.addressables.html
- Addressables sample repo: https://github.com/Unity-Technologies/Addressables-Sample
