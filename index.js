'use strict';

var groupBy = require('lodash.groupby')
const smartArrayToTree = (array, options) => {
  options = Object.assign({
    id: 'id',
    pid: 'pid',
    children: 'children',
	firstPid: null
  }, options);
  let groupArray = groupBy(array, function (n) {
    return n[options.pid];
  });
  let firstArray = groupArray[options.firstPid];
  transform(firstArray);
  function transform(startList) {
    if (startList)
      for (let i = 0; i < startList.length; i++) {
        groupArray[startList[i][options.id]] && (startList[i][options.children] = groupArray[startList[i][options.id]]);
        transform(startList[i][options.children]);
      }
  }
  return firstArray;
}

module.exports = smartArrayToTree;
