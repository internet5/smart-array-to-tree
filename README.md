# smart-array-to-tree
[![Build Status](https://travis-ci.org/internet5/smart-array-to-tree.svg?branch=master)](https://travis-ci.org/internet5/smart-array-to-tree)<br />
Convert large amounts of data array to nested data structure fastly!<br />
Use the test data that array length 46086, just take about 0.1 second.<br />
<br />
快速地转换数据量比较大的数组为树结构，转换数组长度为46086的组数时，只花了大约0.1秒的时间，而其他转换工具对于这个数据量要么就是转换不正确，要么就是直接挂掉
# Installation
```javascript
  npm i smart-arraytotree --save
```
# Example
```javascript
var smartArrayToTree = require('../index.js');
var fetch = require('node-fetch');
//get test data length 46086
fetch('https://raw.githubusercontent.com/internet5/smart-array-to-tree/master/example/data.json').then(function(response) {
  return response.json();
}).then(function(data) {
  //start time
  console.log(new Date());
  //transform
  let tree = smartArrayToTree({array:data, id:'regionId', pid:'parentId', firstPid:null });
  //end time
  console.log(new Date());
}).catch(function(e) {
  console.log(e);
});
*console*/
//2017-11-21T09:51:37.930Z
//2017-11-21T09:51:37.979Z
 ```
