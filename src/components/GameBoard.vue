<template>
  <div id="play">
    <div class="heading">
      <h1 class="title">2048</h1>
      <div class="scores">
        <div class="score-container">
          SCORE
          <br />
          <span id="value1">{{score}}</span>
        </div>
        <div class="best-container">
          BEST
          <br />
          <span id="value2">{{bestscore}}</span>
        </div>
      </div>
    </div>
    <div class="below-heading">
      <p class="gameintro">
        Join the titles, get to
        <b>2048!</b>
        <br />
        <a id="htp" href="#link-htp">How to play -></a>
      </p>
      <button class="new-game" @click.prevent="newGame">NEW GAME</button>
    </div>
    <section class="game-board">
      <GameCell
        v-for="(cell, index) in cellList"
        :key="`cell-${index}`"
        :value="cell"
        :id="value"
        @keydown="onKeydown(e)"
        v-touch:swipe="swipeHandler"
      ></GameCell>
    </section>
  </div>
</template>
   
<script >
import GameCell from "./GameCell.vue";
import {destructureArray,destructureUpDown,shuffle} from '../methods.js'
export default {
  name: "GameBoard",
  components: {
    GameCell
  },

  data() {
    return {
      cellList: ["", 2, "", "", "", "", 2, "", "", "", "", "", "", "", "", ""],
      score: 0,
      bestscore: 1440
    };
  },
  mounted: function() {
    document.addEventListener.call(window, "keydown", this.onKeydown, false);
    document.addEventListener.call(window, "swipe", this.swipeHandler, false);
  
  },
  methods: {
    onKeydown(event) {
      event.preventDefault();
      if (event.key !== undefined) {
        switch (event.key) {
          case "ArrowLeft":
            this.leftArrow();
            break;
          case "ArrowUp":
            this.upArrow();
            break;
          case "ArrowRight":
            this.rightArrow();
            break;
          case "ArrowDown":
            this.downArrow();
            break;
        }
      }
    },
    swipeHandler(event) {
      if (event !== undefined) {
        switch (event) {
          case "left":
            this.leftArrow();
            break;
          case "top":
            this.upArrow();
            break;
          case "right":
            this.rightArrow();
            break;
          case "bottom":
            this.downArrow();
            break;
        }
      }
    },
    newGame() {
      this.cellList = shuffle(["", 2, "", "", "", "", 2, "", "", "", "", "", "", "", "", ""]);
      this.score = 0;
    },
    addCells(cells) {
      let emptyCells = [];
      cells.forEach((cell, index) => {
        if (cell === "") {
          emptyCells.push(index);
        }
      });
      if (emptyCells.length > 0) {
        let index = shuffle(emptyCells)[0];
        cells[index] = 2;
      } else {
        let turns = false;
        for (let i = 0; i < 16; i++) {
          if (this.checkTurns(i)) {
            turns = true;
            break;
          }
        }
        if (!turns) alert('Game Over!');
      }
      return cells;
    },
    checkTurns(i) {
      let v = this.cellList[i];
      return (
        v === this.cellList[i + 1] ||
        v === this.cellList[i - 1] ||
        v === this.cellList[i + 4] ||
        v === this.cellList[i - 4]
      );
    },
    addLeft(arr) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
          this.score = this.score + Number(arr[i]);
          if (this.score > this.bestscore) {
            this.bestscore = this.score;
          }
          arr[i] = arr[i] + arr[i + 1];
          arr[i + 1] = "";
        }
      }
      return arr;
    },
    leftMove(arr) {
      let x = [];
      let y = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "") {
          x.push(arr[i]);
        } else y.push(arr[i]);
      }
      this.addLeft(x);
      for (let i = 0; i < x.length - 1; i++) {
        if (x[i] === "" && i !== x.length - 1 && x[i + 1] !== x[i]) {
          [x[i], x[i + 1]] = [x[i + 1], x[i]];
        }
      }
      for (let j = 0; j < y.length; j++) {
        x.push(y[j]);
      }
      return x;
    },
    leftArrow() {
      let arr = destructureArray(this.cellList);
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
      let x = [];
      let y = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "") {
          x.push(arr[i]);
        } else y.push(arr[i]);
      }
      this.addRight(x);
      for (let i = x.length - 1; i >= 0; i--) {
        if (x[i] === "" && i !== 0 && x[i - 1] !== x[i]) {
          [x[i - 1], x[i]] = [x[i], x[i - 1]];
        }
      }
      for (let j = 0; j < y.length; j++) {
        x.unshift(y[j]);
      }
      return x;
    },
    rightArrow() {
      let arr = destructureArray(this.cellList);
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
    addRight(arr) {
      for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === arr[i - 1]) {
          this.score = this.score + Number(arr[i]);
          if (this.score > this.bestscore) {
            this.bestscore = this.score;
          }
          arr[i] = arr[i - 1] + arr[i];
          arr[i - 1] = "";
        }
      }
      return arr;
    },
    downArrow() {
      let arr = destructureUpDown(this.cellList);
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
      let a = destructureUpDown(y);
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
      let arr = destructureUpDown(this.cellList);
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
      let a = destructureUpDown(y);
      let b = [];
      for (let j = 0; j < a.length; j++) {
        for (let k = 0; k < a[j].length; k++) {
          b.push(a[j][k]);
        }
      }
      this.addCells(b);
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
  touch-action: none;
}
.cell {
  border: 5px solid #baa898;
  /* background-color: #eee1c9; */
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3em;
  font-size: 42px;
}
.heading {
  display: flex;
  width: 500px;
  position: relative;
}
.heading::after {
  content: "";
  display: block;
  clear: both;
}
.title {
  color: #59442e;
  font-size: 80px;
  margin: 0;
  letter-spacing: 2px;
  font-weight: 700;
}
.scores {
  display: flex;
  position: absolute;
  top: 0;
  font-size: 13px;
  right: 0px;
  font-weight: bold;
  text-align: center;
  padding: 5px 10px;
}
.score-container {
  background: #bbada0;
  color: white;
  width: 100%;
  border-radius: 3px;
  display: block;
  padding: 5px 10px;
  margin-right: 6px;

  align-items: center;
}
.best-container {
  background: #bbada0;
  color: white;
  display: block;
  border-radius: 3px;
  padding: 5px 10px;
  margin-right: 5px;
}

#value1 {
  color: white;
  font-size: 25px;
  font-weight: bold;
}
#value2 {
  color: white;
  font-size: 25px;
  font-weight: bold;
}
.below-heading {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}
.gameintro {
  color: #59442e;
  justify-content: space-between;
}
#htp {
  color: #59442e;
  font-weight: 700;
  font-size: 15px;
}
.new-game {
  background: #8f7a66;
  border: none;
  padding: 10px;
  border-radius: 5px;
  color: white;
  font-size: 15px;
  font-weight: 700;
  margin-right: 5px;
}
</style>