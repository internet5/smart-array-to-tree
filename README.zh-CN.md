[English](./README.md) | 简体中文

# smart-array-to-tree
[![Build Status](https://travis-ci.org/internet5/smart-array-to-tree.svg?branch=master)](https://travis-ci.org/internet5/smart-array-to-tree)<br />
快速地转换数据量比较大的数组为树结构，转换数组长度为46086的组数时，只花了大约0.1秒的时间，而其他转换工具对于这个数据量要么就是转换不正确，要么就是直接挂掉
# 安装 && 用法

在node中:
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

在浏览器中:
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

#### 参数
- **Array** `data`: 数组数据
- **Object** `options`: 包含下列属性的配置对象:
  - `id` (String): 数据的ID属性名称. 默认值: 'id'
  - `pid` (String): 数据的父ID属性名称. 默认值: 'pid'
  - `children` (String): 返回树结构对象中子节点属性名称. 默认值: 'children'
  - `firstPid` (String): 将作为树结构顶层节点的父节点值 . 默认值: null

#### 返回
- **Array**: 返回转换后的树结构数据
