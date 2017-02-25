<!--
Links:
  Components: https://vuejs.org/v2/guide/components.html
  .vue files: https://vuejs.org/v2/guide/single-file-components.html

Advanced:
  Component Lifecyrcle: https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram
  Virtual DOM: https://medium.com/js-dojo/whats-new-in-vue-js-2-0-virtual-dom-dc4b5b827f40#.hexwxh9m3
-->

<template>
  <svg width="500" height="300"></svg>
</template>

<script>
const d3 = require('d3');
export default {
  mounted: function() {
    // this.#el - is the root element in <template>
    // in this case it is <svg> tag
    d3.select(this.$el)
      .append('circle')
      .attr('cx', '250')
      .attr('cy', '150')
      .attr('r', '100')
  }
}
</script>

<style>
</style>
