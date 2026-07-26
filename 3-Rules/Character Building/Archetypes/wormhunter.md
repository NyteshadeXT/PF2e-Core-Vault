---
noteType: pf2eArchetype
aliases: "Wormhunter"
tags: 
  - pf2e/rarity/uncommon 
name: "Shard Slave"
source: "Custom"
---

# Wormhunter
**Uncommon** • **Archetype** • **Divine** • **Void** • **Mental**

> _You have survived the touch of the Worm. Though the corruption remains within you, your will has mastered it. Where others see only rot and despair, you perceive patterns of entropy, whispers of the vast intelligence that spawned the undying horrors of Kyuss._

```pf2e-stats
# Wormhunter Dedication
## Feat 2

---

==Archetype== ==Dedication== ==Divine== ==Void==

**Prerequisites** You survived infection by a Kyuss worm or were exposed to powerful wormspawn corruption without succumbing to it.

---

The corruption still lingers within you, but your will has bent it to your purpose. You instinctively recognize the signs of Kyuss's influence and can turn the Worm's own power against it.

You become trained in [[Skills#Religion|Religion]] (or another skill of your choice if you're already trained in Religion). You become trained in **Worm Lore**, a special [[Skills#Lore|Lore]] skill related to Kyuss, wormspawn, undead infestations, and Void corruption.

Whenever you attempt a Recall Knowledge check regarding an undead creature, Kyuss worm, wormspawn, or creature afflicted by worm corruption, you gain a +1 circumstance bonus. Whenever you critically succeed at [[Recall Knowledge]] regarding an undead or worm-corrupted creature, the GM also tells you whether it possesses regeneration, a reaction, or a particularly dangerous special ability.

> #### **Wormscar**
> 
> The first time each round you damage an undead or worm-corrupted creature with a Strike, that Strike deals an additional `dice: 1d4` void damage. If the target has regeneration originating from Void magic or worm corruption, that regeneration is suppressed until the beginning of your next turn.

You can take Wormhunter archetype feats.  

**Special** You can’t select another archetype’s Dedication feat until you’ve gained at least two other Wormhunter feats.
```

```pf2e-stats
# Worm-Hardened
## Feat 4

---

==Archetype==

**Archetype** Wormhunter
**Prerequisites** Wormhunter Dedication

---

Years of carrying the Worm's taint have made your body resistant to similar corruption. You gain resistance to Void damage equal to half your level (minimum 1). You gain a +1 circumstance bonus to saving throws against:
- disease
- afflictions caused by undead
- Kyuss worms
- effects with the Void trait.

Whenever you succeed at a saving throw against one of these effects, you critically succeed instead.
```

```pf2e-stats
# Purging Strike `pf2:1`
## Feat 4

---

==Archetype== ==vitality==

**Archetype** Wormhunter
**Prerequisites** Wormhunter Dedication
**Requirement** Your previous action was a successful Strike against an undead or worm-corrupted creature.

---

You channel your Wormscar into the wound. The target takes 1d6 persistent vitality damage. If the creature was already taking persistent vitality damage, you instead increase that damage by 1d6 to a maximum of 4d6. A creature damaged this way cannot benefit from regeneration granted by Void magic until the persistent damage ends.

```

```pf2e-stats
# Survivor's Lore
## Feat 4

---

==Archetype==

**Archetype** Wormhunter
**Prerequisites** Wormhunter Dedication

---

Your firsthand knowledge of infestation has made you an expert healer. When attempting to [[Treat Disease]] or attempting to counteract an infestation, you gain a +2 circumstance bonus. If an ally is suffering from a Kyuss worm infestation, you may attempt Treat Disease once every hour instead of once per day. If you critically succeed, reduce the disease by two stages instead of one.

```

