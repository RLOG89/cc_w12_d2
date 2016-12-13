var CountriesView = require('./views/countries_view.js');
var ajaxHelper = require('./ajaxHelper.js')
var BucketList = require('./bucketList/bucket_list.js');


var app = function(){
  var url = 'https://restcountries.eu/rest/v1/all';
  makeGetRequest(url, function(countries) {
    var countriesView = new CountriesView();
    countriesView.populate(countries);
  });
  var bucketList = new BucketList();
  var selectBox = document.getElementById('country-list');
  selectBox.onchange = handleSelectChanged;
}

window.onload = app;

