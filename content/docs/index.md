# Unity Developer Knowledge Base

This is a **docs-site style**, problem-oriented Unity knowledge base.

It is built for the question real developers ask every day:

> "What is going wrong, why is it going wrong, and what is the fastest safe fix?"

The earlier documentation pack was useful as a map, but you were right: it was still too high-level to function as a **serious learning resource** or as a **developer survival manual**.

This version is different.

## What this site is trying to do

This site is designed to help with four things at the same time:

1. **Learn Unity properly**
2. **Set up projects with fewer future regrets**
3. **Diagnose common and painful problems faster**
4. **Adopt best practices without becoming dogmatic**

## Who this is for

- beginners who need a stable path
- solo devs who want to move faster without chaos
- teams who need internal standards
- technical leads who want fewer repeated mistakes
- anyone who has already said: "Why is Unity doing this?"

## How to use this site

### If you are new
Read in this order:

1. `Start Here`
2. `Learning Paths`
3. `Installation and Editor Setup`
4. `First Project and Project Settings`
5. `Project Organization and Version Control`

### If you are already working in Unity
Jump by problem domain:

- project is messy → Workflow
- scripts are breaking → Scripting
- prefabs/scenes/assets are cursed → Assets + Troubleshooting
- frame rate is unstable → Optimization
- builds fail → Builds
- XR or multiplayer issues → XR / Multiplayer

## Core philosophy

A lot of Unity pain comes from five repeat offenders:

- weak project structure
- unclear ownership of systems
- version/package drift
- late profiling
- copying tutorial patterns directly into production

So this docs site keeps repeating a few ideas on purpose:

- choose your baseline early
- keep your architecture boring and clear
- prefer official docs for source-of-truth behavior
- validate on target hardware early
- write tiny internal notes while the answer is fresh

## What makes this more useful than a link dump

Each page aims to include:

- what the system is for
- when to use it
- common failure modes
- diagnosis steps
- fixes
- prevention habits
- official references

And the site is now split into two practical layers:

- **runbook/troubleshooting pages** for when something is broken
- **package guides** for when you know what you want to adopt and need the safest path

## Important reality check

No Unity documentation set can literally cover **every possible problem**.

But this one is being structured around the **most common, most expensive, and most demoralizing problems** developers hit in real projects.

That is usually what matters most.

## Suggested internal team usage

If you are using this in a real team, add a tiny header to your local copy:

```md
Project baseline:
- Unity version:
- Render pipeline:
- Target platforms:
- Input system:
- UI system:
- Networking stack:
- XR packages:
```

That one block prevents a lot of confusion later.

## Site status

This site is now organized as a documentation base and can be expanded like an internal handbook.
If you want, it can later be converted into a full MkDocs or Docusaurus site with custom theme/search.

## Official references worth pinning immediately

- Unity Manual: https://docs.unity3d.com/Manual/index.html
- Scripting API: https://docs.unity3d.com/ScriptReference/index.html
- Unity Learn: https://learn.unity.com
- Best practice guides: https://docs.unity3d.com/Manual/best-practice-guides.html
- Optimization hub: https://docs.unity3d.com/Manual/analysis.html
