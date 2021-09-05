import hbs from 'hbs';

hbs.registerHelper('setChecked', (value, currentValue) => {
  if (value == currentValue) {
    return 'checked';
  }
  return '';
});
