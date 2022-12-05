<template>
      <!-- <div v-bind:key="cell" :number="cell" v-for="cell in cells">{{ number || ''}}</div> -->

    <section class="game-board">
        <GameCell v-for="(cell, index) in cellList"
      :key="`cell-${index}`"
      :value="cell"></GameCell>
    </section>
   

  </template>
   
   <script>
    import GameCell from './GameCell.vue';
  export default {
    name:'GameBoard',
    components: {
        GameCell
    },
    setup(){
       const cellList = [
        0, 0, 0, 2,
        0, 0, 0, 0,
        0, 0, 2, 0,
        0, 0, 0, 0
        ]
       const shuffle = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            return arr;
            }
        shuffle(cellList)
       return {
        cellList
       }

        },
    methods: {
       init(arr) {
             this.suffle(arr);
        },
        shuffle(arr) {
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            return arr;
        },
        addCells() {
            let emptyCells = [];
            this.cells.forEach((cell, index) => {
                if (cell === 0) {
                    emptyCells.push(index);
                }
            });
            if (emptyCells.length > 0) {
                let index = this.shuffle(emptyCells)[0];
                this.cells[index] = 2;
            }
            else {
                let turns = false;
                for (let i = 0; i < 16; i++) {
                    if (this.checkTurns(i)) {
                        turns = true;
                        break;
                    }
                }
                if (!turns)
                    alert("Game Over!");
            }
        },
        checkTurns(i) {
            let v = this.cells[i];
            return (v === this.cells[i + 1] ||
                v === this.cells[i - 1] ||
                v === this.cells[i + 4] ||
                v === this.cells[i - 4]);
        },
    },

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
  background-color: #BBADA0;
  padding: 10px;
 }
 .cell {
    border: 5px solid #ccc;
    background-color: #EEE1C9;
    font-weight: bolder;
    padding: 35%;
    font-size: 40px
    
 }

 
  </style>