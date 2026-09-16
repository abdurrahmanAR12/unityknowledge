# Release Checklist Master

Use this page before major internal milestones or public builds.

## Project health

- [ ] Unity version frozen for release branch
- [ ] package changes frozen or tightly controlled
- [ ] third-party plugin versions documented
- [ ] major scenes open without missing references

## Build health

- [ ] development build tested
- [ ] release build tested
- [ ] platform-specific signing/config validated
- [ ] scenes/content included correctly
- [ ] Addressables/content built correctly if used

## Performance health

- [ ] target hardware profiling captured
- [ ] GC spikes reviewed
- [ ] memory growth reviewed
- [ ] mobile/XR specific performance reviewed where relevant

## Gameplay/system health

- [ ] save/load tested
- [ ] scene transitions tested
- [ ] UI navigation tested
- [ ] onboarding/main flow tested from fresh boot

## QA / debugging readiness

- [ ] crash/log collection path known
- [ ] known issues list updated
- [ ] release notes / changelog updated

## Read next

- [Build Pipeline, Platforms, and Release Checklists](/docs/builds/build-pipeline-platforms-and-release-checklists)
- [Performance Runbook](/docs/troubleshooting/performance-runbook)
- [CI, Build Automation, and DevOps](/docs/workflow/ci-build-automation-and-devops)
