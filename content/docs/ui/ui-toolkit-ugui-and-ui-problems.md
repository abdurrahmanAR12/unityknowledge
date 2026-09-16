# UI Toolkit, uGUI, and UI Problems

UI systems cause both visual bugs and hidden performance pain.

## Choosing the right UI system

### Use UI Toolkit when
- you want scalable, stylesheet-driven UI
- your UI will evolve significantly
- you want Unity's modern UI path

### Use uGUI when
- the project already depends on it
- plugin support requires it
- the migration cost is not worth it

## Common UI problems

## Problem: UI looks blurry

### Check
- canvas scaling / reference resolution
- sprite import settings
- font asset quality
- incorrect scaling in world-space canvases

## Problem: Buttons stop responding

### Check
- EventSystem exists?
- raycast target blocked by another element?
- object active and interactable?
- new Input System UI module configured correctly?

## Problem: UI rebuilds are expensive

Especially in uGUI.

### Common causes
- too much changing under one giant canvas
- layout groups recalculating excessively
- frequent text or hierarchy changes

### Fix direction
- split canvases where sensible
- reduce unnecessary layout churn
- pool repeated list items

## Problem: UI Toolkit runtime UI feels slow

### Check
- style/layout churn
- over-large visual trees
- dynamic element creation/destruction too often
- asset loading strategy for large UI documents

## Problem: Localization breaks layout

This is common and predictable.

Prevention:
- test long strings early
- do not hard-code tiny text boxes everywhere
- support flexible layout behavior

## Best practices

- choose one primary UI strategy per project area
- separate UI view logic from gameplay logic
- create dedicated UI test scenes
- profile UI, do not assume it is cheap

## Official references

- UI Toolkit docs: https://docs.unity3d.com/Manual/UIElements.html
