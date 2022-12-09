<template>
  <!-- <div :class="'color' + number" class="cell">{{ number || '' }}</div> -->
    <div class="cell" :class="('color' + value)">{{value}}</div>

</template>
<script>
export default {
  name: "GameCell",
  methods: {},
props: {
    value: {
      type: Number,
    }
  }

};
</script>
<style>
 .board {
  background-color:#fff9f3;
  width: 20%;
  height: 20%;
  margin: 10px;
  position: relative;
  float: left;
  text-align: center;
 }
 .color2 {
  background-color: yellow;
  color:#776e65;
 }
 .color4 {
  color: rgb(220, 76, 76);
 }
 .color8 {
    color: rgb(107, 52, 52);
 }
 
.color16{
    color: #ca4c21;
}
.color32{
    color: #f57c5f;
}
.color64{
    color: #f65d3b;
}
.color128{
    color: #bd5311;
}
.color256{
    color: #edcc63;
}
.color512{
    color: #edc651;
}
.color1024{
    color: #eec744;
}
.color2048{
    color: #ecc230;
}

</style>