```pf2e-stats
# Wormsense
## Feat 6

---

==Archetype== ==focus==

**Archetype** Wormhunter
**Prerequisites** Wormhunter Dedication

---

You awaken your lingering connection to the Worm. You gain the [[wormsense|Wormsense]] focus spell. You gain a focus pool of 1 Focus Point or increase your pool by 1 if you already have one.

```

```pf2e-stats
# Wormscar Surge `pf2:r`
## Feat 6

---

==Archetype==

**Archetype** Wormhunter
**Prerequisites** Wormhunter Dedication
**Trigger** You succeed at a saving throw against a Void, Disease, or Death effect.

---

Your Wormscar lashes back at the source. The triggering creature must attempt a Fortitude save against your class DC.

**Critical Success** Unaffected.
**Success** The creature is [[Sickened|Sickened 1]].
**Failure** The creature is [[Sickened|Sickened 2]].
**Critical Failure** The creature is [[Sickened|Sickened 2]] and [[Slowed|Slowed 1]] until the end of its next turn.

```

```pf2e-stats
# Kyussbane Weapon
## Feat 8

---

==Archetype==

**Archetype** Wormhunter
**Prerequisites** Wormhunter Dedication
**Frequency** Once per hour.

---

You channel your Wormscar into a weapon you wield. For 10 minutes:
- first Strike each round deals `dice: 1d6` vitality damage.
- critical hits suppress regeneration from Void magic for one round.
- the weapon counts as sanctified against creatures devoted to Kyuss.

```

```pf2e-stats
# Wormscar Burst `pf2:r`
## Feat 8

---

==Archetype== ==divine== ==void==

**Archetype** Wormhunter
**Prerequisites** Wormhunter Dedication
**Trigger** An undead or worm-corrupted creature within your reach critically misses you with a Strike.

---

Your Wormscar flares violently, causing the corruption within your foe to recoil. The triggering creature must succeed at a Fortitude save against your class DC.

**Critical Success** Unaffected.
**Success** The creature is [[Enfeeble|Enfeebled 1]] until the end of its next turn.
**Failure** The creature is [[Enfeeble|Enfeebled 2]] until the end of its next turn.
**Critical Failure** The creature is [[Enfeeble|Enfeebled 2]] and cannot regain Hit Points until the end of its next turn.

```

```pf2e-stats
# Gift of the Worm
## Feat 10

---

==Archetype==

**Archetype** Wormhunter
**Prerequisites** Wormhunter Dedication

---

You intentionally embrace a fragment of the corruption that once threatened to consume you. Choose one **Gift of the Worm**. Each time you gain a Gift, you must also choose a **Madness Scar**. You may select this feat up to three times.

### Gifts

#### Worm's Flesh
Your skin becomes unnaturally pale and cold. You gain resistance 5 to poison and disease. When you critically succeed against a disease, you reduce its stage by two instead of one.

#### Worm's Eyes
Your pupils become tiny writhing spirals. You gain darkvision. Whenever a creature carrying Kyuss worms is within 30 feet, the GM secretly rolls to determine whether you notice its corruption, even if concealed.

#### Worm's Whisper
The Worm speaks. You gain [[Talking Corpse]] as a 4th-rank divine innate spell once per day. When questioning undead created by Kyuss, they take a –2 circumstance penalty to resist answering truthfully.

#### Worm's Hunger
Death feeds the fragment within you. Whenever an undead or worm-corrupted creature is reduced to 0 HP within 30 feet of you, gain temporary Hit Points equal to half your level + your Wisdom modifier. These temporary Hit Points last for 1 minute.

### Madness Scars

#### Whispering Dreams
The Worm speaks while you sleep. The GM may occasionally provide cryptic visions regarding Kyuss or nearby corruption. Whenever you critically fail a Will save, you become [[Frightened|Frightened 1]].

#### Crawling Skin
You constantly feel unseen worms beneath your flesh. Whenever you become [[Frightened]], you're also [[Off-Guard]] until the end of your next turn.

#### Obsession
You cannot willingly retreat from an Apostle of Kyuss or creature carrying Kyuss worms unless your allies also withdraw.

#### Hallucinatory Voices
The Worm constantly comments on those around you. You take a –1 circumstance penalty to [[Skills#Diplomacy|Diplomacy]] checks made to [[Make an Impression]], but gain a +1 circumstance bonus to [[Recall Knowledge]] regarding undead.

```

