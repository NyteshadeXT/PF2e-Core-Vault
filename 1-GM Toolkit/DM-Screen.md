---
obsidianUIMode: preview
---

> [!note| clean no-i]+ ­
> ```dataview
> TABLE without ID
> link(file.name, aliases[0]) AS "Character", 
> ac AS "AC", 
> passive.perception as "Perc.",
> passive.investigation as "Inv.",
> passive.insight as "Ins."
> 
> FROM #Player OR #NPC
> 
> WHERE Status = "Active"
> 
> SORT file.name ASC
> ```

#### Known Languages

```dataviewjs
dv.list(dv.pages()
		.where(p => p.tags && p.tags.includes("PC") && p.active == "✅")
		.languages.distinct())
```


> [!NOTE]- Actions
> <span style='font-size:2.0em'>[[Skill Actions]]</span>
> ### [[Skills#Acrobatics|Acrobatics]]
> [[3-Rules/Character Building/Actions/Balance|Balance]]; [[3-Rules/Character Building/Actions/Tumble Through|Tumble Through]]; [[Maneuver in Flight]]; [[Squeeze]]
> 
> ### [[Skills#Arcana|Arcana]]
> [[Borrow an Arcane Spell]]; [[Decipher Writing]]; [[Identify Magic]]; [[3-Rules/Character Building/Actions/Learn a Spell|Learn a Spell]]; [[Recall Knowledge]]
> 
> ### [[Skills#Athletics|Athletics]]
> [[Climb]]; [[3-Rules/Character Building/Actions/Disarm|Disarm]]; [[3-Rules/Character Building/Actions/Force Open|Force Open]]; [[3-Rules/Character Building/Actions/Grapple|Grapple]]; [[High Jump]]; [[Long Jump]]; [[Reposition]]; [[3-Rules/Character Building/Actions/shove|Shove]]; [[Swim]]; [[3-Rules/Character Building/Actions/Trip|Trip]]
> 
> ### [[Skills#Crafting|Crafting]]
> [[Craft]]; [[3-Rules/Character Building/Actions/Earn Income|Earn Income]]; [[Identify Alchemy]]; [[Recall Knowledge]]; [[Repair]]
> 
> ### [[Skills#Deception|Deception]]
> [[Create a Diversion]]; [[3-Rules/Character Building/Kingmaker Features/Feint|Feint]]; [[Impersonate]]; [[Lie]]
> 
> ### [[Skills#Diplomacy|Diplomacy]]
> [[Gather Information]]; [[Make an Impression]]; [[Request]]
> 
> ### [[Skills#Intimidation|Intimidation]]
> [[Coerce]]; [[Demoralize]]
> 
> ### [[Skills#Lore|Lore]]
> [[3-Rules/Character Building/Actions/Earn Income|Earn Income]]
> 
> ### [[Skills#Medicine|Medicine]]
> [[Administer First Aid]]; [[Recall Knowledge]]; [[Treat Disease]]; [[Treat Poison]]; [[3-Rules/Character Building/Actions/Treat Wounds|Treat Wounds]]
> 
> ### [[Skills#Nature|Nature]]
> [[Command an Animal]]; [[Identify Magic]]; [[3-Rules/Character Building/Actions/Learn a Spell|Learn a Spell]]; [[Recall Knowledge]]
> 
> ### [[Skills#Occulitsm|Occulitsm]]
> [[Decipher Writing]]; [[Identify Magic]]; [[3-Rules/Character Building/Actions/Learn a Spell|Learn a Spell]]; [[Recall Knowledge]]
> 
> ### [[Skills#Performance|Performance]]
> [[3-Rules/Character Building/Actions/Earn Income|Earn Income]]; [[Perform]]
> 
> ### [[Skills#Religion|Religion]]
> [[Decipher Writing]]; [[Recall Knowledge]]; [[Subsist]]
> 
> ### [[Skills#Society|Society]]
> [[Create Forgery]]; [[Decipher Writing]]; [[Identify Magic]]; [[3-Rules/Character Building/Actions/Learn a Spell|Learn a Spell]]; [[Recall Knowledge]]
> 
> ### [[Skills#Stealth|Stealth]]
> [[Conceal an Object]]; [[Hide]]; [[Sneak]]
> 
> ### [[skill#Survival|Survival]]
> [[Cover Tracks]]; [[Sense Direction]]; [[Subsist]]; [[Track]]
> 
> ### [[Skills#Thievery|Thievery]]
> [[Disable a Device]]; [[Palm an Object]]; [[Pick a Lock]]; [[Steal]]
> 
> [[Aid]]; [[Arrest a Fall]]; [[Avert Gaze]]  
> [[Burrow]] 
> [[Cast a Spell]]; [[Crawl]] 
> [[Delay]]; [[Dismiss]]; [[Drop Prone]] 
> [[Escape]] 
> [[3-Rules/Character Building/Actions/Fly|Fly]]
> [[Grab an Edge]]
> [[Interact]] 
> [[Invest an Item]] 
> [[Leap]] 
> [[Mount]] 
> [[Point Out]] 
> [[Raise a Shield]]; [[3-Rules/Character Building/Actions/Ready|Ready]]; [[Release]] 
> [[Seek]]; [[Sense Motive]]; [[Stand]]; [[Step]]; [[Stride]]; [[Strike]]; [[Sustain]]  
> [[Take Cover]]

