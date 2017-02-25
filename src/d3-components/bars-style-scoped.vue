<!--

Based on ./bars-style-basic.vue
Maybe there is a better solution.

Links:
  Object attr: https://www.w3schools.com/xml/dom_attribute.asp
  Scopes css: https://github.com/vuejs/vue-loader/blob/master/docs/en/features/scoped-css.md
  .vue files: https://vuejs.org/v2/guide/single-file-components.html

-->

<template>
  <svg width="500" height="300"></svg>
</template>

<script>
const d3 = require('d3');
export default {
  mounted: function() {

    // vue loader will substitute data attribute for styles
    var STYLE_MODULE_NAME = this.$el.attributes[0];

    var svg = d3.select(this.$el);
    var width = +svg.attr('width');
    var height = +svg.attr('height');
    var data = [
      {name: 'one', val: 100},
      {name: 'two', val: 150},
      {name: 'three', val: 200}
    ]

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

        // We add attr here
        .attr('data-v-0e55e99d', '')
        .attr('x', d => x(d.name))
        .attr('class', d => d.name)
        .attr('y', d =>  y(d.val))
        .attr('width', x.bandwidth())
        .attr('height', d => height - y(d.val))
  }
}
</script>

<style scoped>
  .one {
    fill: #154890
  }
  .two {
    fill: #e1d4c0
  }
  .three {
    fill: #ff6600
  }
  svg {
    margin-top: 40px;
  }
</style>
