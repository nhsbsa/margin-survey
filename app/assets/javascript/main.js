// ES6 or Vanilla JavaScript

accessibleAutocomplete.enhanceSelectElement({
    selectElement: document.querySelector('#select-1')
  })

  import accessibleAutocomplete from 'accessible-autocomplete';

document.addEventListener('DOMContentLoaded', function () {
  accessibleAutocomplete.enhanceSelectElement({
    selectElement: document.querySelector('#council'),
    defaultValue: '',
    showAllValues: true, // Allows dropdown to show all values on focus
    autoselect: false, // Prevents automatic selection
    dropdownArrow: () => '', // Removes default dropdown arrow
  });
});
