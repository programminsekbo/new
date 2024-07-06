  "use strict";

var mymap = new Map()

mymap.set("key1","bangladesh")

mymap.set("key2","bangladesh")

mymap.set("key3","bangladesh")

mymap.set("key4","bangladesh")

mymap.set("key5","bangladesh")

mymap.delete("key1")
mymap.delete("key2")
for (let mynew  of mymap.values()){


  console.log(mynew)
}

