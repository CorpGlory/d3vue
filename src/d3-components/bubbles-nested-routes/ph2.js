const d3 = require('d3');


// TODO: do it d3-way so I can use selection.call()



export default class PH2 {
  constructor(elem, layoutName) {
    elem
      .append('rect')
      .attr('x', 10)
      .attr('y', 10)
      .attr('width', 10)
      .attr('height', 10)
  }

  setLayout(layoutName) {

  }


}
