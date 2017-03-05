const d3 = require('d3');
const _ = require('lodash');

export default class {
  constructor(elem, data, simulation) {
    this.elem = elem;
    this.data = data;
    this.simulation = simulation;
  }

  init() {
    var groups = _(this.data)
      .map((k, i) => ({
        location: k.Location.split(', ')[1],
        index: i
      }))
      .groupBy('location')
      .value();

    this.countries = _.map(groups, (v, k) => ({ key: k, r: -30 }));

    this.links = [];
    console.log(groups[this.countries[0].key][0]);
    for(var i = 0; i < this.countries.length; i++) {
      for(var j = 0; j < groups[this.countries[i].key].length; j++) {
        this.links.push({
          source: i + this.data.length,
          target: groups[this.countries[i].key][j].index
        });
      }
    }

  }

  enter() {

    this.nodesBefore = this.simulation.nodes();
    this.simulation
      .force("country-link", d3.forceLink().id(d => d.index))
      .force("country-charge", d3.forceManyBody().strength(-30))
      .force("country-x", d3.forceX().strength(0.11))
      .force("country-y", d3.forceY().strength(0.11))

    //console.log(this.simulation.force("link").distance());
    this.simulation.force("link")//.distance(-10)

    this.simulation.nodes(_.concat(this.nodesBefore, this.countries));

    this.countryG = this.elem.append("g");
    this.countyLabels = this.countryG
      .selectAll('text')
      .data(this.countries)
      .enter()
      .append('text')
      .text(d => d.key)
      .attr("text-anchor", "middle")
      .attr("font-size", "8")

    this.linesG = this.elem.insert("g", ":first-child");
    this.lines = this.linesG
      .selectAll("line")
      .data(this.links)
      .enter()
      .append("line")
      .attr("stroke", "#d7d7d7")


    this.simulation
      .force("country-link")
      .links(this.links);

  }

  ticked() {
    this.lines
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);
    this.countyLabels
      .attr('x', d => d.x)
      .attr('y', d => d.y)
  }

  exit() {
    this.simulation
      .nodes(this.nodesBefore);
    this.simulation
      .force("country-link", null)
      .force("country-charge", null)
      .force("country-x", null)
      .force("country-y", null)

    this.linesG.remove();
    this.countryG.remove();
  }
}
