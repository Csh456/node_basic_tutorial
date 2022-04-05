const path = require('path')

console.log(path.sep);

const filePath = path.join('/content/','subfolder','test.txt')
console.log(filePath);

const base = path.basename(filePath) //返回文件名称
console.log(base);

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
console.log(absolute);