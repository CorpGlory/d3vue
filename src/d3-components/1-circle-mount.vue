<template>
  <div>
    <svg width="500" height="300"></svg>
  </div>
</template>

<script>
const d3 = require('d3');
export default {
  mounted: function() {
    var svg = d3.select(this.$el).select('svg');
    svg
      .append('circle')
      .attr('cx', '250')
      .attr('cy', '150')
      .attr('r', '100')
  }
}
</script>

<style>
</style>
