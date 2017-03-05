<!--

Based on:

Links:

-->

<template>
  <svg width="600" height="500"></svg>
</template>

<script>

import PH2 from './ph2/index';
const d3 = require('d3');

export default {
  props: ['groupBy', 'data'],
  watch: {
    groupBy: function(groupBy) {
      this.ph2.setLayout(groupBy);
    },
    data: function(data) {
      this.ph2.setData(data);
    }
  },
  mounted: function() {
    var svg = d3.select(this.$el);
    var width = +svg.attr('width');
    var height = +svg.attr('height');

    var that = this;
    var bubblesG = svg.append('g').attr('transform', `translate(${width/2}, ${height/2})`)

    // TODO: remove it later
    d3.csv('static/data/earthquakes.csv', function(data) {
      that.ph2 = new PH2(bubblesG, data, that.groupBy);
    });
  }

}
</script>
