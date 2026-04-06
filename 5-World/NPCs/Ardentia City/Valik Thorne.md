---
tags:
  - "#Character"
  - "#NPC"
art: zz-Attachments/valik-thorne.png
occupation:
  - Guard Captain
  - District Commander
condition: Healthy
pronounced: VAH-lik
heritage: ""
ancestry: Human
gender: Male
age: Adult
sexuality: Straight
alignment: Lawful Neutral
location:
  - "[[Ardentia City]]"
  - "[[Merchant's Quarter]]"
organization:
  - "[[Ardentia City Guard]]"
party1relation: Unmet
language:
  - Common
  - Dwarven
ideals: Order is a tool, not a virtue; stability matters more than rules; control comes from understanding people, not enforcing laws
laws: Bends rules too easily; trusts instincts over procedure; keeps others at arm’s length
fears: Becoming the kind of officer he resents; losing control through misjudgment rather than force; threats he can’t see or anticipate
mannerisms: Speaks plainly, often cutting through formality; watches people more than surroundings; pauses before responding, weighing intent over words
---

> [!metadata|metadata]- Metadata 
>> [!metadata|metadataoption]- System
>> #### System
>>  |
>> ---|---|
>> **Tags** | `INPUT[Tags][inlineListSuggester:tags]` |
>
>> [!metadata|metadataoption]- Art
>> #### Art
>>  |
>> ---|---|
>> **Art** | `INPUT[imageSuggester(optionQuery("")):art]` |
>
>> [!metadata|metadataoption]- Bio
>> #### Bio
>>  |
>> ---|---|
>> **Pronounced** |  `INPUT[textArea:pronounced]` |
>> **Aliases** | `INPUT[list:aliases]` |
>> **Ancestry** | `INPUT[Ancestry][suggester:ancestry]` |
>> **Heritage** | `INPUT[Heritage][suggester:heritage]` |
> **Creature Type** | `INPUT[textArea:ancestry]` |
> **Creature Sub-Type** | `INPUT[textArea:heritage]` |
>> **Gender** | `INPUT[Gender][:gender]` |
>> **Age** | `INPUT[Age][:age]` |
>> **Sexuality** | `INPUT[Sexuality][:sexuality]` |
>> **Alignment** | `INPUT[Alignment][:alignment]` |
>
>> [!metadata|metadataoption]- NPC Info
>> #### NPC Info
>>  |
>>---|---|
>> **Languages** | `INPUT[Language][inlineListSuggester:language]` |
>> **Ideals** | `INPUT[textArea:ideals]` |
>> **Flaws** | `INPUT[textArea:flaws]` |
>> **Fears** |  `INPUT[textArea:fears]` |
>> **Mannerisms** |  `INPUT[textArea:mannerisms]` |
>> **Occupations** | `INPUT[Occupation][inlineListSuggester:occupation]` |
>> **Organizations** | `INPUT[inlineListSuggester(optionQuery(#Organization AND !"z_Templates"), useLinks(partial)):organization]` |
>> **Religions** | `INPUT[inlineListSuggester(optionQuery(#Deity AND !"z_Templates"), useLinks(partial)):religion]` |
>> **Owned Locations** | `INPUT[inlineListSuggester(optionQuery(#Location AND !"z_Templates"), useLinks(partial)):ownedlocation]` |
>> **Current Location** | `INPUT[inlineListSuggester(optionQuery(#Location AND !"z_Templates"), useLinks(partial)):location]` |
>> **Condition** | `INPUT[Condition][:condition]` |
>
>> [!metadata|metadataoption]- Party Info
>> #### Party Info
>>  |
>> ---|---|
>> **Traveling With** | `INPUT[inlineListSuggester(optionQuery(#Party AND !"z_Templates"), useLinks(partial)):whichparty]` |
>> **Party 1 Relation** | `INPUT[Party1Relation][:party1relation]` |

> [!infobox]+
> # `=this.file.name`
> `VIEW[!\[\[{art}\]\]][text(renderMarkdown)]`
> ###### Bio
>  |
> ---|---|
> **Aliases** | `VIEW[{aliases}][text]` |
> **Ancestry** | `VIEW[{ancestry}]` |
> **Heritage** | `VIEW[{heritage}]` |
> **Gender** | `VIEW[{gender}]` |
> **Pronouns** | `VIEW[{pronouns}]` |
> **Age** | `VIEW[{age}]` |
> **Sexuality** | `VIEW[{sexuality}]` |
> **Alignment** | `VIEW[{alignment}]` |
> ###### Info
>  |
> ---|---|
> **Languages** | `VIEW[{language}][text]` |
> **Occupations** | `VIEW[{occupation}][text]` |
> **Organization** | `VIEW[{organization}][link]` |
> **Religions** | `VIEW[{religion}][link]` |
> **Owned Locations** | `VIEW[{ownedlocation}][link]` |
> **Current Location** | `VIEW[{location}][link]` |
> **Condition** | `VIEW[{condition}]` |

# **`=this.file.name`** <span style="font-size: medium">"`VIEW[{pronounced}]`"</span>

