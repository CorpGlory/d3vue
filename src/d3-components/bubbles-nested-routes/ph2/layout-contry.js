const d3 = require('d3');

export default class {
  constructor(elem, data, simulation) {
    this.elem = elem;
    this.data = data;
    this.simulation = simulation;
  }

  init() {
    var range = this.data.length / 20;
    this.links = d3.range(0, range).map(
      () => ({
        source:~~d3.randomUniform(range)(),
        target:~~d3.randomUniform(range)()
      })
    );
  }

  enter() {
    this.simulation
      .force("link", d3.forceLink().id(d => d.index))

    this.linesG = this.elem.insert("g", ":first-child");
    this.lines = this.linesG
      .attr("class", "links")
      .selectAll("line")
      .data(this.links)
      .enter()
      .append("line")
      .attr("stroke", "black")

    this.simulation
      .force("link")
      .links(this.links);

  }

  ticked() {
    this.lines
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);
  }

  exit() {
    this.simulation
      .force("link", null)
    this.linesG.remove();
  }
}
