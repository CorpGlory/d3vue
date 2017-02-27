const config = require('config.json');

export const routes = [
  {
    name: 'Circle: mount',
    path: '/circle-mount',
    component: require('d3-components/circle-mount')
  },
  {
    name: 'Circle: size controller',
    path: '/size-controller',
    component: require('d3-components/size-controller')
  },
  {
    name: 'Bars: styles basic',
    path: '/bars-style-basic',
    component: require('d3-components/bars-style-basic')
  },
  {
    name: 'Bars: styles scoped',
    path: '/bars-style-scoped',
    component: require('d3-components/bars-style-scoped')
  },
  {
    name: 'Pie chart: local component & props',
    path: '/pie-chart-local-component',
    folder: true,
    component: require('d3-components/pie-chart-local-component/index')
  },
  {
    name: 'Bubbles: nested routes',
    path: '/bubbles-nested-routes',
    alias: '/bubbles-nested-routes/*',
    folder: true,
    component: require('d3-components/bubbles-nested-routes/bubbles')
  }
].map(r => {
  var res = r;
  res.source = config.githubLink +
               config.d3ComponentsPath +
               r.path +
               (r.folder ? '' : '.vue')
  return res;
})
