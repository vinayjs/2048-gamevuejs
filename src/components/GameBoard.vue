<template>
   <div class="game-board"> 
    <div class="board">2</div>
    <div class="board"></div>
    <div class="board"></div>
    <div class="board">4</div>
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
 }
 .board {
  background-color:#fff9f3;
  width: 20%;
  height: 20%;
  margin: 8px;
  float: left;
 }
</style>
