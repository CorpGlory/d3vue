<!--

Explanation:
  It is not really nester routes.
  It is magic of aliases and $watch route.
  See /src/router/demos.js (Bubbles: nested routes part)
  and /src/router/index.js

Links:
  Dynamic-matching: https://router.vuejs.org/en/essentials/dynamic-matching.html
  Nested Routes: https://router.vuejs.org/en/essentials/nested-routes.html

-->

<template>
  <div class="holder">
    <ul class="menu">
      <li v-for="link in links">
        <a :href="link.path"> {{link.name}} </a>
      </li>
    </ul>
    {{layout}}
  </div>
</template>

<script>

const MY_URL_PREFIX = 'bubbles-nested-routes';
const _ = require('lodash');
const LINKS = [
  {
    name: 'Together',
    path: '',
    layout: 'together'
  },
  {
    name: 'By contry',
    path: '/contry',
    layout: 'contry'
  },
  {
    name: 'By year',
    path: '/year',
    layout: 'year'
  }
].map(d => {
  d.path = '#/' + MY_URL_PREFIX + d.path;
  return d;
});

export default {
  data: function() {
    return {
      layout: this.resolveLayout(),
    }
  },
  computed: {
    links: function () {
      return LINKS;
    }
  },
  methods: {
    resolveLayout: function() {
      var link = _.find(LINKS, l => l.path == '#' + this.$route.path);
      if(!link) {
        link = LINKS[0];
      }
      return link.layout;
    }
  },
  watch: {
    '$route' (to, from) {
      this.layout = this.resolveLayout();
    }
  }
}
</script>

<style scoped>
  .holder {
    width: 500px;
    margin: auto;
  }
  .menu ul {
    padding: 0;
    margin: 0;
  }
  .menu li {
    text-align: left;
  }
</style>
