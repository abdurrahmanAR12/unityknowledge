# Code Style and Review Checklist

Code style is not about aesthetics.
It is about reducing cognitive load and preventing accidental project drift.

## What a Unity code style guide should solve

- naming consistency
- serialization clarity
- lifecycle readability
- scene/prefab reference safety
- architecture boundaries
- review speed

## Practical Unity code style rules

### Naming
- classes: `PascalCase`
- methods: `PascalCase`
- private serialized fields: pick one team standard and stick to it
- constants: clear and explicit
- no vague variable names like `temp2`, `obj`, `managerThing`

### Serialized field style
Favor:

```csharp
[SerializeField] private AudioSource musicSource;
```

over public fields with no ownership discipline.

### MonoBehaviour discipline
- one clear responsibility per component where possible
- keep `Update` clean and intentional
- prefer explicit setup and dependency flow

## Code review checklist

### Correctness
- does the code do what it claims?
- are null/lifecycle assumptions safe?
- are build/platform implications understood?

### Unity-specific safety
- Inspector references handled clearly?
- serialization implications safe?
- scene/prefab assumptions too hidden?
- runtime vs editor code separated?

### Performance smell check
- allocations in hot paths?
- heavy logic in `Update`?
- repeated `GetComponent` or scene searches?

### Architecture smell check
- is this class doing too much?
- is the dependency direction reasonable?
- is third-party coupling leaking too far?

### Readability
- can another teammate understand the intent quickly?
- are logs useful if something fails?
- are names specific enough?

## Team guideline

The point of review is not to show how smart the reviewer is.
The point is to make the project safer and easier to extend.

## Useful official resources

- Unity C# style guide resource: https://unity.com/resources/c-sharp-style-guide-unity-6
- ScriptableObject architecture resource: https://unity.com/resources/create-modular-game-architecture-scriptableobjects-unity-6
