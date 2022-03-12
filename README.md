# TTRC Randomizer
Select exclusions > get randomization

Currently has pairings for TTRCs 1-4

**Note**:

This just brute forces on the randomizer output until a valid combination is found, so don't try anything impossible.

Due to the nature of the randomization code I can't implement my own pathfinding while still maintaining seed backwards compatibilty, so this is what we got.

---
### TODO:
- Implement a true wrapper for bttrandomizer.com to decouple randomization implementation from repo code
- Add an abort switch to stop searching when criteria are too strict
