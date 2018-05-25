const fs = require('fs')
const path = require('path')
const routes = fs.readFileSync(path.resolve(__dirname, './routes.json')).toString()

module.exports = JSON.parse(routes).map(e => ({
  ...e,
  path: `/pages/${e.path}`
}))
