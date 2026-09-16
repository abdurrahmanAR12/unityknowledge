# C# and Unity Scripting

This page is about writing Unity scripts that are not just functional, but understandable and less fragile.

## What Unity scripting really is

In most Unity projects, scripting means combining:

- C# language basics
- Unity lifecycle methods
- serialized fields and Inspector-driven data
- scene/prefab references
- runtime logic tied to components

## The mental model that helps most

Think of a Unity script as one of these roles:

- **data holder**
- **behavior controller**
- **view/UI driver**
- **system/service**
- **editor tooling**

A lot of bad Unity code happens when one class tries to be all five.

## Lifecycle basics that trip people up

### `Awake`
Use when the component must initialize itself before normal runtime flow starts.

### `OnEnable`
Good for subscribing to events, enabling runtime hooks, or resetting temporary state.

### `Start`
Good when initialization depends on other `Awake` calls already having happened.

### `Update`
Use for frame-based logic that really must happen every frame.
Do not put everything here out of habit.

### `FixedUpdate`
Use for physics-related logic.
If a Rigidbody is involved, this matters.

### `LateUpdate`
Good for camera follow and post-movement adjustments.

## Common scripting problems

## Problem: Script is not attaching to GameObject

### Likely causes
- file name and class name do not match
- compile errors anywhere in the project
- class is not public when expected
- class does not inherit from `MonoBehaviour`
- script is inside an Editor-only assembly/folder

## Problem: Serialized field is not showing in Inspector

### Check
- field is `public` or marked `[SerializeField]`
- type is serializable by Unity
- property is not being confused with a field
- script compiled successfully
- custom inspector is not hiding it

### Important Unity serialization reminder
Unity serializes fields, not normal C# properties, unless you use specific serialization approaches.

## Problem: References look assigned, but become null at runtime

### Likely causes
- object destroyed at runtime
- scene reload changed object lifetime
- prefab instance differs from expected scene object
- wrong reference assigned in prefab vs instance
- execution order assumptions are wrong

## Problem: `Update` is doing too much

### Symptoms
- logic becomes impossible to reason about
- profiler shows script cost growing
- many hidden allocations or checks every frame
- bugs become timing-sensitive

### Better direction
- use events when state changes are discrete
- use coroutines for structured sequences
- split responsibilities into smaller components
- cache references

## Coroutines: useful, but not magic

Coroutines are great for:
- timed sequences
- fade flows
- staged loading steps
- repeated polling when event alternatives are not practical

Coroutines are **not** automatically more performant than `Update`.
They are mostly a structure tool.

## Script example: clean serialized reference usage

```csharp
using UnityEngine;

public class HealthView : MonoBehaviour
{
    [SerializeField] private HealthModel model;
    [SerializeField] private TMPro.TextMeshProUGUI label;

    private void OnEnable()
    {
        if (model != null)
            model.Changed += Refresh;
    }

    private void OnDisable()
    {
        if (model != null)
            model.Changed -= Refresh;
    }

    private void Start()
    {
        Refresh();
    }

    private void Refresh()
    {
        if (label != null && model != null)
            label.text = $"HP: {model.CurrentHealth}";
    }
}
```

The key win here is not complexity. It is clarity.

## Healthy scripting habits

- prefer small classes with one main responsibility
- use `[SerializeField] private` often
- avoid global direct references unless truly justified
- keep runtime and editor code separate
- treat null safety as normal discipline, not paranoia
- do not rely on magic execution timing if you can avoid it

## When to use ScriptableObjects instead of MonoBehaviours

Use ScriptableObjects when data should:
- live as an asset
- be shared across many objects/scenes
- be editable without needing a GameObject
- represent configuration, definitions, or reusable state models

## Official references

- Programming in Unity: https://docs.unity3d.com/Manual/scripting.html
- ScriptableObject API: https://docs.unity3d.com/ScriptReference/ScriptableObject.html
