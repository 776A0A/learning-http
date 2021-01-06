const http = require('http')

const data = JSON.stringify({todo: 'something to do'})

const options = {
  hostname: 'nodejs.cn',
  port: 80,
  path: '/todos',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}

const req = http.request(options, res => {
  // console.log(res);
  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', err => {
  console.log(err);
})

req.write(data)
req.end()