> [!metadata|letters]- Letters
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, quicknote AS Notes
> FROM "5-World"
> WHERE econtains(holder, this.file.link) AND contains(tags, "Letter")
> SORT file.name ASC
> ```

> [!metadata|literature]- Literature
> ```dataview
> TABLE without id file.link AS "Name", join(aliases, ", ") AS Aliases, quicknote AS Notes
> FROM "5-World"
> WHERE econtains(holder, this.file.link) AND contains(tags, "Literature")
> SORT file.name ASC
> ```


> [!metadata|rumour]- Rumours
> ```dataview
> TABLE without id file.link AS "Name", accuracy AS Accuracy, quicknote AS Notes
> FROM "5-World"
> WHERE econtains(subject, this.file.link) AND contains(tags, "Rumour")
> SORT file.name ASC
> ```

## Overview
Captain **Valik Thorne** commands the City Guard presence in Ardentia’s **Merchant’s Quarter**, though he wears the title with a quiet reluctance. Where others see authority as structure and prestige, Valik sees it as a **necessary burden**—one he carries because someone has to keep things from spiraling.

He enforces order, but not always by the book.

Valik understands the Merchant’s Quarter in a way many officers do not: rules alone don’t keep peace here—**balance does**. Deals happen in shadows, favors carry weight, and not every problem can be solved with a formal arrest. He is willing to bend procedure when it prevents greater chaos, a trait that earns him results… and suspicion from more rigid members of the guard.

His armor—crystalline and unmistakably tied to Ardentia’s arcane authority—sits on him like a uniform he never quite chose. He maintains it meticulously, not out of pride, but because appearances still matter in a city built on perception.

To the public, he is controlled and dependable.  
To his subordinates, he is demanding but fair.  
To those who operate in the gray spaces of the district… he is someone you **don’t want to lie to**.

> [!column|2 no-title]
>
> 
>> [!metadata|ideals] Ideals
> `VIEW[{ideals}][text]`
>
>> [!metadata|flaws] Flaws
> `VIEW[{flaws}][text]`
> 
>> [!metadata|fear] Fears
> `VIEW[{fears}][text]`
>
>> [!metadata|mannerism] Mannerisms
> `VIEW[{mannerisms}][text]`

## Goals
- Keep the Merchant’s Quarter stable—**by whatever means actually work**
- Prevent escalation of conflicts between merchants, guilds, and outside forces
- Identify threats before they become visible problems
- Maintain just enough distance from authority to operate effectively within it

## Acquaintances
- **[[Sister Ameline Voss]]** — One of the few people Valik trusts without reservation. He respects her judgment and has, on more than one occasion, ensured the guard looks the other way when her work required discretion.
- **[[Bram Tallow]]** — Valik appreciates Bram’s straightforward nature. The two share a mutual understanding: do what needs to be done, without unnecessary complication.
- **[[Maelis Vorenn]]** — A professional relationship built on mutual respect. Valik recognizes her influence within the Merchant’s Quarter and ensures her business remains undisturbed—so long as it stays within acceptable bounds.
- **[[Seraphine Dhalis]]** — A more complicated connection. Valik respects her intelligence but remains wary of the **Arcane Exchange Consortium’s** reach. Their interactions are cordial, but never fully trusting.
- **Lieutenant Garrick Hale** — A by-the-book officer within the [[Ardentia City Guard]] who quietly questions Valik’s methods. Represents the kind of authority Valik deliberately avoids becoming.

## Current Events
The Merchant’s Quarter has remained stable on the surface, but Valik has begun to notice **subtle shifts beneath it**—deals happening faster, tensions rising more quickly, and disputes that escalate just a little too easily.

More troubling are the whispers: certain goods moving through the district without record, merchants paying for “protection” that doesn’t come from the guard, and individuals who seem to operate just outside his awareness.

Rather than launching a formal investigation, Valik has chosen a quieter approach. He’s been **redirecting patrols, leaning on informants, and selectively ignoring minor infractions** to see what surfaces. It’s a dangerous balance—one that risks both his authority and his position.

At the same time, pressure from within the guard is increasing. Reports are being questioned. Decisions are being reviewed. Someone is watching how he operates.

## History
Valik Thorne did not rise through the ranks by following every rule.

He began his service like many others—disciplined, capable, and committed to the ideals of the City Guard. Early in his career, he distinguished himself through decisive action and a sharp understanding of people, earning the trust of both his superiors and his fellow guards.

That changed after an incident early in his tenure as an officer.

Faced with a situation where strict adherence to protocol would have led to widespread unrest—and likely bloodshed—Valik made a different choice. He bent the rules, allowed certain actors to walk free, and stabilized the situation before it could escalate.

Officially, the outcome was considered a success. Unofficially, it marked him.

From that point on, Valik’s career followed a different path. He continued to rise, but not as a model officer—rather as someone who could be trusted to handle situations others could not. Assignments grew more complex. Expectations more ambiguous.

When he was given command of the Merchant’s Quarter, it was not just a promotion—it was a test.

Now, Valik operates in the space between law and necessity. He enforces order, but not blindly. He upholds authority, but does not believe in it completely.

And whether he realizes it or not, every decision he makes pushes him closer to becoming exactly what he set out to avoid.

## Notes
- Tone: Controlled, cynical, quietly protective
- Strong use cases:
    - Navigating gray-area law enforcement
    - Interactions involving crime, smuggling, or political tension
    - A “necessary ally” who isn’t fully aligned with the party—or the system
- Excellent quest hooks:
    - Valik asks the party to handle something **off the record**
    - Internal guard politics threaten his position
    - A line he once crossed comes back to complicate things
- Plays well as:
    - A **morally flexible authority figure**
    - A **gatekeeper to the undercurrent of the city**
    - A **potential ally who never fully trusts the party—and expects the same in return**