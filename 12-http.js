const http = require('http')
//创建服务器
const server = http.createServer((req,res)=>{
  // res.write('Welcome to our home page')
  // res.end()
  if(req.url === '/'){
    res.end('Welcome to our home page')
  }

  if(req.url === '/about'){
    res.end('Here is our short history')
  }

  res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for </p>
    <a href="/">back home</a>
  `)
})
//端口
server.listen(5000)