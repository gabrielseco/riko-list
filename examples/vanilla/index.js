const RikoList = require('../../dist/riko-list.umd');

const riko = new RikoList("1", "2");

console.log('GET INDEX 0 --->', riko.get(0));

console.log('PUSH 3 REMOVE THE TWO AND GET ITEMS --->', riko.push(3).removeAt(1).getItems());

console.log('PUSH 3 REMOVE THE TWO AND GET ITEMS --->', riko.getItems());

const riko2 = new RikoList("1","2","3","4");
console.log('RESULT --->', riko2.push('1').insertAt(2, '2').getItems());
