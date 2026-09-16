# CI, Build Automation, and DevOps

The goal of Unity CI is simple:

- catch breakage earlier
- produce builds consistently
- reduce "works on my machine" chaos

## Minimum useful CI goals

- build automatically on main or release branches
- alert the team when the project stops building
- preserve downloadable artifacts
- make platform build steps repeatable

## Why this matters in Unity specifically

Unity projects often fail because of:
- package/version drift
- platform module assumptions
- build-only code paths
- missing scenes/content
- plugin platform incompatibilities

CI turns these into earlier failures instead of release-week surprises.

## Good CI pipeline stages

- source control trigger
- clean checkout
- package restore/resolve
- Unity build per target
- optional test execution
- artifact collection
- notifications

## Unity Build Automation

Unity Build Automation can:
- monitor source control
- build on commit/trigger
- produce downloadable builds
- notify the team quickly about failures

## Common CI problems

## Problem: Local build works, CI build fails

### Check
- uncommitted local settings/content
- package/version differences
- platform modules or credentials not configured in CI
- hidden dependency on local machine files/tools

## Problem: Builds are too slow to be useful

### Improve by
- limiting targets per pipeline stage when appropriate
- separating smoke builds from full release builds
- keeping content and package sprawl controlled

## Problem: CI is noisy and ignored

Fix by:
- making failures meaningful
- routing alerts well
- keeping build ownership clear

## Best practices

- automate at least one reliable smoke build early
- connect CI to version control intentionally
- keep platform-specific secrets/config documented
- review failed build logs the same day, not later

## Official references

- Build Automation: https://docs.unity.com/devops/en/manual/unity-build-automation
- Connect source control: https://docs.unity.com/devops/en/manual/build-automation-settings
