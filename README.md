# smart-array-to-tree
Convert large amounts of data array to tree fastly!

# example
import smartArrayToTree from 'smart-arraytotree';
 let areas=[];//test data length 46086
 console.log("start time:"+moment().format("hh:mm:SSSS"))
 let tree=smartArrayToTree({array:areas,id:"id",pid:"pid",children:"children",firstPid:"xx"})
 console.lo("end time:"+moment().format("hh:mm:SSSS"))
 /*console*/
 //start time:05:54:4590
 //end time:05:54:6170
