'use strict';
var smartArrayToTree = require('../index.js');
var fetch = require('node-fetch');
fetch('https://raw.githubusercontent.com/internet5/smart-array-to-tree/master/example/data.json').then(function(response) {
  return response.json();
}).then(function(data) {
  console.log(new Date());
  var tree = smartArrayToTree(data, { id:'regionId', pid:'parentId', firstPid:null });
  console.log(new Date());
  console.log(tree)
}).catch(function(e) {
  console.log(e);
});
