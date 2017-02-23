<!-- <template>
  Is should be missing, otherwise
  render() function will not execute
</template> -->

<script>
const d3 = require('d3');
export default {
  render: function(createElement) {
    var el = createElement('svg')
    // console.log(el.elm);
    var svg = d3.select(el.elm);
    svg.attr('width', '500')
    // d3.select(el.elm)
    // .append('circle')
    // .attr('cx', '250')
    // .attr('cy', '150')
    // .attr('r', '100')
    return el;
  }
}
</script>

<style>
</style>
