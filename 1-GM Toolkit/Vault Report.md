```dataviewjs
// Step 1: Group pages by noteType and unwrap the DataArray
const grouped = dv.pages("")
  .groupBy(p => p.notetype)
  .filter(p => !!p.key)
  .values;  // ✅ unwraps from Dataview's DataArray to regular JS array

// Step 2: Sort the plain array by number of rows descending
const sorted = grouped.sort((a, b) => b.rows.length - a.rows.length);

// Step 3: Extract labels and counts
const noteTypes = sorted.map(g => g.key);
const noteTypesCount = sorted.map(g => g.rows.length);

// Step 4: Static color palette (cyclical)
const colors = [
  '#7c0a02', // Crimson Red
  '#c19d53', // Gold
  '#2e2e2e', // Charcoal
  '#f5f0e1', // Bone White
  '#4a4a4a', // Iron Gray
  '#3e6aa5', // Arcane Blue
  '#3c6e47', // Forest Green
  '#d85c27'  // Ember Orange
];
const backgroundColor = noteTypes.map((_, i) => colors[i % colors.length]);

// Step 5: Chart structure
const chartData = {
  type: 'bar',
  data: {
    labels: noteTypes,
    datasets: [{
      label: 'Note Type Count',
      data: noteTypesCount,
      backgroundColor: backgroundColor
    }]
  }
};

// Step 6: Render the chart (your custom function)
window.renderChart(chartData, this.container);

