const http = require('http')

const server = http.createServer((req,res) => {
    res.setHeader('Access-Control-Allow-Origin','http://localhost:8000')
    res.setHeader('Access-Control-Allow-Methods','PUT,PATCH,GET,POST,DELETE,OPTIONS')

    if (req.method === 'OPTIONS'){
            res.writeHead(200);//同意
            res.end()
            return

        }
    
    if (req.url === '/api/test' && req.method === 'PATCH'){
        res.writeHead(200,{
            'Content-Type': 'application/json',
        })
        浏览器发送一个预检请求
        

        res.end(JSON.stringify({
            msg: '跨域成功'
        }))

    }
    server.listen(8000,() => {
        console.log('server is running on port 8000');
    })
})