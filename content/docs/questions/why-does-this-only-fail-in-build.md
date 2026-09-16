# Why Does This Only Fail in Build?

Because the Editor is not the same as the player.

Common roots:
- missing build content/scenes
- Addressables/content build state
- platform-specific code or plugin behavior
- stripping or reflection assumptions
- timing differences hidden by the Editor

Read next:
- Build Pipeline, Platforms, and Release Checklists
- Profiling, Memory, GC, and Performance
- relevant platform page
