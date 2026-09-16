# Package Management, Version Upgrades, and Migrations

Unity projects often do not break because the code was bad.
They break because **versions drifted**.

This page is about preventing that.

## The core rule

> Upgrade intentionally, not casually.

That applies to:
- Unity editor versions
- package versions
- render pipelines
- third-party plugins
- platform SDK dependencies

## Why version drift hurts so much in Unity

Because Unity projects are a web of:
- package versions
- serialized asset data
- project settings
- platform modules
- render pipeline assets
- IDE/tooling integration

A small version change can produce issues in scenes, shaders, builds, import settings, or code generation.

## Safe upgrade workflow

1. create a branch or duplicate the project
2. record current Unity version and package versions
3. read release notes or migration notes for critical packages
4. upgrade one meaningful layer at a time
5. let the project reimport fully
6. fix compile errors first
7. test scenes, UI, builds, and target hardware
8. only merge the upgrade when the project actually behaves

## Common upgrade problems

## Problem: Project upgrades, but packages become unstable

### Likely causes
- package version no longer matches editor expectation
- preview package risk
- third-party dependency mismatch
- manifest edited too aggressively

### Safer fix direction
- revert to known-good package versions if needed
- upgrade core packages in a controlled order
- prefer released/verified package paths for production

## Problem: After upgrade, materials turn pink or rendering changes

### Check
- render pipeline asset still assigned?
- shader upgrade path valid?
- imported assets created for a different pipeline/version?
- renderer settings changed under the new editor version?

## Problem: Serialized assets behave strangely after script changes or upgrades

### Check
- renamed/moved serialized fields or types
- changed namespaces or asmdef boundaries
- changed generic/container layout in serialized data
- migration notes for package-managed assets

## Problem: Team members are on different editor versions

That is not a small problem.
That is a chaos multiplier.

### Fix
- pick one team production version
- document it visibly
- only test upgrades in an isolated branch first

## Packages that deserve extra caution

- render pipeline packages
- XR packages
- Netcode/multiplayer packages
- Addressables
- custom tooling and editor extensions
- third-party SDKs with native plugins

## Good package discipline

- document why each non-default package exists
- remove unused packages
- avoid installing several overlapping solutions for the same problem
- keep a small upgrade log in the repo/docs

## Tiny upgrade log template

```md
Date:
From Unity version:
To Unity version:
Critical packages upgraded:
Known issues found:
Scenes validated:
Builds tested:
Owner:
```

## Best practice

If an upgrade is not buying you a clear benefit, do not rush it into a milestone.
Stability is also a feature.
