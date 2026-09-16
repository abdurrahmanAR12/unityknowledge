# Animator Controller Debugging

Animator issues waste time because the graph often *looks* fine while behavior is still wrong.

## What this page helps with

- animations not playing
- transitions not firing
- stuck states
- bad layer or blend behavior
- root motion confusion
- performance pain from AnimatorController usage

## First things to inspect

- Animator component enabled?
- controller assigned?
- parameters actually changing?
- transition conditions really matching?
- is the current state what you think it is?

## Useful runtime checks

Use runtime inspection deliberately.

Example:

```csharp
using UnityEngine;

public class AnimatorDebugProbe : MonoBehaviour
{
    [SerializeField] private Animator animator;

    private void Update()
    {
        var state = animator.GetCurrentAnimatorStateInfo(0);
        Debug.Log($"Layer0 State Hash: {state.fullPathHash}, normalizedTime: {state.normalizedTime}");
    }
}
```

## Common problems

## Problem: Trigger is set, transition still does not happen

Check:
- wrong layer?
- transition conditions not actually satisfied?
- exit time requirement blocking transition?
- another transition interrupting it?

## Problem: Animator seems to ignore the state you expect on startup

Check:
- entry transition behavior
- default state assumptions
- any startup code forcing state elsewhere

## Problem: Blend tree feels wrong

Check:
- parameter ranges
- damping/interpolation assumptions
- values not reaching expected thresholds

## Problem: Root motion and gameplay movement fight each other

Decide clearly:
- animation drives motion
- gameplay drives motion
- or a controlled hybrid

Ambiguity here causes pain fast.

## Problem: Animator cost is unexpectedly high

Animator controllers are always evaluating transitions on their active machines.

Consider:
- simplifying idle/rarely-used systems
- using Generic instead of Humanoid where appropriate
- using simpler animation approaches for rare one-shot content

## Helpful tools and patterns

- `Animator.GetCurrentAnimatorStateInfo`
- `StateMachineBehaviour`
- layer-weight debugging
- parameter logging during state changes

## Best practices

- keep parameter names explicit
- keep controller graphs readable
- document layer purpose
- create dedicated animation debug scenes
- avoid burying crucial gameplay state only inside transition magic

## Official references

- Animator API: https://docs.unity3d.com/ScriptReference/Animator.html
- GetCurrentAnimatorStateInfo: https://docs.unity3d.com/ScriptReference/Animator.GetCurrentAnimatorStateInfo.html
- StateMachineBehaviour: https://docs.unity3d.com/ScriptReference/StateMachineBehaviour.html
