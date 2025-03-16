---
tags:
  - "#Rumour"
accuracy: "True"
---

> [!metadata|metadata]- Metadata 
>> [!metadata|metadataoption]- System
>> #### System
>>  |
>> ---|---|
> **Tags** | `INPUT[Tags][inlineListSuggester:tags]` |
>
>> [!metadata|metadataoption]- Info
>> #### Info
>>  |
>> ---|---|
>> **Quick Notes** |  `INPUT[textArea:quicknote]`
>> **Subject** | `INPUT[inlineListSuggester(optionQuery("5-World"), useLinks(partial)):subject]` |
>> **Origin** | `INPUT[inlineListSuggester(optionQuery(#Character AND !"z_Templates"), useLinks(partial)):origin]` |
>> **Accuracy** | `INPUT[RumourAccuracy][:accuracy]` |

> [!infobox]+
> #### Rumour Info
>  |
> ---|---|
> **Subject** | `VIEW[{subject}][link]` |
> **Origin** | `VIEW[{origin}][link]` |
> **Accuracy** | `VIEW[{accuracy}]` |

# `=this.file.name`

## Overview
They say a horse was killed in Tilgast’s walled stable last week. Opened from ear to ear. Old Tilgast had to pay the visiting merchant a fortune to keep things quiet, but the men who hauled away the carcass revealed everything one night at the Feral Dog. A lot of people are thinking about pulling their horses out of Tilgast’s, but it’s not as if the Lakeside Stables are any better. 

### Details
The horse attack was a Smenk move to weaken Tilgast’s beloved side-business.

## Notes

> [!kirk|info] Prompt (Remove me)
Use this section to jot down any additional details, ideas, or reminders related to the rumour. You can include thoughts on how the rumour might evolve over time, potential connections to other plot threads or NPCs, or ideas for how the players could interact with or investigate the rumour. This space is also suitable for recording player reactions, outcomes of related encounters, or adjustments to the rumour's impact based on gameplay developments.
