<!--

Links:
  Object attr: https://www.w3schools.com/xml/dom_attribute.asp
  Scopes css: https://github.com/vuejs/vue-loader/blob/master/docs/en/features/scoped-css.md
  .vue files: https://vuejs.org/v2/guide/single-file-components.html
  D3.append: https://github.com/d3/d3-selection/blob/master/src/selection/index.js
  Installation of SASS tutorial: https://www.youtube.com/watch?v=fIpLr04f8Ms
  SASS: http://sass-lang.com/guide

-->

<template>
  <svg width="500" height="300"></svg>
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
    ];

    var x = d3.scaleBand()
      .rangeRound([0, width]).padding(0.1)
      .domain(data.map(d => d.name));
    var y = d3.scaleLinear()
      .rangeRound([height * 0.3 - 20, 0])
      .domain([0, d3.max(data, d => d.val)])

    function addRectsWithName(elem, name) {
      elem
        .append('text')
        .text(name)
        .attr('x', width / 2)
        .attr('y', 5)
        .attr('text-anchor', 'middle');
      elem.selectAll('rect')
        .data(data)
        .enter()
          .append('rect')
          // We add attr here
          .attr('x', d => x(d.name))
          .attr('class', d => d.name)
          .attr('y', d =>  y(d.val))
          .attr('width', x.bandwidth())
          .attr('height', d => y.range()[0] - y(d.val))
    }


    svg
      .append('g')
      .attr('id', 'bars-style')
      .attr('transform', `translate(0, 20)`)
      .call(addRectsWithName, 'Basic styles');

    // vue loader will substitute data attribute for styles
    var STYLE_MODULE_NAME = this.$el.attributes[0].name;
    svg
      .append('g')
      .attr('transform', `translate(0, ${height * 0.3 + 20})`)
      .call(addRectsWithName, 'Scoped styles')
      .selectAll('rect')
      .attr(STYLE_MODULE_NAME, '')

    svg
      .append('g')
      .attr('id', 'bars-style-sass')
      .attr('transform', `translate(0, ${height * 0.6 + 20})`)
      .call(addRectsWithName, 'Sass styles');

  }
}
</script>

<style>
#bars-style .one {
  fill: #ffc300
}
#bars-style .two {
  fill: #c70039
}
#bars-style .three {
  fill: #571845
}

</style>

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
</style>

<style lang="sass">
#bars-style-sass
  .one
    fill: #AA5C39
  .two
    fill: #5B9632
  .three
    fill: #2A4F6E
</style>
