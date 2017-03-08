<!--

Links:
  Events: https://vuejs.org/v2/guide/events.html
  Computed properties: https://vuejs.org/v2/guide/computed.html

Data:
  http://worldpopulationreview.com/states/

-->

<template>
  <div id="holder">
    <div class="mapHolder">
      <us-map
        v-on:stateSelected="onStateSelected"
        v-on:stateDeselected="onStateDeselected"
      />
    </div>
    <tooltip
      v-if="currentState"
      :title="currentState.Name"
      :description="currentStateDescription"
    />
  </div>
</template>

<script>

var _ = require('lodash');

const map = require('d3-components/basic-map-tooltip/map');
const tooltip = require('d3-components/basic-map-tooltip/tooltip');

const STATES_DATA_PATH = 'static/data/states-data.csv';

// lets load with vue-resource, but parse with d3
// just because we can
import * as d3 from 'd3-dsv';


export default {
  components: {
    usMap: map,
    tooltip: tooltip
  },
  created: function() {
    var that = this;

    this.$http.get(STATES_DATA_PATH)
      .then(function(res) {
        this.statesData = {};
        d3.dsvFormat(';')
          .parse(res.data, d => {
            var population = d["2017 Population"].split(',').join('');
            d.value = +population;
            that.statesData[d.STATE_ABBR] = d;
            delete d["2017 Population"];
            delete d["STATE_ABBR"];
            return d;
          });
      })
  },
  data: function() {
    return {
      statesData: undefined,
      currentState: undefined
    }
  },
  computed: {
    currentStateDescription: function() {
      return "Population: " + this.currentState.value;
    }
  },
  methods: {
    onStateSelected: function(stateCode) {
      this.currentState = this.statesData[stateCode];
    },
    onStateDeselected: function(stateCode) {
      this.currentState = undefined;
    }
  }
}

</script>

<style scoped>
#holder {
  position: relative;
  height: 300px;
  width: 500px;
  margin: auto;
}
.mapHolder {
  position: absolute;
  margin: auto;
}
</style>
