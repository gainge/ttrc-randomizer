# TTRC Randomizer
https://gainge.github.io/ttrc-randomizer/

* Select exclusions > get randomization
* Currently has pairings for TTRCs 1-4
<img width="1070" alt="Screen Shot 2022-03-11 at 10 47 42 PM" src="https://user-images.githubusercontent.com/28658489/158005728-66d671d9-930f-4e53-a471-86ff59cb69f8.png">

**Note**:

This just brute forces on the randomizer output until a valid combination is found, so don't try anything impossible.

Due to the nature of the randomization code I can't implement my own pathfinding while still maintaining seed backwards compatibilty, so this is what we got.

---
### TODO:
- Implement a true wrapper for bttrandomizer.com to decouple randomization implementation from repo code
- Add an abort switch to stop searching when criteria are too strict
