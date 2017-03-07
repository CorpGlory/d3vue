<!--

Based on:
  http://bl.ocks.org/rveciana/a2a1c21ca1c71cd3ec116cc911e5fce9

Links:

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

    var projection = d3.geoAlbersUsa();
    var path = d3.geoPath()
        .projection(projection);

    d3.json("us.json", function(error, us) {
      svg.append("path")
          .attr("class", "states")
          .datum(topojson.feature(us, us.objects.states))
          .attr("d", path);
    });

  }
  // TODO: fire events
}
</script>