> [!example]- Rules Reference
> [[Animal Companion]] 
> [[Counteract]] 
> [[Cover]] 
> [[Familiar]]
> **[[Invest an Item]]** 
> [[Off-Guard]] 
> [[Flat Check]] 
> [[Fortune and Misfortune]]
> [[Secret Checks]] 

> [!tip]- Conditions
> [[Blinded]] 
> [[Broken]] 
> [[Clumsy]]
> [[Concealed]]  
> [[Confused]] 
> [[Controlled]] 
> [[Dazzled]] 
> [[Deafened]] 
> [[Doomed 1|Doomed]] 
> [[Drained]] 
> [[Dying 1|Dying]] 
> [[Encumbered]] 
> [[Enfeebled]] 
> [[Fascinated]] 
> [[Fatigued]] 
> [[Off-Guard]] 
> [[Fleeing]] 
> [[Frightened 1|Frightened]] 
> [[Grabbed]] 
> [[Helpful]] 
> [[Hidden]]
> [[Hostile]] 
> [[Immobilized]] 
> [[Indifferent]] 
> [[Invisible]] 
> [[Observed]] 
> [[Paralyzed]]
> [[Persistent Damage]]  
> [[Petrified]] 
> [[Prone]] 
> [[Quickened]] 
> [[Restrained]] 
> [[Sickened]] 
> [[Slowed 1|Slowed]] 
> [[Stunned]] 
> [[Stupefied 1|Stupefied]] 
> [[Unconscious]] 
> [[Undetected]] 
> [[Unfriendly]] 
> [[Unnoticed]] 

> [!NOTE]- Stealth
> [[Observed]] 
> [[Concealed]] 
> [[Unnoticed]] 
> [[Hidden]] 
> [[Undetected]] 

> [!warning]- Health and Dying
> [[3-Rules/Character Building/Actions/Treat Wounds|Treat Wounds]]
> [[Treat Disease]] 
> [[Treat Poison]] 
> [[Unconscious]] > [[Dying 1|Dying]] > [[Wounded 1|Wounded]] > [[Doomed 1|Doomed]] 
> [[Heroic Recovery]] 
> [[death|Death]] 
> [[Death Effects and Instant Death]] 
> [[Massive Damage]] 
> [[Temporary Hit Points]] 
> [[Items and Hit Points]] 
> [[Fast Healing and Regeneration]] 
> [[Resting]] 
> [[Long-Term Rest]] 

> [!example]- Exploration and Downtime Activities
> [[Exploration Activities]] 
> [[Downtime Tasks]] 
> [[Downtime Events]] 
> [[downtime|Downtime]]
