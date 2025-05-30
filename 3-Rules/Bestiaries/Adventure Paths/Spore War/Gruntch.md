---
title: "Gruntch"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.spore-war-bestiary.Actor.XE9emvoqU0B3LT7k" 
tags:
  - pf2e/creature/type/fiend
  - pf2e/creature/type/qlippoth
  - pf2e/creature/type/unholy
  - pf2eMonster
  - pf2e/creature/level/18
  - remaster
statblock: inline
name: "Gruntch"
level: 18
license: ORC
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "Pathfinder #211: The Secret of Deathstalk Tower"
name: "Gruntch"
level: "Creature 18"
rare_03: [[Unique]]
alignment: ""
size: "Medium"
trait_01: [[fiend]]
trait_02: [[qlippoth]]
trait_03: [[unholy]]
modifier: 32
perception:
  - name: "Perception"
    desc: "+32; Darkvision"
languages: "Boggard, Chthonian, Common; Telepathy 100 feet"
skills:
  - name: "Skills"
    desc: "Acrobatics: +30, Athletics: +35, Deception: +31, Intimidation: +31, Religion: +32"
abilityMods: [9, 6, 9, 3, 6, 5]
speed: 40 feet,  climb 50 feet,  fly 40 feet
sourcebook: "_Pathfinder #211: The Secret of Deathstalk Tower_"
ac: 42
armorclass:
  - name: AC
    desc: "42; __Fort__ +33, __Ref__ +28, __Will__ +30"
hp: 350
health:
  - name: ""
  - name: HP
    desc: "350; __Immunities__  controlled,  fear effects; __Resistances__ mental 15, physical 15 (except cold iron)"
abilities_top:
  - name: ""
  - name: "Items"
    desc: "[[Equipment/Battle Axe|+2 Greater Striking Thundering Battle Axe]]"
  - name: "[[Bestiary Ability Glossary/Telepathy|Telepathy 100 feet]]"
    desc: " (aura,magical,mental) A monster with telepathy can communicate mentally with any creatures within the listed radius, as long as they share a language. This doesn't give any special access to their thoughts, and communicates no more information than normal speech would."

  - name: "[[Bestiary Ability Glossary/Constant Spells|Constant Spells]]"
    desc: "  A constant spell affects the monster without the monster needing to cast it, and its duration is unlimited. If a constant spell gets counteracted, the monster can reactivate it by spending the normal spellcasting actions the spell requires."

abilities_mid:
  - name: ""
