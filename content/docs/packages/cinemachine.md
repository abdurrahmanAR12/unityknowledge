# Cinemachine

Cinemachine is one of the easiest high-value packages to adopt in many Unity projects.

## What it is for

Cinemachine controls a real Unity camera through lightweight camera-controller objects.

It is ideal for:
- follow cameras
- framing and composition
- blends and transitions
- cutscenes and scripted shots
- reducing camera-script spaghetti

## Common misconceptions

Cinemachine cameras are not extra render cameras in the usual sense.
They are camera controllers that drive the main camera behavior.

## Common problems

## Problem: Camera seems dead or not switching

### Check
- correct Cinemachine setup present?
- priorities/states configured?
- active main camera and brain component present?
- target references assigned?

## Problem: Follow camera jitters

### Check
- target movement timing
- damping too aggressive or too loose
- Rigidbody/player motion update timing mismatch
- camera following a child object with unstable motion

## Problem: Performance or logic confusion with many cameras

Cinemachine cameras are lightweight, but do not keep unnecessary ones active in performance-sensitive scenes if behavior becomes messy.

## Best practices

- separate gameplay camera concerns from raw movement code
- keep targets explicit
- use test scenes for camera experiments
- document which camera rigs are default, cinematic, combat, or dialogue specific

## Official references

- Manual package page: https://docs.unity3d.com/Manual/com.unity.cinemachine.html
- Using Cinemachine: https://docs.unity3d.com/Packages/com.unity.cinemachine@3.0/manual/CinemachineUsing.html
