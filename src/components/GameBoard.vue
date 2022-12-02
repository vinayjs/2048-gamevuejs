<template>
   <div class="game-board"> 
    <div class="board x2">2</div>
    <div class="board">0</div>
    <div class="board">0</div>
    <div class="board">0</div>
    <div class="board">0</div>
    <div class="board">0</div>
    <div class="board x8">8</div>
    <div class="board">0</div>
    <div class="board">0</div>
    <div class="board">0</div>
    <div class="board x4">4</div>
    <div class="board">0</div>
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
 }

 .x4 {
  background-color: rgb(222, 156, 238);
 }

 .x8 {
  background-color: rgb(158, 237, 146);
 }
</style>
