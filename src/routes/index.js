import routes from './routes.json'

export default routes.map(e => ({
  ...e,
  path: `/pages/${e.path}`
}))
