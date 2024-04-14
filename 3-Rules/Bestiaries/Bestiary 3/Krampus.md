---
title: "Krampus"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-bestiary-3.Actor.hOgYpdscvGo4MHHo" 
tags:
  - pf2e/creature/type/evil
  - pf2e/creature/type/humanoid
  - pf2e/creature/type/unholy
  - pf2e/creature/level/21
statblock: inline
name: "Krampus"
level: 21
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
token: [[modules/pf2e-tokens-bestiaries/portraits/aberrant/humanoid/krampus.webp| ]]
source: "Pathfinder Bestiary 3"
name: "Krampus"
level: "Creature 21"
rare_03: "Unique"
alignment: ""
size: "Large"
trait_01: "evil"
trait_02: "humanoid"
trait_03: "unholy"
modifier: 38
perception:
  - name: "Perception"
    desc: "+38; Scent (Imprecise) 60 Feet, See the Unseen"
languages: "Common"
skills:
  - name: "Skills"
    desc: "Acrobatics: +36, Athletics: +39, Festival Lore: +35, Intimidation: +42, Society: +35, Stealth: +39, Survival: +38"
abilityMods: [10, 7, 10, 6, 6, 10]
speed: 60 feet
sourcebook: "_Pathfinder Bestiary 3_"
ac: 46
armorclass:
  - name: AC
    desc: "46; __Fort__ +39, __Ref__ +34, __Will__ +35"
hp: 380
health:
  - name: ""
  - name: HP
    desc: "380; __Immunities__  cold,  death effects; __Weaknesses__ holy 15; __Resistances__ physical 20"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Spiked Chain|+3 Greater Striking Cold Iron Spiked Chain]]"
  - name: "Blizzard Sight"
    desc: "  Krampus ignores circumstance penalties to visual Perception checks due to ice or snow, as well as [[Conditions/Concealed|Concealment]] due to ice or snow."

abilities_mid:
  - name: ""
  - name: "[[Bestiary Ability Glossary/Frightful Presence|Frightful Presence]]"
    desc: " (aura,emotion,fear,mental) 120 feet. DC 42 Will check\n"

  - name: "Limited Immortality"
    desc: "  Though Krampus still needs to eat, drink, and sleep, he doesn't age and can't die of old age. If Krampus is killed, a new Krampus forms elsewhere in the world after a year's time.\nThe new Krampus retains the memories of the previous iteration and likely holds a grudge against whoever killed him the year before. If a method to disrupt this cycle exists, it has yet to be discovered by mortals."

