<template>
  <!-- <div v-bind:key="cell" :number="cell" v-for="cell in cells">{{ number || ''}}</div> -->

  <section class="game-board">
    <GameCell
      v-for="(cell, index) in cellList"
      :key="`cell-${index}`"
      :value="cell"
      @keydown='onKeydown'
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
      cellList: [0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };
  },
  mounted: function() {
    document.addEventListener.call(window, "keydown", this.onKeydown);
  },
  methods: {
    onKeydown(event) {
      if (event.key !== undefined) {
        const pressedKey = event.key;
        switch (pressedKey) {
          case "ArrowLeft":
            this.leftArrow;
            break;
          case "ArrowUp":
            this.upArrow
            break;
          case "ArrowRight":
            this.rightArrow;
            break;
          case "ArrowDown":
            this.downArrow;
        }
      }
    },
    // onKeydown(e) {
        
    //   if(e.key === 'ArrowLeft'){
    //    return  this.leftArrow
    //   }
    //   else if (e.key === 'ArrowRight'){
    //      return this.rightArrow
    //   }
    //   else if (e.key === 'ArrowUp'){
    //    return this.upArrow
    //   }
    //   else if (e.key === 'ArrowDown'){
    //    return  this.downArrow
    //   }
    // },
    // onkeydown(event){
    //   if(event.keyCode === 37){
    //     this.leftArrow
    //   }
    //   else if (event.keyCode === 39){
    //     this.rightArrow
    //   }
    //   else if (event.keyCode === 38){
    //     this.upArrow
    //   }
    //   else if (event.keyCode === 40){
    //     this.downArrow
    //   }
    // },
    leftMove(arr) {
      for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] !== arr[i - 1] && arr[i - 1] === 0) {
          [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
        }
        if (arr[i] === arr[i - 1] && arr[i - 1] !== 0) {
          this.score += arr[i];
          arr[i - 1] = arr[i] + arr[i - 1];
          arr[i] = 0;
          break;
        }
      }
      return arr;
    },
    addCells(cells) {
      let emptyCells = [];
      cells.forEach((cell, index) => {
        if (cell === 0) {
          emptyCells.push(index);
        }
      });
      if (emptyCells.length > 0) {
        let index = this.shuffle(emptyCells)[0];
        cells[index] = 2;
      }
      return cells;
    },
    shuffle(arr) {
      for (let i = 0; i < arr.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    },
    destructureArray(arr) {
      let x = [[], [], [], []];
      for (let i = 0; i < arr.length; i++) {
        if (i >= 0 && i <= 3) {
          x[0].push(arr[i]);
        } else if (i >= 4 && i <= 7) {
          x[1].push(arr[i]);
        } else if (i >= 8 && i <= 11) {
          x[2].push(arr[i]);
        } else x[3].push(arr[i]);
      }
      return x;
    },
    leftArrow() {
      let arr = this.destructureArray(this.cellList);
      let x = [];
      let y = [];
      for (let i = 0; i < arr.length; i++) {
        x.push(this.leftMove(arr[i]));
      }
      for (let j = 0; j < x.length; j++) {
        for (let k = 0; k < x[j].length; k++) {
          y.push(x[j][k]);
        }
      }
      this.addCells(y);
      this.cellList = y;

      return this.cellList;
    },
    rightMove(arr) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1] && arr[i + 1] === 0) {
          [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
          // console.log(arr)
        }
        if (arr[i] === arr[i + 1] && arr[i + 1] !== 0) {
          arr[i + 1] = arr[i] + arr[i + 1];
          arr[i] = 0;
          break;
        }
      }
      return arr;
    },
    rightArrow() {
      let arr = this.destructureArray(this.cellList);
      let x = [];
      let y = [];
      for (let i = 0; i < arr.length; i++) {
        x.push(this.rightMove(arr[i]));
      }
      for (let j = 0; j < x.length; j++) {
        for (let k = 0; k < x[j].length; k++) {
          y.push(x[j][k]);
        }
      }
      this.addCells(y);
      this.cellList = y;
      return this.cellList;
    },
    destructureUpDown(arr) {
      let x = [[], [], [], []];
      for (let i = 0; i < arr.length; i++) {
        if (i === 0 || i === 4 || i === 8 || i === 12) {
          x[0].push(arr[i]);
        } else if (i === 1 || i === 5 || i === 9 || i === 13) {
          x[1].push(arr[i]);
        } else if (i === 2 || i === 6 || i === 10 || i === 14) {
          x[2].push(arr[i]);
        } else x[3].push(arr[i]);
      }
      return x;
    },
    addSubArray(cell) {
      let arr = this.destructureArray(cell);
      let x = [];
      let y = [];
      for (let i = 0; i < arr.length; i++) {
        x.push(this.leftMove(arr[i]));
      }
      for (let j = 0; j < x.length; j++) {
        for (let k = 0; k < x[j].length; k++) {
          y.push(x[j][k]);
        }
      }
      cell = y;
      return cell;
    },
    downArrow() {
      let arr = this.destructureUpDown(this.cellList);
      let x = [];
      let y = [];
      for (let i = 0; i < arr.length; i++) {
        x.push(this.rightMove(arr[i]));
      }
      for (let j = 0; j < x.length; j++) {
        for (let k = 0; k < x[j].length; k++) {
          y.push(x[j][k]);
        }
      }
      let a = this.destructureUpDown(y);
      let b = [];
      for (let j = 0; j < a.length; j++) {
        for (let k = 0; k < a[j].length; k++) {
          b.push(a[j][k]);
        }
      }
      this.addCells(b);
      this.cellList = b;
      return this.cellList;
    },
    upArrow() {
      let arr = this.destructureUpDown(this.cellList);
      let x = [];
      let y = [];
      for (let i = 0; i < arr.length; i++) {
        x.push(this.leftMove(arr[i]));
      }
      for (let j = 0; j < x.length; j++) {
        for (let k = 0; k < x[j].length; k++) {
          y.push(x[j][k]);
        }
      }
      let a = this.destructureUpDown(y);
      let b = [];
      for (let j = 0; j < a.length; j++) {
        for (let k = 0; k < a[j].length; k++) {
          b.push(a[j][k]);
        }
      }
      this.cellList = b;
      return this.cellList;
    }
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