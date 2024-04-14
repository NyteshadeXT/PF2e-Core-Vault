---
title: "Vrykolakas Master"
obsidianUIMode: preview
noteType: pf2eMonster
cssClasses: pf2e
aliases: "Compendium.pf2e.pathfinder-bestiary-2.Actor.j43O2vBu8eu2wC5z" 
tags:
  - pf2e/creature/type/evil
  - pf2e/creature/type/undead
  - pf2e/creature/type/unholy
  - pf2e/creature/type/vampire
  - pf2e/creature/level/10
statblock: inline
name: "Vrykolakas Master"
level: 10
license: OGL
---

```statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
token: [[modules/pf2e-tokens-bestiaries/portraits/undead/vampiric/vrykolakas-master.webp| ]]
source: "Pathfinder Bestiary 2"
name: "Vrykolakas Master"
level: "Creature 10"

alignment: ""
size: "Medium"
trait_01: "evil"
trait_02: "undead"
trait_03: "unholy"
trait_04: "vampire"
modifier: 19
perception:
  - name: "Perception"
    desc: "+19; Darkvision"
languages: "Common"
skills:
  - name: "Skills"
    desc: "Acrobatics: +19, Athletics: +23, Deception: +19, Intimidation: +21, Stealth: +21, Survival: +17"
abilityMods: [7, 5, 3, -2, 3, 5]
speed: 40 feet,  climb 20 feet
sourcebook: "_Pathfinder Bestiary 2_"
ac: 30
armorclass:
  - name: AC
    desc: "30; __Fort__ +19, __Ref__ +21, __Will__ +17"
hp: 190
health:
  - name: ""
  - name: HP
    desc: "190, (void healing); __Immunities__  death effects,  disease,  paralyzed,  poison,  sleep"
abilities_top:
  - name: ""

  - name: "Children of the Night"
    desc: " (divine,mental) The presence of a vrykolakas master inspires savage creatures to crawl forth to do its bidding, including rat swarms, wargs, werewolves, and similar creatures. The vrykolakas master can give telepathic orders to these creatures within 100 feet, but they can't communicate back."

  - name: "Swift Tracker"
    desc: "  The vrykolakas moves at full Speed while [[Actions/Track|Tracking]]."

abilities_mid:
  - name: ""
  - name: "Feral Possession"
    desc: " (curse,divine,incapacitation,mental,possession) **Trigger** The vrykolakas is reduced to 0 Hit Points, and an animal is within 100 feet\n**Effect** Unlike most other undead, a vrykolakas isn't destroyed when it reaches 0 HP. Instead, it attempts to cast its spirit into an animal within 100 feet, which must attempt a Will save (DC 29). On a failure, the animal is possessed. This has the effects of the [[Spells/Possession|Possession]] spell, but it lasts a number of days equal to the vrykolakas's level. This possession can't be counteracted with magic (though remove curse works against it normally).\nIf the animal succeeds at its save, the vrykolakas can attempt to possess a different animal within 100 feet. If at any point an animal critically succeeds at its save or no animal is within 100 feet, the vrykolakas fails to possess anything and is destroyed.\nA vrykolakas possessing an animal seeks out its burial site (see Burial Site Bound below) immediately, burying itself there. While the vrykolakas is in this state of recovery, its animal host is [[Conditions/Paralyzed|Paralyzed]], and beheading it destroys the vrykolakas and kills its host. Removing the curse destroys the vrykolakas and returns the animal to normal.\nAfter 1d4 days, if the vrykolakas hasn't been destroyed, the animal dies and the vrykolakas rises in a new body that's identical to its previous one, formed from the animal's remains."

  - name: "Pestilential Aura"
    desc: " (aura,divine) 5 feet. DC 29 Fortitude check\nCreatures beginning their turn in the area while the vrykolakas is in its true form are exposed to bubonic plague.\n**Bubonic Plague**\nThis widespread illness can sweep through entire communities, leaving few unaffected. The first indication of the disease is a telltale swelling of glands. In some cases, the disease can move into your lungs (pneumonic plague) or blood (septicemic plague), which is even more fatal.\nIf you have bubonic plague, you can't remove the [[Conditions/Fatigued|Fatigued]] condition while affected.\n**Onset** 1 day\n**Stage 1** fatigued (1 day)\n**Stage 2** [[Conditions/Enfeebled 1|Enfeebled 2]] and fatigued (1 day)\n**Stage 3** [[Conditions/Enfeebled 1|Enfeebled 3]], fatigued, and take 1d6 bleed every 1d20 minutes"

  - name: "Vrykolakas Vulnerabilities"
    desc: "  Vrykolakas all have the following vulnerabilities.\n*   **Burial Site Bound** A vrykolakas is bound to the place of its death or interment. It must return to this location once per week and bury itself in the earth for 24 hours, during which time it is [[Conditions/Paralyzed|Paralyzed]] and can be beheaded. If it is unable to return to this site, it is reduced to 0 Hit Points and attempts to use Feral Corruption; if this host animal can't return to the burial site before the possession effect ends, the vrykolakas is destroyed and the animal host returns to normal.\n*   **Vulnerable to Decapitation** A vrykolakas that is beheaded can't use its Feral Possession, and a beheaded corpse cannot rise as a vrykolakas."

attacks:
  - name: ""

  - name: "Melee"
    desc: "`pf2:1` Fangs +23 ()\n__Damage__  2d12 + 13 piercing plus drink-blood"

  - name: "Melee"
    desc: "`pf2:1` Claw +23 (agile)\n__Damage__  2d8 + 13 slashing"

  - name: "Divine Innate Spells"
    desc: "DC 29, attack +19; __5th __  _[[Spells/Vampiric Feast|Vampiric Touch (x3)]]_; __3rd __  _[[Spells/Fear|Fear (x3)]]_"

  - name: "[[Bestiary Ability Glossary/Change Shape|Change Shape]]"
    desc: "`pf2:1` (concentrate,divine,polymorph) A vrykolakas master can transform into a form resembling the body it had in life, with the effects of [[Spells/Humanoid Form|Humanoid Form]] but with unlimited duration. It loses its fangs and claw Strikes but gains a +2 circumstance bonus to Deception checks to [[Action Macros/Impersonate_ Deception|Impersonate]] in this form.\n"

  - name: "Create Spawn"
    desc: " (divine,downtime) If a creature dies after being reduced to 0 HP by Drink Blood, a vrykolakas master can turn this creature into a vrykolakas spawn by donating some of its own blood to the creature and burying it in earth for 3 nights.\nSuch vrykolakas spawn are generally friendly to the vrykolakas that created them, but they are not under its control and typically wander off on their own rampage within 1d6 days of their creation."

  - name: "Dominate Animal"
    desc: "`pf2:1` (divine,incapacitation,mental) DC 29\nThe vrykolakas can cast [[Spells/Dominate|Dominate]] at will as a divine innate spell that affects only animals. A creature that succeeds is immune to that vrykolakas's Dominate Animal for 24 hours. Destroying the vrykolakas ends the effect, but reducing it to 0 HP does not.\nA dominated animal takes a -4 circumstance penalty to saving throws against the vrykolakas's Feral Possession."

  - name: "Drink Blood"
    desc: "`pf2:1` (divine) **Requirements** The vrykolakas' last action was a successful fangs Strike\n**Effect** The vrykolakas sinks its fangs into that creature to drink its blood. This requires an Athletics check check against the creature's Fortitude DC. On a success, the creature becomes [[Conditions/Drained 1|Drained 2]], and the vrykolakas regains 19 HP, gaining any excess HP as temporary Hit Points.\nDrinking Blood from a creature that's already drained doesn't restore any HP to the vampire, but it increases the creature's drained condition value by 1. A vrykolakas can also consume blood that's been emptied into a vessel for sustenance, but it gains no HP from doing so.\nThe target creature's drained condition value decreases by 1 per week.\nA blood transfusion, which requires a successful DC 20 Medicine check check and sufficient blood or a blood donor, reduces the drained value by 1 after 10 minutes."

  - name: "[[Bestiary Ability Glossary/Rend|Rend]]"
    desc: "`pf2:1`  Claw\n"
 
```



Vrykolakas masters are sinister shapechangers. They walk undetected among the living and prey upon them like a wolf among sheep, often leaving the corpses to rise as vrykolakas spawn.
