# Error Message Cheatsheet

Quick interpretations for common Unity/C# errors.

## `NullReferenceException`
Something is null.

Check:
- Inspector references
- destroyed objects
- init order

## `MissingReferenceException`
A Unity object was destroyed but code still tried to use it.

## `CS0246`
Type/namespace not found.

Check:
- missing `using`
- package not installed
- assembly definition reference missing

## `CS0103`
Name does not exist in current context.

Usually spelling or scope.

## `The associated script cannot be loaded`
Check:
- file/class name mismatch
- compile errors
- assembly issues

## `Coroutine couldn't be started`
Check:
- method exists
- component/object active
- correct coroutine call pattern

## `A scripted object has a different serialization layout`
Usually script/serialized field changes combined with stale data or version mismatch.

Check:
- recent field/type changes
- `[SerializeField]` and serializable layout changes
- asset/script upgrade path

## `Shader is not supported on this GPU`
Check:
- platform support
- shader target/features
- fallback paths
