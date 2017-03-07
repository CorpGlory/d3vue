<!--

-->

<template>
  <div id="holder">
    <us-map />
    <tooltip />
  </div>
</template>

<script>

var _ = require('lodash');
const map = require('d3-components/basic-map-tooltip/map');
const tooltip = require('d3-components/basic-map-tooltip/tooltip');

export default {
  components: {
    usMap: map,
    tooltip: tooltip
  },
  data: function() {
    return {
    }
  },
  methods: {
  }
}

</script>

<style>

</style>
