<!--

Links:
  .vue files: https://vuejs.org/v2/guide/single-file-components.html

Advanced:
  D3.append: https://github.com/d3/d3-selection/blob/master/src/selection/index.js

-->

<template>
  <svg id="bars-style-basic-svg" width="500" height="300"></svg>
</template>

<script>
const d3 = require('d3');

export default {
  mounted: function() {
    var svg = d3.select(this.$el);
    var width = +svg.attr('width');
    var height = +svg.attr('height');
    var data = [
      {name: 'one', val: 100},
      {name: 'two', val: 150},
      {name: 'three', val: 200}
    ]

    console.log(this.$styles);

    var x = d3.scaleBand()
      .rangeRound([0, width]).padding(0.1)
      .domain(data.map(d => d.name));
    var y = d3.scaleLinear()
      .rangeRound([height, 0])
      .domain([0, d3.max(data, d => d.val)])

    svg
      .selectAll('rect')
      .data(data)
      .enter()
        .append('rect')
        .attr('x', d => x(d.name))
        .attr('class', d => d.name)
        .attr('y', d =>  y(d.val))
        .attr('width', x.bandwidth())
        .attr('height', d => height - y(d.val))
  }
}
</script>

<style>
  /*
    #bars-style-basic-svg
    will be added to global namespace
  */
  #bars-style-basic-svg .one {
    fill: #ffc300
  }
  #bars-style-basic-svg .two {
    fill: #c70039
  }
  #bars-style-basic-svg .three {
    fill: #571845
  }
  #bars-style-basic-svg {
    margin-top: 40px;
  }
</style>
