$(document).ready(function () {
  const aFilters = {}; // Amenities Filters

  $('li input').on('click', function () {
    const data = $(this).data();

    if ($(this).is(':checked')) {
      aFilters[data.id] = data.name;
    } else {
      delete aFilters[data.id];
    }
    $('div.amenities h4').text(Object.values(aFilters).sort().join(', '));
  });
});
