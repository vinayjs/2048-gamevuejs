<template>
  <!-- <div :class="'color' + number" class="cell">{{ number || '' }}</div> -->
    <div class="cell">{{value}}</div>

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
 .x2 {
  background-color: yellow;
  color: white;
 }
 .x4 {
  background-color: rgb(222, 156, 238);
  color: white;
 }
 .x8 {
  background-color: rgb(158, 237, 146);
  color: white;
 }
 
.x16{
    background-color: #f59575;
    color: white;
}
.x32{
    background-color: #f57c5f;
    color: white;
}
.x64{
    background-color: #f65d3b;
    color: white;
}
.x128{
    background-color: #edce71;
    color: white;
}
.x256{
    background-color: #edcc63;
    color: white;
}
.x512{
    background-color: #edc651;
    color: white;
}
.x1024{
    background-color: #eec744;
    color: white;
}
.x2048{
    background-color: #ecc230;
    color: white;
}
</style>