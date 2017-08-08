# Riko-List - Extension Array Class

Riko-List offers extension capabilities to add, modify and  delete items of an array between others

### Typescript Usage

```ts
import RikoList from 'riko-list';
const riko = new RikoList<string>(1,2,3,4);

console.log('RESULT -->', riko.push(1).insertAt(2, 2).getItems()); // this becomes [ '1', '2', '2', '3', '4', '1' ]

```

### Javascript Usage

```js
import RikoList from '../src/riko-list';
const riko = new RikoList(1,2,3,4);

console.log('RESULT -->', riko.push(1).insertAt(2, 2).getItems()); // this becomes [ '1', '2', '2', '3', '4', '1' ]

```


