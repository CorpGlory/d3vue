<template>
<div id="tooltipPositioner">
  <div id="tooltip">
    <div id="tooltipContainer">
      <div class="title">{{title}}</div>
      <div class="description">{{description}}</div>
    </div>
  </div>
</div>
</template>

<script>

  module.exports = {
    name: 'tooltip',
    props: ['title', 'description']
  }

</script>

<style scoped>

#tooltipPositioner {
  position: relative;
  left: 50%;
  top: 350px;
  width: 240px;
}

#tooltipContainer {
  position: absolute;
  bottom: 0;
  width: 230px;
  left: -125px;
  font-size: 12px;
  line-height: 16px;
  padding: 10px;
  border-radius: 3px;
  background: rgba(255,255,255,0.9);
  color: #000;
  box-shadow: 0 1px 5px rgba(0,0,0,0.4);
  -moz-box-shadow: 0 1px 5px rgba(0,0,0,0.4);
  border:1px solid rgba(200,200,200,0.85);
  text-align:center;
}

#tooltip {
  text-align:center;
  z-index: 1000;
  position: absolute;
  display: block;
}

#tooltip .description {
  color:#666;
  font-size: 11px;
  text-align:center;
  font-style:italic;
}

#tooltip .title {
  text-align: left;
  font-size: 13px;
  text-align:center;
}

</style>
