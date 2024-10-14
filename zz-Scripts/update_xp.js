async function updateXP(tp) {
    const fileContent = tp.file.content;
    const tasks = fileContent.match(/- \[(x| )\] .*?\((\d+) XP\)/g);
    let totalXP = 0;
    let completedXP = 0;

    if (tasks) {
        tasks.forEach(task => {
            const match = task.match(/- \[(x| )\] .*?\((\d+) XP\)/);
            const xp = parseInt(match[2]);
            totalXP += xp;
            if (match[1] === 'x') {
                completedXP += xp;
            }
        });
    }

    // Update frontmatter variables
    tp.frontmatter.total_xp = totalXP;
    tp.frontmatter.completed_xp = completedXP;
}

module.exports = updateXP;
