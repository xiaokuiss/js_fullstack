// 自带
const http = require('http');
//  /user/lists
// 1 POST
// [{name: '1'}, {name: '2'}]
// 监听在 8080 端口的服务
const userLists = [{name: '1'}, {name: '2'}];
http.createServer((req, res) => {
    // 向浏览器返回内容
    const method = req.method;
    const url = req.url;
    if (method.toLowerCase() === 'post' && url === '/user/lists') {
        let data = '';
        req.on('data', (chunk) => {
            data += chunk;
        })
        req.on('end', () => {
            
        })
        res.writeHead(200, {
            "Content-Type": "application/json"
        })
        res.end(JSON.stringify(userLists));
    }else {
        res.end('请求方式不对');
    }
}).listen(8080, () => {
    console.log('server is running 8080');
})