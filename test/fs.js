'use strict';

var fs = require('fs');

var rs = fs.createReadStream('output1.txt');
var ws = fs.createWriteStream('copied.txt');

rs.pipe(ws);
