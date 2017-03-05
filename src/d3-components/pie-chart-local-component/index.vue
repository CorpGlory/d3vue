<!--

Links:
  Local Registration: https://vuejs.org/v2/guide/components.html#Local-Registration
  Props: https://vuejs.org/v2/guide/components.html#Passing-Data-with-Props
  Methods: https://vuejs.org/v2/guide/events.html#Method-Event-Handlers
  Conditional Rendering: https://vuejs.org/v2/guide/conditional.html

Data:
  http://www.studentsoftheworld.info/penpals/stats.php3?Pays=

-->

<template>
  <div>
    <h4>Most popular female names in the world</h4>
    <pie :data="names" />
    <br>
    <button v-if="canAddAName" v-on:click="addName">Add a name</button>
  </div>
</template>

<script>

var _ = require('lodash')
const pie = require('d3-components/pie-chart-local-component/pie')

const NAMES = [
  { name: 'Sarah', value: 2502 },
  { name: 'Emma', value: 2005 },
  { name: 'Laura', value: 1968 },
  { name: 'Chloé', value: 1863 },
  { name: 'Marie', value: 1810 },
  { name: 'Emily', value: 1637 },
  { name: 'Léa', value: 1592 },
  { name: 'Camille', value: 1572 },
  { name: 'Anna', value: 1433 },
  { name: 'Manon', value: 1403 }
]

export default {
  components: {
    pie: pie
  },
  data: function() {
    return {
      names: _.take(NAMES, 3)
    }
  },
  computed: {
    canAddAName: function() {
      return this.names.length < NAMES.length;
    }
  },
  methods: {
    addName: function() {
      this.names.push(NAMES[this.names.length]);
    }
  }
}
</script>
