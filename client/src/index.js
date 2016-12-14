var CountriesView = require('./views/countries_view.js');
var ajaxHelper = require('./ajax_helper.js')
var BucketList = require('./bucketlist/bucket_list.js');


var app = function(){
  var url = 'https://restcountries.eu/rest/v1/all';
  ajaxHelper.makeGetRequest(url, function(countries) {
    var countriesView = new CountriesView();
    countriesView.populate(countries);
  });
  var bucketList = new BucketList();
  var selectBox = document.getElementById('country-list');
  selectBox.onchange = handleSelectChanged;
}

window.onload = app;

