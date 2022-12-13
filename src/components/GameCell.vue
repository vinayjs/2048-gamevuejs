<template>
  <div class="cell" :class="'color' + value">{{ value }}</div>
</template>

<script>
export default {
  name: "GameCell",
  methods: {},
  props: {
    value: {
      type: Number,
    },
  },
};
</script>
<style>
.board {
  background-color: #fff9f3;
  width: 20%;
  height: 20%;
  margin: 10px;
  position: relative;
  float: left;
  text-align: center;
}
.color2 {
  background-color: rgb(238, 238, 135);
  color: rgb(61, 22, 22);
}
.color4 {
  background-color: rgb(232, 193, 242);
  color: rgb(27, 13, 13);
}
.color8 {
  background-color: rgb(158, 237, 146);
  color: white;
}

.color16 {
  background-color: #f59575;
  color: white;
}
.color32 {
  background-color: #f57c5f;
  color: white;
}
.color64 {
  background-color: #f65d3b;
  color: white;
}
.color128 {
  background-color: #edce71;
  color: white;
}
.color256 {
  background-color: #edcc63;
  color: white;
}
.color512 {
  background-color: #edc651;
  color: white;
}
.color1024 {
  background-color: #eec744;
  color: white;
}
.color2048 {
  background-color: #ecc230;
  color: white;
}
</style>
