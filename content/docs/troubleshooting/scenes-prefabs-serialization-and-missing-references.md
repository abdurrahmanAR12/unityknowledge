# Scenes, Prefabs, Serialization, and Missing References

This is one of the most painful Unity problem clusters.

When these issues appear, they feel random.
They usually are not.

## What is really going on

Unity projects rely heavily on:
- serialized fields
- asset GUIDs from `.meta` files
- prefab relationships
- scene object references
- script/type identity across assemblies and namespaces

When any of those move carelessly, references break.

## Common pain points

## Problem: A prefab instance no longer matches expected values

### Likely causes
- overrides on the scene instance
- changes applied to instance but not base prefab, or vice versa
- nested prefab confusion
- fields changed or renamed in scripts

### What to inspect
- prefab overrides panel
- whether the field is coming from root prefab or nested child prefab
- whether the script changed serialized field names/types recently

## Problem: Scene opens, but many references are missing

### Likely causes
- lost/regenerated `.meta` files
- merge conflict resolved badly
- script class moved/renamed/namespace changed
- prefab or asset deleted/recreated instead of preserved

### First response
- check version control history before manually reassigning everything
- identify whether the original GUID can be restored
- compare with a known-good branch/commit

## Problem: Serialized field data disappeared after refactor

### Likely causes
- field renamed without migration handling
- type changed incompatibly
- assembly/namespace move broke serialized identity
- object changed from one structure to another with no data migration plan

### Prevention habits
- refactor serialized fields carefully
- test data assets and prefabs after namespace/asmdef changes
- avoid large-scale rename storms without validation

## Problem: Prefab changes create chaos across scenes

### Typical reasons
- prefab used for too many unrelated roles
- weak naming and ownership
- no test scene for the prefab system
- applying instance overrides without understanding scope

## Problem: Missing references after plugin or package removal

If a package provided component types or serialized assets, removing it can orphan references.

### Safer workflow
- remove packages in a branch
- inspect scenes/prefabs/components before committing removal
- replace or migrate dependent content intentionally

## Unity serialization rules that matter in practice

- Unity serializes fields, not regular properties
- some type changes break saved data expectations
- script identity matters more than many beginners expect
- `ScriptableObject` and prefab/scene data lifetimes behave differently

## Prevention checklist

- [ ] commit `.meta` files always
- [ ] move/rename assets inside Unity when possible
- [ ] test prefabs after script field refactors
- [ ] review overrides before applying broadly
- [ ] use version control history before mass manual repair
- [ ] create small validation scenes for complex prefab systems

## When under deadline, do this first

If references suddenly disappear:
1. stop making random edits
2. branch or duplicate the project
3. inspect Git history and `.meta` files
4. identify whether this is GUID loss, script identity change, or prefab override confusion
5. only then start repairing assets

That order can save hours.
