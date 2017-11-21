'use strict';

var groupBy = require('lodash.groupby')
const smartArrayToTree = ({ array, id = 'id', pid = 'pid', children = 'children', firstPid = null }) => {
  array = groupBy(array, function (n) {
    return n.pid;
  });
  var firstArray = array[firstPid];
  transform(firstArray);
  function transform(startList) {
    if (startList)
      for (let i = 0; i < startList.length; i++) {
        array[startList[i][id]] && (startList[i][children] = array[startList[i][id]]);
        transform(startList[i][children]);
      }
  }
  return firstArray;
}

module.exports = smartArrayToTree;
