<template>
  <div id="holder">
    <div class="links">
      <router-link v-if="prev" :to="prev.path" class="prev"> < prev </router-link>
      <a :href="sourceHref" class="source"> source </a>
      <router-link v-if="next" :to="next.path" class="next"> next > </router-link>
    </div>
  </div>
</template>

<script>

import { routes } from 'router/demos';
const config = require('config.json');

export default {
  computed: {
    prev: function() {
      var index = this.findIndex();
      if(index == -1) {
        return undefined;
      }
      return index > 0 ? routes[index - 1] : undefined;
    },
    next: function() {
      var index = this.findIndex();
      if(index == -1) {
        return undefined;
      }
      return index + 1 < routes.length ? routes[index + 1] : undefined;
    },
    sourceHref: function() {
      var index = this.findIndex();
      if(index == -1) {
        return config.githubLink;
      }
      return routes[index].source;
    }
  },
  methods: {
    findIndex: function() {
      var me = this.$route.name;
      return routes.findIndex(r => r.name === me);
    }
  }
}
</script>

<style scoped>

#links {
  display: block;
  width: 300px;
  height: 40px;
  position: relative;
}

a {
  display: block;
  position: absolute;
  width: 100px;
  text-decoration: none;
  font-weight: bold;
  color: blue;
}

a:hover {
  text-decoration: underline;
}

.prev {
  left: 0px;
  text-align: left;
}

.source {
  left:100px;
  text-align: center;
}

.next {
  right: 0px;
  text-align: right;
}

#holder {
  width: 300px;
  margin: auto;
  position: relative;
  height: 30px;
  /*border-top: 1px dashed gray;*/
  border-bottom: 1px dashed gray;
  padding-top: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
