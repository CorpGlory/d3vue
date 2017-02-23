<template>
  <div class="hello">
    <ul>
      <li v-for="item in itemz">
        <a :href="item.path | hashed">{{ item.name  }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { routes } from 'router/demos'
export default {
  name: 'hello',
  data () {
    return {
      itemz: routes
    }
  },
  filters: {
    hashed: function (value) {
      if (!value) return ''
      return '#' + value;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  /*list-style-type: none;*/
  padding: 0;
  margin: auto;
  width: 150px;
}

li {
  /*display: inline-block;*/
  margin: 0 0px;
  list-style: decimal
}

a {
  color: blue;
  display: block;
  text-decoration: none;
  text-align: left;
}

a:hover {
  text-decoration: underline;;
}
</style>
