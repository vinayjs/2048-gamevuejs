<template>
  
   <div class="main-container"> 
      <div class="heading">
        <h1 class="title">2048</h1>
        <div class="scores">
          <div class="score-container">SCORE : '0'</div>
          <div class="best-container">BEST : '0'</div>
        </div>
      </div>
      <div class="below-heading">
        <p class="gameintro">
          "Join the titles, get to "
          <b>2048!</b>
          <br>
          <a href="">How to play -></a>
        </p>
        <button class="new-game">NEW GAME</button>
      </div>
      <div class="game-board">will add a seperate component, add space and color as in game board</div>
      <span></span>
      <div class="below-gameboard">
        <p class="about-game">
            HOW TO PLAY: Use your arrow keys to move the tiles. Tiles with the same number merge into one when they touch.
           Add them up to reach 2048!
           <br>
           <a href="">Start Playing</a>
        </p>
      </div>
      <hr>
   </div>
</template>

<script>
export default {
 data() {
   return {
     formValues: {
       name: '',
       profileSummary: '',
       country: '',
       jobLocation: [],
       remoteWork: false,
       skillSet:[],
       yearsOfExp:''
     }
   }
 },
 methods:{
   submitForm(event) {
     event.preventDefault()
     console.log('Form values', this.formValues)
   }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container {
  background-color:white;
  width: 20%;

}
</style>