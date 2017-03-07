<template>
<div id="tooltipPositioner">
  <div id="tooltip">
    <div id="tooltipContainer">
      <div class="department">adsad</div>
      <div class="rule">asdas</div>
      <div class="name"></div>
      <div class="discretion"></div>
      <div class="valuesContainer">
        <span class="value"></span>
      </div>
      <div class="chart"></div>
    </div>
  </div>
</div>
</template>

<script>
  var $ = require('jquery');

  module.exports = {
    name: 'tooltip'
  }

</script>

<style scoped>
#tooltipPositioner {
  position: relative;
  left: -48%;
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

#tooltip .department {
  text-transform: uppercase;
  text-align: left;
  font-size: 10px;
  margin-bottom: 2px;
  color:#666;
  text-align:center;

}

#tooltip .rule{
  height:1px;
  margin:1px auto 3px;
  background:#ddd;
  width:130px;
}

#tooltip .discretion{
  color:#666;
  /*   text-transform:uppercase;*/
  font-size: 11px;
  text-align:center;
  font-style:italic;
}

#tooltip .name {
  text-align: left;
  font-size: 13px;
  /*  width:170px;*/
  text-align:center;
}

#tooltip .value {
  /*  position:absolute;*/
  text-align:center;
  right:10px;
  top:28px;
  font-size: 16px;
  /*  width:100px;*/
  text-align:center;
  overflow:hidden;
  font-weight:bold;
}

#tooltip .change {
  padding-left:10px;
  /*width:110px;*/
  font-size: 16px;
  text-align:right;
  overflow:hidden;
  /*position:absolute;*/
  font-weight:bold;
  color:#666;
  text-align:center;
  display:inline;
}

#tooltip .valuesContainer {
  padding-top:7px;
}

#tooltip.minus .change {
  color:#900;
}

#tooltip.plus .change {
  color:#090;
}
</style>
