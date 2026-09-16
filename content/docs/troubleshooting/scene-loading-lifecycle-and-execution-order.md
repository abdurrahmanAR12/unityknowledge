# Scene Loading, Lifecycle, and Execution Order

Many Unity bugs are not logic bugs.
They are timing bugs.

## What this usually looks like

- object A expects object B to exist already
- scene loads, but references are not ready
- singleton/service initialization order is brittle
- code works in one scene and fails in another

## Common symptoms

- null refs only on first load
- duplicate managers after scene change
- UI opens before data is ready
- additive scene content initializes in the wrong order

## Core cause categories

- misuse of `Awake` / `Start` / `OnEnable`
- scene transition assumptions
- duplicate bootstrap objects
- DontDestroyOnLoad misuse
- async loading state not coordinated properly

## First things to inspect

- what is created in `Awake`?
- what depends on other objects in `Start`?
- what subscribes in `OnEnable`?
- are scene loads additive or single?
- is there more than one copy of a bootstrap/system object?

## Common problem: duplicate managers

### Usually caused by
- prefab/system present in multiple scenes
- `DontDestroyOnLoad` used without bootstrap discipline

### Fix direction
- define one bootstrap path
- create clear ownership for persistent systems

## Common problem: code works after reload, but not first boot

### Usually caused by
- initialization ordering
- data not loaded before UI/gameplay asks for it

### Safer approach
- explicit initialization states
- loading gates
- clear bootstrap scene or startup flow

## Prevention habits

- create one startup scene or one documented bootstrap system
- do not rely on magical order assumptions unless documented
- use small load-test scenes
- separate persistent services from scene content intentionally
