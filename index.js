const http = require('http');
// const queryString = require('querystring');

// const server = http.createServer((req, res) => {
//     console.log(req.method);
//     const url = req.url;
//     console.log('url: ', url);
//     req.query = queryString.parse(url.split('?')[1])
//     console.log('query: ', req.query);
//     res.end(
//         JSON.stringify(req.query)
//     )

// })

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        //数据格式
        console.log('content-type', req.headers['content-type']);
        //接收数据
        let postData = '';
        req.on('data', chunk => {
            postData += chunk.toString()
        })
        req.on('end', () => {
            console.log('postData: ', postData);
            res.end('hello world !')
        })
    }
})

server.listen(8000,()=>{
    console.log('port: 8000')
});