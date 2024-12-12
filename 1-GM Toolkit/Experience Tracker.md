![[Experience Tracker-20241013142445460.webp]]

```dataviewjs
let totalXP = 0;
let completedXP = 0;
const baseXPPerLevel = 1000; // XP required per level
const startLevel = 1; // Players start at level 1

// Sum XP from "4-Campaign"
for (let page of dv.pages('"4-Campaign/Age of Worms"')) {
    if (page.total_xp) totalXP += page.total_xp;
    if (page.completed_xp) completedXP += page.completed_xp;
}

// Calculate potential and character levels starting from level 1
let potentialLevel = (totalXP / baseXPPerLevel + startLevel).toFixed(1);
let characterLevel = (completedXP / baseXPPerLevel + startLevel).toFixed(1);

dv.paragraph(`**Total XP:** ${totalXP}     **Completed XP:** ${completedXP}`);
dv.paragraph(`**Potential Level:** ${potentialLevel}     **Character Level:** ${characterLevel}`);



```

```dataview


table sum(total_xp) as Total_XP, sum(completed_xp) as Completed_XP
from "4-Campaign/Age of Worms"
where total_xp

```



