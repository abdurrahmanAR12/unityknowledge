# Asset Pipeline, Import Settings, and Addressables

Asset problems are some of the sneakiest Unity problems because they often look like code issues from a distance.

## What this page covers

- import settings discipline
- asset organization
- GUID/meta safety
- Addressables basics and common mistakes
- Resources folder cautions

## Asset pipeline mindset

Every imported asset has consequences in:
- memory
- build size
- visual quality
- loading time
- CPU/GPU cost

Treat import settings as part of production, not cleanup.

## Common asset problems

## Problem: Textures look blurry or memory-heavy

### Check
- import compression settings
- max size
- mipmaps necessity
- sprite mode / filter mode
- platform overrides

## Problem: Models import with weird scale/rotation

### Check
- model import scale factor
- source DCC export conventions
- root transform settings
- coordinate assumptions from source tool

## Problem: Audio sounds wrong or huge in build

### Check
- compression format
- load type
- sample rate settings
- platform overrides

## Problem: Assets break references after moving files

If you moved them **inside Unity** and kept `.meta` files safe, references usually survive.
If files were moved outside Unity badly or metas were regenerated, references may break.

## Addressables: when to use them

Use Addressables when you need:
- async loading
- scene-independent content references
- cleaner dynamic content workflows
- remote/local content strategies
- better memory control for larger projects

## Common Addressables problems

## Problem: Asset loads in Editor but not in build

### Likely causes
- Addressables content not built
- wrong address/key
- profile/build path issue
- dependency not included as expected

## Problem: Memory usage grows and does not seem to drop

### Check
- were handles released properly?
- were instantiated addressable objects released correctly?
- are dependencies still referenced elsewhere?

## Problem: Team mixes `Resources` and Addressables randomly

This creates confusion fast.

### Better rule
- `Resources` only for tiny, intentional uses if absolutely necessary
- Addressables for scalable dynamic content
- direct references for very small prototype-level content

## Import-setting hygiene

Create team rules for:
- textures
- sprites
- models
- audio
- animations
- UI assets

If import settings are random, performance becomes random later.

## Good prevention habits

- make platform overrides explicit
- document which assets are addressable and why
- use sample/test scenes for content loading flows
- keep large content strategies consistent

## Official references

- Asset workflow: https://docs.unity3d.com/Manual/AssetWorkflow.html
- Addressables: https://docs.unity3d.com/Manual/com.unity.addressables.html
