const config = require('config.json');

export const routes = [
  {
    name: 'Circle mount',
    path: '/1-circle-mount',
    component: require('d3-components/1-circle-mount')
  },
  {
    name: 'Circle render',
    path: '/2-circle-mount',
    component: require('d3-components/2-circle-render')
  }
].map(r => {
  var res = r;
  res.href = "#" + r.path;
  res.source = config.githubLink +
               'tree/master/src/d3-components' +
               r.path + '.vue'
  return res;
})
