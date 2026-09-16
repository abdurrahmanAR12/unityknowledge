# Multiplayer, Netcode, and Unity Gaming Services

Modern Unity multiplayer is a package-and-services conversation, not a UNet conversation.

## Recommended modern stack overview

- Multiplayer docs for overview
- Netcode for GameObjects for GameObject workflows
- Netcode for Entities for large-scale DOTS-oriented multiplayer
- Unity Transport underneath those stacks
- Multiplayer Services for sessions/lobby/relay/matchmaker/hosting flows

## Choosing the right path

### Netcode for GameObjects
Best for:
- GameObject-based projects
- small to mid-scale multiplayer
- teams learning Unity networking

### Netcode for Entities
Best for:
- advanced teams
- data-oriented architectures
- higher scale and performance-driven cases

## Common multiplayer problems

## Problem: State looks correct on host, wrong on client

### Likely causes
- wrong authority assumptions
- object not network-spawned correctly
- client prediction/replication misunderstanding
- local-only state not synchronized intentionally

## Problem: RPC or network variable appears to do nothing

### Check
- object spawned under networking rules?
- ownership/authority correct?
- timing: called before network init or spawn?
- wrong side expecting to execute logic?

## Problem: Connection flow is working locally but fails in real session flow

### Check
- relay/lobby/session setup
- firewall/NAT/environment assumptions
- test path using the intended service flow, not only editor-local shortcuts

## Architecture advice

Multiplayer punishes messy state.

Before networking a system, ask:
- what is the source of truth?
- what state must replicate?
- who is authoritative?
- what can stay purely local?

## Best habit

Build a tiny vertical slice first:
- connect players
- spawn one object
- synchronize one interaction
- handle disconnects cleanly

Then expand.

## Official references

- Multiplayer docs: https://docs.unity3d.com/Manual/multiplayer.html
- Netcode for GameObjects repo: https://github.com/Unity-Technologies/com.unity.netcode.gameobjects
