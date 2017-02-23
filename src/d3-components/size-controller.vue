<!--
Links
  Data: https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function
  Form Input Bindings: https://vuejs.org/v2/guide/forms.html#Basic-Usage
  Watchers: https://vuejs.org/v2/guide/computed.html#Watchers
-->

<template>
  <div>
    <svg width="500" height="300"></svg>
    <br>
    <input
      type="range"
      v-model="circleSize"
      min="1"
      max="100"
      step="1"
    >
  </div>
</template>

<script>
const d3 = require('d3');
export default {
  data: function() {
    return {
      circleSize: 50
    }
  },
  mounted: function(createElement) {
    var svg = d3.select(this.$el).select('svg');
    this.circle = svg
      .append('circle')
      .attr('cx', '250')
      .attr('cy', '150')
      .attr('r', this.circleSize)
  },
  watch: {
    circleSize: function(newValue) {
      this.circle
        .attr('r', newValue)
    }
  }

}
</script>

<style>
</style>
