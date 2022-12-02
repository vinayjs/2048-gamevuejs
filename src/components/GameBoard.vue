<template>
   <div class="game-board"> 
    <div class="board x2" id="0-0">1</div>
    <div class="board" id="0-1">2</div>
    <div class="board" id="0-2">3</div>
    <div class="board" id="0-3">4</div>
    <div class="board" id="1-0">5</div>
    <div class="board" id="1-1">6</div>
    <div class="board" id="1-2">7</div>
    <div class="board x8" id="1-3">8</div>
    <div class="board" id="2-0">9</div>
    <div class="board" id="2-1">10</div>
    <div class="board" id="2-2">11</div>
    <div class="board" id="2-3">12</div>
    <div class="board" id="3-0">13</div>
    <div class="board" id="3-1">14</div>
    <div class="board" id="3-2">15</div>
    <div class="board" id="3-3">16</div>
   </div>
</template>

<script>
export default {
 data() {
   return {
   }
 },
 methods:{
  
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .game-board {
  background-color: #bbada0;
  width:500px ;
  height:500px;
  margin: 15px;
  border-radius: 5px;
 }
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
