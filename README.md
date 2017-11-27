# smart-array-to-tree
[![Build Status](https://travis-ci.org/internet5/smart-array-to-tree.svg?branch=master)](https://travis-ci.org/internet5/smart-array-to-tree)<br />
Convert large amounts of data array to nested data structure fastly!<br />
Use the test data that array length 46086, just take about 0.1 second.<br />
<br />

# Installation && Usage

In Node.js:
```shell
$ npm i smart-arraytotree --save
```
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
  let tree = smartArrayToTree(data, { id:'regionId', pid:'parentId', firstPid:null });
  //end time
  console.log(new Date());
}).catch(function(e) {
  console.log(e);
});
/*console*/
//2017-11-21T09:51:37.930Z
//2017-11-21T09:51:37.979Z
 ```

In a browser:
```html
<script src="smartArrayToTree.js"></script>
```
```html
<script src="http://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
    crossorigin="anonymous"></script>
  <script src="smartArrayToTree.js"></script>
  <script>
    window.onload = function () {
      $.getJSON("https://raw.githubusercontent.com/internet5/smart-array-to-tree/master/example/data.json", function (data) {
        console.log(new Date());
        var tree = smartArrayToTree(data, { id: 'regionId', pid: 'parentId', firstPid: null });
        console.log(new Date());
        console.log(tree)
      });
    }
  </script>
```
## API
### `smartArrayToTree(data, [options])`

#### Parameters
- **Array** `data`: An array of data
- **Object** `options`: An object containing the following fields:
  - `id` (String): An unique node identifier. Default: 'id'
  - `pid` (String): A name of a property where a link to a parent node could be found. Default: 'pid'
  - `children` (String): The child node name that you want. Default: 'children'
  - `firstPid` (String): The parent id of top level node . Default: null

#### Return
- **Array**: Result of transformation
