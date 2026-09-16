# Package Manager and Dependency Conflicts

Package problems are some of the most annoying Unity problems because they can look like everything is broken at once.

## Symptoms

- project opens with compile errors after package changes
- Package Manager spins or fails to resolve
- classes vanish after upgrade
- package samples or tools no longer appear
- a plugin works on one machine but not another

## First checks

- did Unity editor version change?
- did `manifest.json` change?
- did a transitive dependency shift?
- is this a preview package in a production project?
- are third-party plugins expecting different package versions?

## Safe diagnosis flow

1. compare current `Packages/manifest.json` to last known-good commit
2. identify the first package change that introduced breakage
3. isolate whether the break is editor-version-related or package-version-related
4. test in a branch, not main
5. revert to known-good versions before trying random newer ones

## Common problem: package exists, types still missing

### Check
- assembly definition references
- namespaces changed between package versions
- package not fully resolved/imported
- version mismatch with current editor

## Common problem: one plugin update breaks another tool

This usually means you need to treat integrations as isolated systems.

### Best practice
- keep third-party integrations in their own folder/assembly
- document exact versions
- upgrade integrations one at a time

## Prevention habits

- commit package changes in dedicated commits
- avoid huge upgrade bundles
- keep a small package ledger in docs
- prefer released packages for production when possible
