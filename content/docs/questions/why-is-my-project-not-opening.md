# Why Is My Project Not Opening?

Use this order:

1. confirm the editor version expected by the project
2. test whether a brand new empty project opens
3. inspect `Packages/manifest.json` for bad package state
4. move the project to a short local path if it lives in a sync folder/network path
5. duplicate before upgrading if Unity prompts for upgrade

Most common roots:
- version mismatch
- broken package/manifest state
- path/permission issues
- damaged Library or import state

Read next:
- Installation and Editor Setup
- Package Manager and Dependency Conflicts
- Package Management, Version Upgrades, and Migrations
