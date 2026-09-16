# Netcode for GameObjects

Netcode for GameObjects is Unity's high-level networking SDK for GameObject/MonoBehaviour projects.

## What it is for

It helps GameObject-based projects implement multiplayer synchronization, spawning, authority, and RPC/state workflows.

## Best fit

- GameObject-based multiplayer projects
- teams not using DOTS for networking
- practical multiplayer prototypes and many production cases

## What to understand early

Multiplayer is not just package setup.
It is a state-ownership problem.

Before coding features, define:
- who owns what
- what must replicate
- what stays local
- what is authoritative

## Common problems

## Problem: Works on host, broken on clients

### Check
- authority assumptions
- network object spawning
- local-only state pretending to be synced
- RPC path executing on unexpected side

## Problem: Spawning behaves inconsistently

### Check
- object registered as network prefab?
- correct spawn timing?
- scene/network manager init complete?

## Problem: Desync bugs become hard to reason about

This usually means gameplay state was not designed cleanly before networking it.

## Best practices

- network one small vertical slice first
- keep local architecture clean before scaling networking
- document replicated state explicitly
- build dedicated network test scenes and debug UI

## Official references

- Manual package page: https://docs.unity3d.com/Manual/com.unity.netcode.gameobjects.html
- Repo: https://github.com/Unity-Technologies/com.unity.netcode.gameobjects
