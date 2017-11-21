# smart-array-to-tree
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
import smartArrayToTree from 'smart-arraytotree';
 let areas=[];//test data length 46086
 console.log("start time:"+moment().format("hh:mm:SSSS"))
 let tree=smartArrayToTree({array:areas,id:"id",pid:"pid",children:"children",firstPid:null})
 console.log("end time:"+moment().format("hh:mm:SSSS"))
 /*console*/
 //start time:05:54:4590
 //end time:05:54:6170
 ```
