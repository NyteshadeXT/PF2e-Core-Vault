---
tags:
  - "#Rumour"
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
>> **Subject** | `INPUT[inlineListSuggester(optionQuery("Campaign"), useLinks(partial)):subject]` |
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

> [!kirk|info] Prompt (Remove me)
Describe the rumour in detail, including what it is about and any key elements or facts associated with it. Explain the content of the rumour, such as an alleged event, hidden treasure, mysterious figure, or secret plan. Provide context on why this rumour is significant and how it could impact the game world or the characters' adventures. Consider whether the rumour is likely true, partially true, or entirely false, and hint at possible ways the players might uncover the truth.

### Accuracies

> [!kirk|info] Prompt (Remove me)
List out all details within the rumour that are true or accurate. Provide a clear breakdown of each accurate element, explaining its significance and how it fits into the broader context of the rumour. Consider any implications these truths might have on the campaign world or the players' quest.

### Inaccuracies

> [!kirk|info] Prompt (Remove me)
Identify and list all elements of the rumour that are false or inaccurate. Detail specific claims, events, or pieces of information. Provide a breakdown of each inaccurate element, explaining why it is false and any potential reasons or motivations behind its propagation. Consider how these inaccuracies might mislead characters or complicate their understanding of the situation within the campaign world.

## Notes

> [!kirk|info] Prompt (Remove me)
Use this section to jot down any additional details, ideas, or reminders related to the rumour. You can include thoughts on how the rumour might evolve over time, potential connections to other plot threads or NPCs, or ideas for how the players could interact with or investigate the rumour. This space is also suitable for recording player reactions, outcomes of related encounters, or adjustments to the rumour's impact based on gameplay developments.
