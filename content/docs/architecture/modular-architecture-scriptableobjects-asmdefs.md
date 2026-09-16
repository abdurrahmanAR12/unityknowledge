# Modular Architecture, ScriptableObjects, and Assembly Definitions

This page is about making Unity projects scale without becoming emotionally hostile.

## What modular architecture means in Unity

It does **not** mean building a giant framework before gameplay exists.

It means:
- reducing unnecessary coupling
- giving systems clear ownership
- making change safer
- improving iteration time and readability

## Good architecture goals

- scenes are not the only place where truth lives
- data and behavior are meaningfully separated when useful
- UI does not directly own core gameplay rules
- third-party integrations do not infect the whole codebase
- compile times stay reasonable

## ScriptableObjects as architecture tools

ScriptableObjects are excellent for:
- item/enemy/weapon definitions
- balancing data
- shared configuration
- content databases
- event-channel style communication when used carefully

They are not a license to turn every interaction into abstract ceremony.

## Event-channel caution

ScriptableObject event channels can reduce direct coupling, but overuse creates invisible flow.

Use them when:
- the communication is cross-scene or cross-system
- Inspector-driven wiring is useful

Avoid them when:
- a direct reference is simpler and clearer

## Assembly definitions

These are one of the best upgrades for medium and larger Unity projects.

### Benefits
- faster iteration
- clearer dependency boundaries
- easier separation of runtime/editor/tests
- better plugin isolation

### Starter layout
- `Project.Core`
- `Project.Gameplay`
- `Project.UI`
- `Project.Editor`
- `Project.Tests`
- `Project.Integrations`

## Common architecture problems

## Problem: Everything depends on everything

### Symptoms
- tiny changes trigger wide breaks
- compile times feel large
- refactors are scary
- UI, gameplay, save logic, and audio all talk directly

### Fix direction
- define stable data boundaries
- separate feature folders and assemblies
- move shared abstractions into a small core layer

## Problem: The `GameManager` owns half the project

### Better pattern
Split by responsibility:
- game flow
- save system
- audio routing
- scene loading
- economy/inventory/combat/etc.

## Problem: Too much abstraction too early

If the team is still building core gameplay, over-architecture can be just as harmful as no architecture.

Prefer:
- obvious names
- small components
- data assets
- clean boundaries

over:
- huge generic frameworks
- patterns used only because they sound advanced

## Healthy rule of thumb

> Use the simplest structure that still makes the next three changes easier.

Not the next one change. The next three.
