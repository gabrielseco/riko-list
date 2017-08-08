# Riko-List - Extension Array Class

Riko-List offers extension capabilities to add, modify and  delete items of an array between others

### Typescript Usage

```js
import RikoList from 'riko-list';
const riko = new RikoList<string>(1,2,3,4);

console.log('RESULT -->', riko.push(1).insertAt(2, 2).getItems()); // this becomes [ '1', '2', '2', '3', '4', '1' ]

```

### Javascript Usage

```js
import RikoList from 'riko-list';
const riko = new RikoList(1,2,3,4);

console.log('RESULT -->', riko.push(1).insertAt(2, 2).getItems()); // this becomes [ '1', '2', '2', '3', '4', '1' ]

```

### Examples Folder

You can check out the examples folder, there are examples using vanilla javascript and other folder with an angular example.

For the vanilla example you need to do in the root folder. (You can use yarn or npm, I recommend using yarn is faster)

```bash
  yarn 
  npm install
```

For the angular example you need to do in the angular folder and the step above

```bash
  yarn 
  or 
  npm install
```



