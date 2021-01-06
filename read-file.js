const fs = require('fs')

const fd = fs.openSync('./index.js', 'r')

// console.log(fd);

const stats = fs.statSync('./index.js')
// console.log(stats);

const path = require('path')

// console.log(path.resolve('/src','index.js'));

// fs.writeFileSync('index.txt', '13123nihao')
// fs.appendFile('index.txt', '\nxxxxx', err => {})

console.log(__dirname);
console.log(__filename);
