// http://vallandingham.me/bubble_charts_with_d3v4.html

const d3 = require('d3');

const layoutTotal = require('./layout-total');
const layoutContry = require('./layout-contry');

const _ = require('lodash');

// TODO: do it d3-way so I can use selection.call()

export default class PH2 {
  constructor(elem, data, layoutName) {
    this.svg = elem;
    this.setData(data);
    this._init();
    this.layout = undefined;
    this.setLayout(layoutName);
  }

  setLayout(layoutName) {
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
    this.layout.enter();
  }

  setData(data) {
    var range = data.length;
    this.data = {
      nodes:data.map(d => ({
        r: +d.Magnitude
      })),
      links:d3.range(0, range).map(
        function(){ return {source:~~d3.randomUniform(range)(), target:~~d3.randomUniform(range)()}
      })
    };
  }

  _init() {
    this.simulation = d3.forceSimulation()
      .force("link", d3.forceLink().id(d => d.index))
      .force("collide", d3.forceCollide(d => d.r + 5).iterations(16) )
      .force("center", d3.forceCenter(0, 0))

    var link = this.svg.append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(this.data.links)
      .enter()
      .append("line")
      .attr("stroke", "black")

    var node = this.svg.append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(this.data.nodes)
      .enter()
      .append("circle")
      .attr("r", d => d.r )

    var ticked = function() {
      link
        .attr("x1", d => d.source.x )
        .attr("y1", d => d.source.y )
        .attr("x2", d => d.target.x )
        .attr("y2", d => d.target.y );

      node
        .attr("cx", d => d.x )
        .attr("cy", d => d.y );
    }

    this.simulation
      .nodes(this.data.nodes)
      .on("tick", ticked);

    this.simulation
      .force("link")
      .links(this.data.links);
  }

  _initLayouts() {
    this.layouts = {
      'total': layoutTotal,
      'county': layoutContry,
    };
    _.this.layouts
  }

}
