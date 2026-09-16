# Multiplayer Debugging Runbook

Multiplayer debugging becomes manageable when you stop treating it as one big mystery.

## Triage questions first

- is the problem connection, spawning, authority, state sync, prediction, or services flow?
- does it happen on host only, client only, or both?
- does it happen in local test only or real session flow too?

## Fast debugging categories

### 1. Connection problems
Check:
- startup path
- transport/session/lobby flow
- environment/firewall/relay assumptions

### 2. Spawning problems
Check:
- object registered correctly?
- spawn timing correct?
- network scene init complete?

### 3. Authority problems
Check:
- who owns this object/state?
- is client writing something server should own?
- are you expecting a local-only value to replicate magically?

### 4. State sync problems
Check:
- did the value actually change on the authority side?
- is the synchronization primitive correct?
- is there a race between initialization and first sync?

### 5. Services/session flow problems
Check:
- lobby/relay/session data
- join path
- timeout/disconnect handling

## Common symptom: works on host, broken on client

Usually an authority/state ownership issue first.

## Common symptom: works with two editors locally, fails in real deployment

Usually a services/transport/environment assumption first.

## Best practices

- log connection lifecycle clearly
- create a tiny multiplayer debug HUD
- test vertical slices, not giant systems first
- document authority rules per feature
