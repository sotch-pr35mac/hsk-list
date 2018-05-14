# hsk-list
---

A module to get the hsk level of a given word in __Simplified Chinese__. 

### Installation
```bash
npm install https://github.com/sotch-pr35mac/hsk-list/tarball/master
```

### Usage
```javascript
var hskList = require('hsk-list');
console.log(hskList('打电话')); // --> 1
```

Just call the function you `require`'d with the word in simplified Chinese and the result will be the appropriate HSK level. If the word is not found it the HSK data, `-1` will be returned. 

### License
MIT