```pf2e-stats
# Wormbreaker
## Feat 10

---

==Archetype==

**Archetype** Wormhunter
**Prerequisites** Wormhunter Dedication

---

Years of carrying the Worm have taught your body how to reject it. Whenever you or an adjacent ally would become infected by a Kyuss worm or similar parasitic effect, you may use your reaction. Attempt a counteract check using your class DC.

- **Critical Success:** The infestation is prevented.
- **Success:** The target gains a +4 circumstance bonus to its initial saving throw. If the infestation has no save, it is delayed for 1 round.
- **Failure:** No effect.
- **Critical Failure:** No effect.

You can use this reaction once every 10 minutes.

```

```pf2e-stats
# Perfected Wormscar
## Feat 12

---

==Archetype==

**Archetype** Wormhunter
**Prerequisites** Wormhunter Dedication

---

Your corruption has become something entirely your own. Undead instinctively recognize you as a being touched by the same impossible entropy that birthed them. Whenever an undead or worm-corrupted creature within 15 feet critically fails a saving throw against one of your abilities or spells, choose one:
- It becomes [[Off-Guard]] until the start of your next turn.
- It becomes [[Enfeebled|Enfeebled 1]] until the end of its next turn.
- It loses any regeneration granted by Void magic for one round.

In addition, once per day when you would be reduced to 0 Hit Points by an undead or worm-corrupted creature, you remain at 1 Hit Point instead. Your Wormscar erupts in black radiance, and each enemy within 15 feet must succeed at a Will save against your class DC or become [[Frightened|Frightened 2]].

```

```pf2e-stats
# Become What You Hunted
## Feat 14

---

==Archetype== ==divine== ==mental== ==void==

**Archetype** Wormhunter
**Prerequisites** Wormhunter Dedication

---

The fragment of Kyuss that once threatened to consume you has become something entirely your own. Your Wormscar no longer resembles the corruption carried by the Apostles—it has evolved into anathema to them. Lesser worms recoil from your presence, and even the undead sense that something is terribly wrong. You gain the following benefits:
- You are immune to infestation by Kyuss worms and similar parasitic effects. If such an effect would infect you, it automatically fails.
- You gain a +2 circumstance bonus to saving throws against effects created by creatures with the Undead trait or creatures devoted to Kyuss.
- Wormspawn, Kyuss worms, and unintelligent undead instinctively avoid you. Unless magically compelled, they don't willingly enter squares adjacent to you if another path is available.

> #### **Aura of Defiance**
> 
> You radiate an unsettling presence that disrupts Kyuss's creations. You gain a **15-foot emanation** with the following effects:
> - Undead and worm-corrupted creatures treat your squares as difficult terrain when moving toward you.
> - Whenever an undead or worm-corrupted creature begins its turn within the aura, it must succeed at a Will save against your class DC.
> 	  **Critical Success** The creature is unaffected and is temporarily immune for 24 hours.
> 	  **Success** The creature is unaffected.
> 	  **Failure** The creature is [[Frightened|Frightened 1]].
> 	  **Critical Failure** The creature is [[Frightened|Frightened 2]] and [[Off-Guard]] until the end of its turn.

**Special** Your Wormscar has transcended its origin. It is no longer a fragment of Kyuss's corruption, but something entirely new. Intelligent servants of Kyuss—including Apostles, wormcallers, and those bearing his blessing—instinctively recognize you as an impossible existence. Their reactions vary from fearful reverence to murderous hatred, for they understand what few others can: you carry a piece of the Worm that Kyuss can neither command nor reclaim.

```










