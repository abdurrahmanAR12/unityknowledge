# Save/Load Systems

Save systems feel simple at first and become serious quickly.

This page is about building save/load systems that are boring, reliable, and recoverable.

## What a save system should do

At minimum, a healthy save system should:
- save the right data
- load it predictably
- survive version changes better than pure luck
- fail safely when data is corrupt or missing
- avoid tying persistence to random scene objects

## What not to save directly

Do not try to save the entire live scene state by serializing random MonoBehaviours blindly.

That usually creates fragile coupling to:
- scene hierarchy
- prefab layout
- transient runtime objects
- object references that mean nothing next session

## Better mental model

Save:
- identifiers
- values
- progress state
- inventory records
- unlocked flags
- settings
- timestamps or checkpoints

Reconstruct:
- live GameObjects
- scene arrangement
- temporary runtime effects
- animation state unless truly needed

## Common save strategies

### PlayerPrefs
Good for:
- small settings
- simple toggles
- volume, language, sensitivity, first-run flags

Bad for:
- meaningful game progression with complex structure
- large save payloads
- security-sensitive data

### JSON file saves
Good default for many Unity projects.

Why:
- readable
- debuggable
- easy to version conceptually
- works well with data transfer objects

### Binary/custom serialization
Use only when there is a clear reason.
Otherwise JSON is usually easier to debug and maintain.

## JsonUtility reality check

`JsonUtility` is useful, but limited.

Important reminders:
- it works with Unity's serializer rules
- it serializes fields, not arbitrary properties
- collections often need wrapping in a serializable container type
- complex polymorphic cases may need more careful design

## Example save DTO

```csharp
using System;
using System.Collections.Generic;

[Serializable]
public class SaveData
{
    public string saveVersion = "1.0";
    public string sceneId;
    public int coins;
    public int playerLevel;
    public float health;
    public List<string> inventoryItemIds = new();
    public float[] playerPosition;
}
```

## Example save manager (simple JSON file approach)

```csharp
using System.IO;
using UnityEngine;

public static class SaveSystem
{
    private static string SavePath => Path.Combine(Application.persistentDataPath, "save.json");

    public static void Save(SaveData data)
    {
        string json = JsonUtility.ToJson(data, true);
        File.WriteAllText(SavePath, json);
    }

    public static bool TryLoad(out SaveData data)
    {
        data = null;

        if (!File.Exists(SavePath))
            return false;

        string json = File.ReadAllText(SavePath);
        data = JsonUtility.FromJson<SaveData>(json);
        return data != null;
    }
}
```

## Common save/load problems

## Problem: Save works once, then load breaks after refactor

### Usually caused by
- renamed fields
- changed data shape
- removed identifiers
- assuming old save data still matches new code exactly

### Better approach
- include a `saveVersion`
- support migration logic when needed
- keep save DTOs separated from volatile runtime classes

## Problem: Loading recreates wrong state

### Usually caused by
- saving scene objects instead of durable identifiers
- loading before scene/bootstrap is ready
- mixing visual state and core data too tightly

## Problem: Save file corruption crashes startup

### Better behavior
- validate data
- catch file/parse issues
- allow fallback to default save
- log meaningful error details

## Problem: PlayerPrefs used for too much

This is extremely common.

Use PlayerPrefs for settings, not as your whole save architecture.

## Versioning strategy

Always include some version marker in real save data.

Example:
- `saveVersion`
- content revision
- profile slot metadata

This gives you a migration hook later.

## Slot design questions

Decide early:
- one save or multiple slots?
- auto-save plus manual save?
- checkpoint-based or free save?
- cloud sync later or not?

## Security / anti-tamper reality

If this is a single-player local game, lightweight obscuring may be enough.
If this is competitive or economy-sensitive, do not trust local save data blindly.

## Best practices

- separate save DTOs from scene objects
- save IDs, not live references
- keep data shape stable where possible
- include version info
- handle corrupted/missing data safely
- test save/load after scene transitions and after upgrades
- make one dedicated save/load test scene if the system is important

## Official references

- JSON serialization: https://docs.unity3d.com/Manual/json-serialization.html
- JsonUtility API: https://docs.unity3d.com/ScriptReference/JsonUtility.html
