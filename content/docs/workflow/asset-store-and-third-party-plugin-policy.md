# Asset Store and Third-Party Plugin Integration Policy

Third-party assets can save months.
They can also quietly destabilize a project.

## Goal of this page

Create a policy that helps the team adopt useful assets without letting them hijack architecture, packages, builds, or performance.

## Core rule

> Do not import a plugin just because it looks helpful.
Import it because a clearly defined project need justifies the dependency.

## Questions to ask before adoption

- what problem does this solve?
- is Unity already giving us a better-supported path?
- what editor/package versions does it require?
- is it maintained recently?
- what platforms does it support?
- can it be isolated in its own folder/assembly?
- what is the exit strategy if we need to remove it?

## High-risk categories

- rendering/shader frameworks
- networking frameworks
- save/inventory frameworks that want to own half the project
- native plugins
- anything that edits global project settings aggressively

## Safe adoption workflow

1. evaluate in a sandbox branch/project
2. read docs and release notes
3. inspect folders, assemblies, and package dependencies
4. validate builds on target platforms
5. document exactly why it was adopted

## Integration rules

- keep third-party assets under a clear folder root
- isolate wrappers/adapters in your own code
- avoid modifying vendor code directly unless unavoidable
- document version and setup steps
- remove sample/demo content you do not actually use

## Common problems

## Problem: Plugin upgrade breaks project unexpectedly

Prevention:
- isolate plugin changes in dedicated commits/branches
- do not upgrade several plugins at once

## Problem: Plugin API leaks everywhere into gameplay code

Better approach:
- create your own interface/service layer where feasible
- wrap vendor behavior instead of coupling everything directly

## Problem: Asset imported thousands of unnecessary files

Do not normalize this.
Clean it up early.

## Minimal adoption note template

```md
Plugin:
Version:
Why we adopted it:
Owner:
Platforms validated:
Risks:
Removal difficulty:
```
