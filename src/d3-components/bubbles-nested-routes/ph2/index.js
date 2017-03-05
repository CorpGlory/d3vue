// http://vallandingham.me/bubble_charts_with_d3v4.html

import layoutTotal from './layout-total';
import layoutCountry from './layout-contry';
import layoutYear from './layout-year';

const d3 = require('d3');
import _ from 'lodash';

// TODO: do it d3-way so I can use selection.call()

export default class PH2 {
  constructor(elem, data, layoutName) {
    this.svg = elem;
    this.data = data;
    this.setData(data);
    this._init();
    this.layout = undefined;
    this.setLayout(layoutName);
  }

  setLayout(layoutName) {

    if(layoutName === undefined) {
      throw new Error('layoutName is undefined');
    }
    if(!this.layouts) {
      throw new Error('Layouts are not defined');
    }
    if(!this.layouts[layoutName]) {
      throw new Error('Can`t find layout ' + layoutName);
    }

    if(this.layout) {
      this.layout.exit();

    }
    this.layout = this.layouts[layoutName];
    if(!this.layout.inited) {
      this.layout.init();
      this.layout.inited = true;
    }
    this.layout.enter();
    this.simulation.alpha(1);
    this.simulation.restart();
  }

  setData(data) {
    this.nodes = data.map(d => ({
      r: +d.Magnitude
    }))
  }

  _init() {
    this.simulation = d3.forceSimulation()
      .force("collide", d3.forceCollide(d => d.r + 5).iterations(16))
      .force("center", d3.forceCenter(0, 0))
      .force("charge", d3.forceManyBody().strength(-1))

    this._initLayouts();

    var node = this.svg.append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(this.nodes)
      .enter()
      .append("circle")
      .attr("r", d => d.r )

    var that = this;
    var ticked = function() {
      node
        .attr("cx", d => d.x )
        .attr("cy", d => d.y );
      if(that.layout.ticked) {
        that.layout.ticked();
      }
    }

    this.simulation
      .nodes(this.nodes)
      .on("tick", ticked);

  }

  _initLayouts() {
    this.layouts = {
      'total': layoutTotal,
      'country': layoutCountry,
      'year': layoutYear
    };

    for (var k in this.layouts) {
      var v = this.layouts[k];
      this.layouts[k] = new v(this.svg, this.data, this.simulation);
    }
  }

}