attacks:
  - name: ""

  - name: "**Melee** `pf2:1` Pincer"
    desc: "+33 (magical, unholy)\n__Damage__  2d6 mental plus grab 3d10 + 15 slashing plus grab"

  - name: "**Melee** `pf2:1` Tentacle"
    desc: "+33 (agile, magical, reach 20 feet, unarmed, unholy)\n__Damage__  3d6 + 15 bludgeoning 2d6 mental"

  - name: "**Melee** `pf2:1` Stinger"
    desc: "+33 (magical, unholy)\n__Damage__  3d6 + 15 piercing plus gongorinan-venom"

  - name: "**Melee** `pf2:1` Battle Axe"
    desc: "+35 (magical, sweep)\n__Damage__  3d8 + 15 slashing 1d6 sonic 2d6 mental"

  - name: "Occult Innate Spells"
    desc: "DC 40, attack +32; __9th __  _[[Spells/Cursed Metamorphosis|Cursed Metamorphosis]]_, _[[Spells/Overwhelming Presence|Overwhelming Presence]]_; __8th __  _[[Spells/Petrify|Petrify]]_, _[[Spells/Spirit Blast|Spirit Blast]]_; __7th __  _[[Spells/Warp Mind|Warp Mind]]_; __3rd __  _[[Spells/One with Stone|One with Stone (At Will)]]_\n__Cantrips__  __(9th)__ _[[Spells/Telekinetic Projectile|Telekinetic Projectile]]_\n__Constant__  __(9th)__ _[[Spells/Unfettered Movement|Unfettered Movement]]_"

  - name: "Disquieting Display"
    desc: "`pf2:2` (concentrate,mental,occult,visual) The gongorinan opens its maw to reveal the forms hidden there, making observers question their own bodies. Creatures in a 30-foot emanation must attempt a DC 40 Will check save, after which they are temporarily immune to further Disquieting Displays for 1 minute.\n* * *\n\n**Critical Success** The creature is unaffected.\n\n**Success** The creature is [[Conditions/Clumsy|Clumsy 1]] for 1 round.\n\n**Failure** The creature is [[Conditions/Clumsy|Clumsy 2]] and [[Conditions/Slowed|Slowed 1]] for 1 round.\n\n**Critical Failure** As failure, but for 1 minute."

  - name: "Gongorinan Venom"
    desc: " (poison,polymorph) **Saving Throw** DC 40 Fortitude check\n* * *\n\n**Stage 1** [[Conditions/Stupefied|Stupefied 1]] and cosmetic signs appear of turning into an animal, fungus, or plant (1 round)\n\n**Stage 2** [[Conditions/Stupefied|Stupefied 2]] and [[Conditions/Clumsy|Clumsy 2]] (1 round)\n\n**Stage 3** [[Conditions/Stupefied|Stupefied 4]] and [[Conditions/Clumsy|Clumsy 4]] (1 round)\n\n**Stage 4** [[Conditions/Paralyzed|Paralyzed]] as changes completely overtake the body (1 round)\n\n**Stage 5** the victim permanently transforms into an animal, fungus, or plant in mind and body as a permanent curse, and the affliction ends"

  - name: "Painful Limbs"
    desc: "`pf2:2`  The gongorinan makes up to four Strikes against different targets, each using a different limb. All four Strikes count toward its multiple attack penalty, but the penalty doesn't increase until after the gongorinan has made all the attacks."

  - name: "[[Bestiary Ability Glossary/Grab|Grab]]"
    desc: "`pf2:1`  **Requirements** The monster's last action was a successful Strike that lists Grab in its damage entry, or the monster has a creature [[Conditions/Grabbed|Grabbed]] or [[Conditions/Restrained|Restrained]]\n* * *\n\n**Effect** If used after a Strike, the monster attempts to [[Actions/grapple|grapple]] the creature using the body part it attacked with. This attempt neither applies nor counts toward the creature's multiple attack penalty.\n\nThe monster can instead use Grab and choose one creature it's grabbing or restraining with an appendage that has Grab to automatically extend that condition to the end of the monster's next turn."
 
```

```encounter-table
name: Gruntch
creatures:
  - 1: Gruntch
```


Variant gongorinan

While most qlippoths focus on wiping mortals from existence, gongorinans follow the divergent plan of trapping mortals in forms incapable of understanding their actions and performing any sin meriting condemnation to the Outer Rifts. What may seem as a mercy to some is a matter of dire necessity to the gongorinans, who see killing sinful mortals as tantamount to helping their foes.

* * *

Long before the creatures known as demons came to be the dominant force in the Outer Rifts, qlippoth ruled the innumerable cracks of the Outer Sphere. These inimical creatures are a form of primordial and alien evil that predates mortal life, and most immortal life as well. Since the rise of mortal sin and the associated expansion of demonic life through the Outer Rifts, qlippoth have been driven to their deepest reaches, and they seethe with rancor at the loss of their realms. Yet, rather than directly oppose demons, qlippoth instead turn to the source—mortal sin—and wage an endless war to eradicate all creatures capable of sinful acts so that the demonic tide might be turned back. To ensure they do not bolster their foe's ranks, they enact horrific transformations on their targets, converting their victims into beings incapable of discerning right from wrong; this renders them unable to be judged by Pharasma's courts and thus incapable of becoming fiends. Most mortals consider the ministrations of a qlippoth to be far worse than any fate awaiting them in the afterlife.
