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
  width:500px ;
  height:500px;
  margin: 15px;
  margin: 0;
  border-radius: 5px;
 }
 .board {
  background-color:#fff9f3;
  width: 20%;
  height: 18%;
  margin: 10px;
  float: left;
 }
</style>
