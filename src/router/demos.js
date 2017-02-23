const config = require('config.json');

export const routes = [
  {
    name: 'Circle mount',
    path: '/circle-mount',
    component: require('d3-components/circle-mount')
  },
  {
    name: 'Size controller',
    path: '/size-controller',
    component: require('d3-components/size-controller')
  }
].map(r => {
  var res = r;
  res.href = "#" + r.path;
  res.source = config.githubLink +
               config.d3ComponentsPath +
               r.path + '.vue'
  return res;
})
