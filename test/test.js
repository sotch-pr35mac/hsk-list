const hsk = require('../index.js');

function test() {
    if(hsk('打电话') == 1) {
        console.log('Passed test 1');
    } else {
        console.log('FAILED test 1');
        console.log('Expected output: 1. Actual output: ' + hsk.getHsk('打电话'));
    }
    if(hsk('火车站') == 2) {
        console.log('Passed test 2');
    } else {
        console.log('FAILED test 2');
        console.log('Expected output: 2. Actual output: ' + hsk.getHsk('火车站'));
    }
    if(hsk('地方') == 3) {
        console.log('Passed test 3');
    } else {
        console.log('FAILED test 3');
        console.log('Expected output: 3. Actual output: ' + hsk.getHsk('地方'));
    }
    if(hsk('成为') == 4) {
        console.log('Passed test 4');
    } else {
        console.log('FAILED test 4');
        console.log('Expected output: 4. Actual output: ' + hsk.getHsk('成为'));
    }
    if(hsk('本科') == 5) {
        console.log('Passed test 5');
    } else {
        console.log('FAILED test 5');
        console.log('Expected output. 5. Actual output: ' + hsk.getHsk('本科'));
    }
    if(hsk('版本') == 6) {
        console.log('Passed test 6');
    } else {
        console.log('FAILED test 6');
        console.log('Expected output: 6. Actual output: ' + hsk.getHsk('版本'));
    }
}

test();

