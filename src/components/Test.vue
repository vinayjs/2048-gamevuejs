<template>
  <!-- <div v-bind:key="cell" :number="cell" v-for="cell in cells">{{ number || ''}}</div> -->

  <section class="game-board" >
    <GameCell
      v-for="(cell, index) in cellList"
      :key="`cell-${index}`"
      :value="cell"
      @keyup.once="keyMoves" 
    ></GameCell>
  </section>
</template>
   
<script >
import GameCell from "./GameCell.vue";
export default {
  name: "GameBoard",
  components: {
    GameCell
  },
    data() {
    return {
      cellList: [
                  '', 2, '', 2, '', 2, '', '', '', '', '', '', '', '', '', ''
                ]
    };
  },
  created: function () {
            window.addEventListener('keyup', this.leftMove)
    },
  methods: {
    keyMoves(e){
      if (e.key === "keyup.left") {
        return this.leftMove
      }
      else if (e.key === "keyup.right" || e.key === "keyup.up") {
        return this.shuffle
      }

    },
    leftMove(){
      for (let i = this.cellList.length - 1; i >= 0; i--) {
        if (
          this.cellList[i] !== this.cellList[i - 1] &&
          this.cellList[i - 1] === ''
        ) {
          [this.cellList[i - 1], this.cellList[i]] = [
            this.cellList[i],
            this.cellList[i - 1]
          ];
        }
        if (
          this.cellList[i] === this.cellList[i - 1] &&
          this.cellList[i - 1] !== ''
        ) {
          this.cellList[i - 1] = this.cellList[i] + this.cellList[i - 1];
          this.cellList[i] = '';
          break;
        }
      }
      return this.addCells(this.cellList);
    },
    addCells(){
    let emptyCells = [];
    this.cellList.forEach((cell, index) => {
      if (cell === 0) {
        emptyCells.push(index);      }
    });
    if (emptyCells.length > 0) {
      let index = this.shuffle(emptyCells)[0];
      this.cellList[index] = 2;
    } 
    return this.cellList

    },
   shuffle(){
    for (let i = this.cellList.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cellList[i], this.cellList[j]] = [this.cellList[j], this.cellList[i]];
      }
      return this.cellList;
     }
  }
}

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