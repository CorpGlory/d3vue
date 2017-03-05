<template>
  <div class="holder">
    <ul class="menu">
      <li>Group by: </li>
      <li v-for="link in alinks">
        <a :href="link.item.path" :class="{active: link.active}"> {{link.item.name}} </a>
      </li>
    </ul>
  </div>
</template>

<script>

const _ = require('lodash');

export default {
  props: ['links', 'activeLink'],
  computed: {
    alinks: function() {
      var that = this;
      return _.map(this.links, l => ({
        item: l,
        active: (l.path == that.activeLink.path)
      }))
    }
  }
}
</script>

<style scoped>
  .menu {
    padding: 0;
    margin: 0;
  }
  .menu li {
    text-align: left;
    display: inline-block;
    text-align: left;
    margin: 0px;
    margin-right: 10px;
  }
  .menu li a {
    text-decoration: none;
  }
  .menu li a.active {
    text-decoration: underline;
  }
</style>
