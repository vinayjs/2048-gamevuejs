<template>
  <!-- <div v-bind:key="cell" :number="cell" v-for="cell in cells">{{ number || ''}}</div> -->

  <section class="game-board">
    <GameCell
      v-for="(cell, index) in cellList"
      :key="`cell-${index}`"
      :value="cell"
      v-model="cellList"
      @keyup.left="leftMove"
    ></GameCell>
  </section>
</template>
   
   <script>
import GameCell from "./GameCell.vue";
// import {useStore} from 'vuex'
export default {
  name: "GameBoard",
  components: {
    GameCell
  },
  data() {
    return {
      cellList: [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0]
    };
  },
  methods: {
    leftMove(cellList){
      cellList = this.cellList
      for (let i = cellList.length - 1; i >= 0; i--) {
        if (
          cellList[i] !== cellList[i - 1] &&
          cellList[i - 1] === 0
        ) {
          [cellList[i - 1], cellList[i]] = [
            cellList[i],
            cellList[i - 1]
          ];
        }
        if (
          cellList[i] === cellList[i - 1] &&
          cellList[i - 1] !== 0
        ) {
          cellList[i - 1] = cellList[i] + cellList[i - 1];
          cellList[i] = 0;
          break;
        }
      }
      return cellList;
    },
   shuffle(){
    for (let i = this.cellList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cellList[i], this.cellList[j]] = [this.cellList[j], this.cellList[i]];
      }
      return this.cellList;
     },
  
  },
  mounted() {
    this.shuffle();
    this.leftMove()
  }
};
</script>
   
   <style scoped>
.game-board {
  display: grid;
  grid-template-columns: 100px 100px 100px 100px;
  grid-template-rows: 100px 100px 100px 100px;
  grid-column-gap: 25px;
  grid-row-gap: 25px;
  justify-content: center;
  background-color: #bbada0;
  padding: 10px;
}
.cell {
  border: 5px solid #ccc;
  background-color: #eee1c9;
  font-weight: bolder;
  padding: 35%;
  font-size: 40px;
}
</style>