# hsk-list
---

A module to get the hsk level of a given word in __Simplified Chinese__. 

### Usage
```javascript
var hskList = require('hsk-list');
console.log(hskList.getHsk('打电话')); // --> 1
```

Just call `getHsk()` with the word in simplified Chinese and the result will be the appropriate HSK level. If the word is not found it the HSK data, `-1` will be returned. 
