<template>
  <div id="holder">
    <div>
      <a :href="prev.path"> < previous </a>
      <!-- TODO: source code link  -->
      <a :href="next.path"> next > </a>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    console.log(this.$route);
    return {}
  }
}
</script>

<style>
</style>
