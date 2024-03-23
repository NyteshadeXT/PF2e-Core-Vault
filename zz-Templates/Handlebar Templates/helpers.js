Handlebars.registerHelper('savingThrowType', function(type, options) {
  if (type === 'F') {
    return options.fn({ type: 'F', first: true, index: false, last: false });
  } else if (type === 'R') {
    return options.fn({ type: 'R', first: false, index: true, last: false });
  } else if (type === 'W') {
    return options.fn({ type: 'W', first: false, index: false, last: true });
  }
});