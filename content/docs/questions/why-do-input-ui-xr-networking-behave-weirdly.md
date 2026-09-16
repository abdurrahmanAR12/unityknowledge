# Why Do Input / UI / XR / Networking Behave Weirdly?

Because these systems are layered and stateful.

They usually break because:
- setup is incomplete or mismatched
- multiple systems are fighting each other
- package/version expectations drifted
- authority/ownership/state activation is unclear

Read next by domain:
- input → Input System package guide
- UI → UI Toolkit, uGUI, and UI Problems
- XR → AR, VR, XR Foundation, and OpenXR + XR package guides
- networking → Multiplayer, Netcode, and UGS + Multiplayer Debugging Runbook
