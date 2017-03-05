const d3 = require('d3');
const _ = require('lodash');

const DAY_RANGE = d3.range(14, 24);
const WIDTH = 500;

export default class {
  constructor(elem, data, simulation) {
    this.elem = elem;
    this.data = data;
    this.simulation = simulation;
  }
  init() {
    this.dayX = _.map(
      this.data, d => this._dayToX(+d.Date.split('-')[0])
    );
  }
  enter() {
    this.forceIndexCollide = this.simulation.force("index-collide");
    this.simulation.force("index-collide", null);
    this.forceIndexY = this.simulation.force("index-y");
    this.simulation.force("index-y", null);

    this.simulation.force("day-collide", d3.forceCollide(d => d.r + 2).iterations(16))


    this.daysG = this.elem.append('g');

    this.daysG
      .selectAll('text')
      .data(DAY_RANGE)
      .enter()
      .append('text')
      .text(d => d)
      .attr('x', this._dayToX)
      .attr('font-size', 10)
      .attr('fill', 'gray')
      .attr('text-anchor', 'middle')

    var that = this;
    this.simulation.force(
      'day-x', d3.forceX(d => that.dayX[d.index]).strength(1)
    );
    this.simulation.force("day-y", d3.forceY().strength(0.005));
  }
  exit() {
    this.daysG.remove();
    this.simulation.force('day-x', null);
    this.simulation.force("index-collide", this.forceIndexCollide);
    this.simulation.force("index-y", this.forceIndexY);
  }

  _dayToX(day) {
    return (day - DAY_RANGE[0]) * WIDTH / DAY_RANGE.length - WIDTH * 0.48
  }
}
