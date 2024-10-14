<%* 
try {
    await tp.user.update_xp(tp);
} catch (err) {
    new Notice("Error: " + err.message, 2000);
}
%>

<%*
tp.hooks.on_all_templates_executed(async () => {
    const file = tp.file.find_tfile(tp.file.path(true));
    await app.fileManager.processFrontMatter(file, (frontmatter) => {
        frontmatter.total_xp = tp.frontmatter.total_xp;
        frontmatter.completed_xp = tp.frontmatter.completed_xp;
    });
});
%>
