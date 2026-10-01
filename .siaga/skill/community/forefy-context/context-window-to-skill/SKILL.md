---
name: context-window-to-skill
description: Takes the active conversation as reference to understand how a skill can be created, with all the lessons learned from the user's needs in the conversation.
category: "community"
version: "1.0.0"
author: "forefy-context"
license: "MIT"
source: "https://github.com/forefy/.context"
sha256: 92f8c70241e1bb185757bb17d50649399a086498d136d6d57c663e716e858559
signature: pLbeQEkc02UQhhNvusL/kJlfyGaO5ZTaa7g0E9bkKpVHSfW96agpIi6idtGo3BPiO/cdPiihdvlnV/2NzDs+Bg==
signed_by: siaga-official
---

# Use Case:
User had finished working on his feature or task successfully, but had to tweak lots of stuff in the behavior of the agent prior to completion - we now want to create a skill that in the next time will make this task a breeze

Steps:
1. Analyze conversation and understand fully what the user tried to achieve
2. Analyze where were the pitfalls, user frustrations, and what pre-information would have made the results quicker to get with the most quality
3. Print to the user 10 (or more) top items you think are the core points to base the new skill upon
4. Consult with the user if questions still remain
5. Create a skill and place it on the ~/.claude/skills/ directory. comply to agent skill format and [https://code.claude.com/docs/en/skills](https://code.claude.com/docs/en/skills)

Results:
- Working new skill, that next time would do the job much better with all the tweaks needed to perfect it based on learned conversation and observation
- New skill should be reusable (e.g. think fixes also for future usecases other than the single one the user encountered)