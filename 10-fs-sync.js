const {readFileSync,writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first,second);
//默认覆盖
// writeFileSync(
//   './content/result-sync.txt',
//   `Here is the result : ${first},${second}`
// )
//追加
writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first},${second}`,
  {flag:'a'}
)