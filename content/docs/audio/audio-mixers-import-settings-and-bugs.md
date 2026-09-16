# Audio, Mixers, Import Settings, and Bugs

Audio problems are often underestimated because they do not always crash the game — they just make it feel worse.

## Common audio problems

## Problem: Audio is too large in build

### Check
- compression settings
- load type
- sample rate optimization
- whether long music tracks are using streaming appropriately

## Problem: Sound effect does not play

### Check
- AudioSource present and configured?
- listener exists?
- mixer routing muting it?
- object active?
- volume/spatial blend settings sensible?

## Problem: Audio behaves differently on mobile

### Check
- platform-specific import settings
- memory pressure
- streaming/compressed-in-memory tradeoffs
- device audio/session quirks

## Problem: Mixing becomes chaotic

Use an Audio Mixer early enough.

Route at least:
- Music
- SFX
- UI
- Voice / Ambience if needed

This makes balancing and ducking far easier.

## Practical advice

- create one audio test scene
- standardize import defaults by asset type
- document mixer group usage
- avoid scattering volume logic everywhere in code

## Official references

- Audio overview: https://docs.unity3d.com/Manual/AudioSection.html
- Audio Mixer: https://docs.unity3d.com/Manual/AudioMixer.html
