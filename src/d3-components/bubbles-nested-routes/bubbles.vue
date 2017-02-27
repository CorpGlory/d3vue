<!--

Based on:

Links:

-->

<template>
  <svg width="500" height="300"></svg>
</template>

<script>

import PH2 from './ph2';
const d3 = require('d3');

export default {
  props: ['groupBy', 'data'],
  watch: {
    groupBy: function(newData) {
      this.ph2.setLayout(this.groupBy);
    },
    data: function(newData) {

    }
  },
  mounted: function() {
    console.log(this.$el);
    var svg = d3.select(this.$el);
    var width = +svg.attr('width');
    var height = +svg.attr('height');
    this.ph2 = new PH2(svg);
  },
  methods: {
    refreshLayout: function() {

    }
  }


}
</script>
