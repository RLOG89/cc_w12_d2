var ajaxHelper = require('../ajaxHelper.js');

var CountriesView = function(bucketList) {
  this.bucketList = bucketList;
}

BucketList.prototype = {
  render: function(countries) {
    var select = document.getElementById('country-list');
    countries.forEach(function(country) {
      var option = document.createElement('option');
      option.innerText = country.name;
      option.value = country.name;
      this.select.appendChild(option);
    }.bind(this));
  },

  save: function(country) {
    var url = "http://localhost:3000/countries";
    ajaxHelper.makePostRequest(url, country);
  },

  handleSelectChanged: function(event) {
    event.preventDefault();
    console.log(event.target.value);
    var country = {
      country: event.target.value
    }
    this.saveAccount(country);
  }.bind(this));
};

module.exports CountriesView;