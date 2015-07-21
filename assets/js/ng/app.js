'use strict';
var Dropbox = require("dropbox");
angular.module('zopaApp', [

])
.run(function(){
  var client = new Dropbox.Client({
      key: "ji7q0ylp1na9x1q",
      secret: "g9rvglf4mn6sv5b"
  });
  console.log(client);
});
