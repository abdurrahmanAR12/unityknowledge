# Common Scripting Errors and Debugging

This page is for the practical question:

> "What does this Unity error usually mean, and what should I check first?"

## Debugging order that saves time

1. read the **first real error**, not just the loudest one
2. check whether compile errors exist anywhere else
3. reduce the problem to one scene/object/script
4. inspect references and lifecycle assumptions
5. only then start rewriting code

## High-frequency errors

## `NullReferenceException`

Means you tried to use something that is null.

### First things to check
- was the reference assigned in the Inspector?
- was the object destroyed?
- is this running before initialization finished?
- is a prefab field different from the scene instance you expected?

## `MissingReferenceException`

This is similar to null, but often means a Unity object existed and was destroyed.

### Typical pattern
You cached a reference to a `GameObject`, `Transform`, or `Component`, then later used it after destruction.

## `The associated script cannot be loaded`

### Usually caused by
- class/file name mismatch
- compile errors
- missing assembly reference
- script moved into wrong assembly/folder

## `CS0246 type or namespace could not be found`

### Usually caused by
- missing `using`
- missing assembly reference
- package not installed
- typo in type name

## `CS0103 The name ... does not exist in the current context`

Usually a scope or spelling problem.

## `Coroutine couldn't be started`

Check:
- method name correct?
- object/component active?
- are you stopping/starting coroutines from the right instance?

## `GetComponent` problems

### Symptom
`GetComponent<T>()` returns null.

### Check
- is the component actually on the same GameObject?
- should this be `GetComponentInChildren` or `GetComponentInParent`?
- was the component removed/disabled?

## Event subscription bugs

A sneaky class of issue.

### Symptoms
- duplicate callbacks
- callbacks on destroyed objects
- memory-like leaks in managed flow
- UI updating multiple times unexpectedly

### Prevention
Subscribe in `OnEnable` and unsubscribe in `OnDisable` when appropriate.

## Debugging checklist by symptom

### Symptom: code works in Editor, fails in build
Check:
- platform-specific paths
- stripping/reflection issues
- Resources/Addressables/build content setup
- race conditions hidden by Editor behavior

### Symptom: script compiles, but nothing happens
Check:
- object active in scene?
- component enabled?
- expected scene loaded?
- event never firing?
- input system mismatch?

### Symptom: logs spam every frame
Usually means your debug message is inside `Update`/`FixedUpdate` or a loop.

Fix it quickly. Log spam can hide the real signal.

## Practical logging advice

Good logs should answer:
- which object?
- which state?
- what changed?
- what was expected?

Bad log:

```csharp
Debug.Log("here");
```

Better log:

```csharp
Debug.Log($"[Inventory] Slot refresh failed for {gameObject.name}: itemData was null");
```

## Use the debugger when the issue is state-related

If the bug is about:
- wrong value
- wrong branch
- wrong timing
- wrong object reference

use breakpoints and inspect state.

## Prevention habits

- keep methods short enough to reason about
- avoid giant all-purpose managers
- guard serialized references in `Awake`/`Start`
- keep logs intentional
- convert repeated errors into internal troubleshooting notes
