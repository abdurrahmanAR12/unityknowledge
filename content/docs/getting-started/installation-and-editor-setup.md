# Installation and Editor Setup

This page covers the boring setup issues that waste ridiculous amounts of time.

## The goal

End up with:

- one stable Unity version
- the correct build modules
- one working code editor
- package resolution working
- no mystery compiler integration issues

## Recommended baseline

For most teams:

- install **one main production editor version**
- optionally install **one sandbox version** for testing migrations
- do **not** scatter work across too many editor versions

## Install checklist

- [ ] Unity Hub installed
- [ ] Correct editor version installed
- [ ] Android/iOS/WebGL/etc. modules installed if needed
- [ ] Microsoft Visual Studio or VS Code set up correctly for C# editing
- [ ] enough free disk space for Library/build artifacts
- [ ] antivirus not aggressively locking project folders

## Common setup problems

## Problem: Unity Hub installs the editor, but projects fail to open

### Likely causes
- missing or corrupt install modules
- invalid project path permissions
- out-of-date Hub state
- project created with a different or incompatible editor version

### What to check
- can a brand new empty project open?
- does the failing project ask for an upgrade?
- is the project path inside OneDrive/Dropbox/network sync folders?
- does Hub show the correct version and modules?

### Safer fix order
1. test a brand new project
2. duplicate the failing project before upgrading it
3. move project to a short local path
4. re-add the project in Hub
5. reinstall missing modules if needed

## Problem: IntelliSense or code completion does not work

### Likely causes
- IDE package mismatch
- editor external tools not configured
- project files not regenerated
- broken C# extension/toolchain
- assembly or package errors blocking solution generation

### Fix checklist
- open **Edit > Preferences > External Tools**
- choose the intended editor explicitly
- regenerate project files
- make sure there are no existing compile errors in Console
- reopen the solution from Unity, not from a stale file association

## Problem: Package Manager cannot resolve packages

### Likely causes
- bad internet/proxy/certificate environment
- broken manifest entry
- package version incompatible with editor version
- cache issues

### What to do first
- open `Packages/manifest.json` and look for obvious invalid entries
- check whether a package is preview/released and intended for your editor version
- reopen the project after cache refresh only if needed
- avoid random manual editing unless you know why you are changing versions

## Problem: Project takes forever to open the first time

That is often normal.

Unity is importing assets and building the `Library` folder.
The first open is often much slower than later opens.

### Red flags
It may be abnormal if:
- every open is painfully slow
- imports restart constantly
- the Library folder is being deleted or synced externally
- asset pipelines are misconfigured

## Problem: Code editor opens, but clicking errors in Console does nothing useful

### Check
- correct external editor selected
- solution/project files regenerated
- the editor installed C# tooling properly
- file association not hijacked by another app

## Problem: Android / iOS / Web modules are missing later

Install modules **before** build week if you know you need them.
Last-minute SDK/module setup is a classic source of delay.

## Folder location advice

Avoid putting active Unity projects in:

- cloud-synced desktop folders
- USB/network drives
- long nested paths with odd permissions

Prefer:

- a short local path
- stable drive space
- a repo root not managed by aggressive sync tools

Example:

```text
D:/Projects/MyUnityGame
```

## Healthy editor setup habits

- keep one main production version
- document which version the team uses
- avoid surprise upgrades in the middle of milestones
- pin package versions intentionally
- test editor upgrades in a branch or duplicate first

## Official references

- Unity Learn: https://learn.unity.com
- Programming in Unity / environment tools: https://docs.unity3d.com/Manual/environment-and-tools.html
- Packages list: https://docs.unity3d.com/Manual/PackagesList.html
