# Common Problems by Symptom

Use this page like a fast triage table.

## Editor / setup symptoms

### "Project won't open"
First checks:
- editor version match
- package/manifest validity
- local path permissions
- whether a brand new project opens

### "IntelliSense is broken"
First checks:
- external tools setup
- project file regeneration
- compile errors in Console
- C# extension/tooling installed

## Scripting symptoms

### "Script won't attach"
First checks:
- file/class name match
- inherits MonoBehaviour
- no compile errors
- not in wrong assembly/folder

### "Nothing happens when I press play"
First checks:
- object active?
- component enabled?
- correct scene?
- input system mismatch?
- event never firing?

### "NullReference everywhere"
First checks:
- Inspector assignments
- destroyed objects
- execution order assumptions
- prefab vs instance reference mismatch

## Asset symptoms

### "References disappeared after Git pull"
First checks:
- `.meta` file history
- merge mistakes
- files moved outside Unity

### "Asset works in Editor, not build"
First checks:
- build inclusion
- Addressables content built?
- platform-specific path/plugin issues

## UI symptoms

### "Buttons don't click"
First checks:
- EventSystem
- blocked raycast target
- interactable state
- input module setup

### "UI is slow"
First checks:
- giant canvas/layout churn
- dynamic text/list rebuilds
- UI Toolkit style/layout changes too often

## Graphics symptoms

### "Everything is pink"
First checks:
- render pipeline mismatch
- shader/package compatibility

### "Camera is black"
First checks:
- camera target/culling
- RP asset assignment
- stacked camera setup issues

## Physics symptoms

### "Objects pass through each other"
First checks:
- collision detection mode
- Rigidbody usage
- layer matrix
- transform teleporting

### "Movement is jittery"
First checks:
- FixedUpdate vs Update misuse
- interpolation
- camera follow timing

## Performance symptoms

### "Build stutters every few seconds"
First checks:
- GC allocations
- sync loading
- shader warmup/compilation behavior

### "Mobile build is terrible"
First checks:
- real device profiling
- texture/shader/UI cost
- thermal behavior

## Build symptoms

### "Editor works, build crashes or breaks"
First checks:
- platform-only code paths
- stripped code/content
- missing scenes/content
- plugin compatibility

## XR symptoms

### "AR detects nothing"
First checks:
- package version match
- permissions
- provider plugin enabled
- AR Session and XR Origin setup

### "XR controllers don't respond"
First checks:
- Input System
- XR Interaction Toolkit setup
- runtime/provider plugin state