attacks:
  - name: ""

  - name: "Melee"
    desc: "`pf2:1` Spiked Chain +42 (disarm, finesse, magical, reach 60 feet, trip, unholy)\n__Damage__  3d8 + 18 slashing plus improved-grab"

  - name: "Melee"
    desc: "`pf2:1` Claw +41 (agile, magical, reach 10 feet)\n__Damage__  4d6 + 25 slashing plus improved-grab"

  - name: "Melee"
    desc: "`pf2:1` Horn +41 (magical)\n__Damage__  4d10 + 25 piercing"

  - name: "Primal Innate Spells"
    desc: "DC 42, attack +34; __9th __  _[[Spells/Cursed Metamorphosis|Baleful Polymorph (x2)]]_, _[[Spells/Cone of Cold|Cone of Cold (x2)]]_, _[[Spells/Wall of Ice|Wall of Ice]]_\n__Cantrips__  __(1st)__ _[[Compendium.pf2e.spells-srd.Item.kl2q6JvBZwed4B6v|Dancing Lights]]_, _[[Spells/Ray of Frost|Ray of Frost]]_, _[[Spells/Sigil|Sigil]]_, _[[Spells/Tangle Vine|Tanglefoot]]_\n__Constant__  __(9th)__ _[[Spells/Air Walk|Air Walk]]_, _[[Spells/See the Unseen|See Invisibility]]_, _[[Spells/Truespeech|Tongues]]_"

  - name: "Capture"
    desc: "`pf2:1` (attack) **Requirements** Krampus has a Medium or smaller creature [[Conditions/Grabbed|Grabbed]]\n**Effect** Krampus attempts to stuff the grabbed creature into his basket, attempting an Athletics check check against the target's Reflex DC. If he succeeds, the creature is shoved into Krampus's basket and Krampus's spiked chain or claw is freed for future Strikes.\nThe captured creature is [[Conditions/Grabbed|Grabbed]], [[Conditions/Slowed 1|Slowed 1]], and subjected to Krampus's regression ability at the start of each round it is captured.\nIf the victim [[Actions/Escape|Escapes]] (DC 48), it climbs out of the basket. A captured creature can attack the interior of the basket, but only with unarmed attacks or weapons of light Bulk or less, against an AC of 40. If the captured creature deals 40 slashing or piercing damage, the basket is broken and all the creatures inside spill out. A creature that gets free by either Escaping or by someone breaking the basket is deposited in a square of their choosing adjacent to Krampus.\nThe basket is an extradimensional space, so the weight of the creatures within doesn't count against Krampus's Bulk limit. Up to four Small creatures or two Medium creatures can fit in the basket at one time.\nKrampus can [[Actions/Repair|Repair]] the basket as a 2-action activity that doesn't require tools. If the basket is lost or destroyed, Krampus can create a new one with 1 hour of work. The basket functions as a normal sack if used by anyone other than Krampus."

  - name: "Punish the Naughty"
    desc: "`pf2:1` (concentrate) Krampus designates a single target he can see as “naughty.” He gains a +2 circumstance bonus to Perception checks when he [[Actions/Seek|Seeks]] the naughty target and a +2 circumstance bonus to Survival checks to [[Actions/Track|Track]] the naughty target.\nOn melee attacks against the naughty target, Krampus's spiked chain gains the agile trait. In addition, when Krampus [[Conditions/Grabbed|Grabs]] the naughty target, he can attempt to Capture them as a free action. Krampus can have only one naughty target at a time."

  - name: "Regression"
    desc: " (curse,polymorph,primal) A creature that starts their turn Captured in Krampus's basket must attempt a DC 44 Fortitude check save or be regressed back to their childhood.\nThe target shrinks one size. In addition, all of the target's proficiencies of expert and better are reduced to trained, which might restrict the use of certain feats.\nThe effect persists for 24 hours, after which the target regains their normal size and their proficiencies return to normal. A creature currently under the effects of regression can't be further affected by this ability.\n[[Bestiary Effects/Effect_ Regression|Effect: Regression]]"

  - name: "Snowstep"
    desc: "  Krampus ignores difficult terrain and greater difficult terrain caused by snow and ice, and he leaves no tracks when moving through areas of snow or ice."
 
```



Krampus is a tall, goatlike humanoid with a pointed nose, swept-back horns, and hooved feet. His long, greasy tongue continually flickers out from his mouth, occasionally licking droplets of spittle from his dark brown fur. He wields a set of iron chains that act as an extension of his will. Krampus is never seen without a wicker basket draped over one shoulder, its bottom often stained with the blood of his victims. Krampus stands a little over 14 feet tall and weighs nearly 1,000 pounds.

Krampus's origin is unknown; residents of the small towns and villages he terrorizes in northern Irrisen believe the creature has always existed, coming forth once a year to punish those he deems wicked. While many legends have been told about Krampus's beginning, the most popular of them starts with a handful of mountain towns under the protection of a circle of druids. After a series of harsh winters that the townsfolk barely survived, they began to doubt the power of the druids and their rituals. As the villagers grew more resentful, the druid circle took drastic action. Under the light of a blue moon, the druids opened an imperfect portal to the primal realm of the fey and called forth the most powerful spiritual essence they could, and a new creature was born-Krampus. However, unknown to the druids, the portal had been corrupted by the villagers' bitter resentment and doubt. Instead of a central figure to lead them in winter celebrations, as they had hoped, the druids had spawned a monster who sought to punish those who had behaved selfishly during lean times.

Recognizing their error, the druids sought to banish their creation. They tracked Krampus down as he slept and shackled him in cold iron chains, hoping to subdue him and force him back to the First World. But Krampus was no fey, and cold iron held no power over him. When he awoke, he ripped the chains free, claimed them as his own, and tracked down the druids who had dared try to capture him. After their betrayal, Krampus can see no good in any mortal and longs only to punish the wicked for their selfish misdeeds.

To this day, Krampus takes vicious delight in transforming his victims into the petulant children before killing them, and no manner of sacrifice can appease him. Luckily for any nearby villages, Krampus stalks their streets but once a year.

Locals believe that Krampus makes his lair among the deep crevasses of ice somewhere within the Winterwall Glacier, which lines Avistan's northernmost reaches. No adventurer has yet braved the treacherous expanse to find and defeat him.
