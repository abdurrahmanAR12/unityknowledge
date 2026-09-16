# Package Decision Matrix

Use this page when you are deciding whether a package is worth adopting.

## Quick matrix

| Need | Recommended package/system | Adopt when | Main cautions |
| --- | --- | --- | --- |
| modern input | Input System | starting fresh or needing multiple devices/rebinding | setup complexity, action-map discipline |
| dynamic content loading | Addressables | project is larger than a tiny prototype | release-handle discipline, content build flow |
| camera workflows | Cinemachine | custom camera scripts are getting messy | rig clarity, follow/update timing |
| cutscenes and sequences | Timeline | multiple tracks/disciplines need coordination | hidden sequence dependencies |
| AR | AR Foundation | cross-platform AR is a real target | provider/version alignment |
| multiplayer | Netcode for GameObjects | GameObject-based multiplayer project | authority/state design |
| XR interaction | XR Interaction Toolkit + OpenXR | VR/MR/AR interactions matter | input/runtime setup complexity |
| large-scale simulation | DOTS / Jobs / Burst | measured CPU-scale problem exists | complexity and team readiness |

## Read this before adding any package

Ask:
- what problem does it solve right now?
- what is the maintenance cost?
- is Unity already providing a supported path?
- how hard is removal later?
- what platform and version risks does it introduce?

## Useful follow-up pages

- [Which Unity Package Should I Adopt?](/docs/questions/which-unity-package-should-i-adopt)
- [Package Guides Overview](/docs/packages)
- [Asset Store and Third-Party Plugin Integration Policy](/docs/workflow/asset-store-and-third-party-plugin-policy)
