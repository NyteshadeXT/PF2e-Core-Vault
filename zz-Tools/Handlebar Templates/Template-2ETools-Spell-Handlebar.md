---
notetype: pf2eSpell
cssclasses: pf2e, pf2e-spell
aliases: "{{{name}}}"
obsidianUIMode: preview
tags:
- pf2e/spell/{{level}}
name: "{{{name}}}"
level: {{level}}
---

# {{name}}{{#if cast.unit}}{{#if (eq cast.unit "reaction")}} *⬲{ .Pathfinder }*{{else}}{{#if (eq cast.unit "action")}}{{table cast.number "1" "*⬻{ .Pathfinder }*" "2" "*⬺{ .Pathfinder }*" "3" "*⬽{ .Pathfinder }*"}}{{else}}{{#if (eq cast.unit "varies")}}{{cast.entry}}{{/if}}{{/if}}{{/if}}{{/if}}
## {{#if type}}{{type}}{{/if}} {{#if type}} {{/if}} Spell {{#if type}}{{level}}{{else}}{{level}}{{/if}}
### {{#each traits}}[[{{this}}]]{{#unless @last}}, {{/unless}}{{/each}}
**Traditions:** {{#each traditions}}{{this}}{{#unless @last}}, {{/unless}}{{/each}}
**Cast:** {{cast.number}} {{cast.unit}} {{#if components}}{{#each components}}{{#each this}}{{#if (eq this "V")}}Verbal{{else if (eq this "S")}}Somatic{{else if (eq this "M")}}Material{{/if}}{{#unless @last}}, {{/unless}} {{/each}} {{/each}}{{/if}} {{#if trigger}} **Trigger:** {{trigger}}{{/if}} {{#if requirements}} **Requirements:** {{requirements}}{{/if}}
{{#if range}} **Range:** {{range.number}} {{range.unit}} {{/if}} {{#if area}} **Area:** {{area.entry}}{{/if}} {{#if targets}} **Targets:** {{targets}} {{/if}}
{{#if savingThrow}} **Defenses:** {{#each savingThrow.type}} {{#if (eq this "F")}}Fortitude{{/if}} {{#if (eq this "R")}}Reflex{{/if}} {{#if (eq this "W")}}Will{{/if}} {{#unless @last}}, {{/unless}} {{/each}} {{/if}}{{#if duration}} **Duration:** {{duration.number}} {{duration.unit}}{{#if duration.sustained}}, Sustained{{/if}}{{/if}}

{{#each entries}}
{{#if @first}}
{{this}}

{{else}}
{{#if this.type}}
{{#each this.entries}}
  **{{@key}}:** {{this}}
{{/each}}
{{else}}
{{this}}
{{#each this.entries}}
  **{{@key}}:**
  {{#each this}}
	{{this}}
  {{/each}}
{{/each}}
{{/if}}
{{/if}}
{{/each}}

{{#if heightened}}
{{#if heightened.plusX}}
{{#each heightened.plusX}}
**Heightened (+{{@key}})** {{#each this}} {{this}}{{/each}}{{/each}}
{{else}}
{{#each heightened.X}}
**Heightened ({{@key}}th)**{{#each this}} {{this}}{{/each}}
{{/each}}
{{/if}}
{{/if}}

*Source: {{source}} p. {{page}}*