const http = require('http')

const port = 3000
const hostname = '127.0.0.1'

module.exports = () => {
  const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.end('Hello You!!')
  })

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
  })

  return server
}
