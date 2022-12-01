<template>
   <div class="main-container"> 
      <div class="heading">
        <h1 class="title">2048</h1>
        <div class="scores">
          <div class="score-container">SCORE <br>
            <span id="value1">0</span></div>
          <div class="best-container">BEST <br>
            <span id="value2">1104</span></div>
        </div>
      </div>
      <div class="below-heading">
        <p class="gameintro">
          Join the titles, get to <b>2048!</b>  
          <br>
          <a id='htp' href="#link-htp">How to play -></a>
        </p>
        <button class="new-game">NEW GAME</button>
      </div>
      <GameBoard />
      <!-- <span></span> -->
      <div id="gap"></div>
      <div class="below-gameboard">
        <p class="about-game" id="link-htp">
            HOW TO PLAY: Use your arrow keys to move the tiles. Tiles with the same number merge into one when they touch.
           Add them up to reach 2048!
           <br>
           <a href="#game">Start Playing</a>
        </p>
      </div>
      <hr>
      <p>
        'You are playing the ' <b>orginal version of 2048.</b>
        'Try out the offcial apps for '
        <a href="https://itunes.apple.com/us/app/2048-by-gabriele-cirulli/id868076805" target="_blank">iOS</a>
        'and'
        <a href="https://play.google.com/store/apps/details?id=com.gabrielecirulli.app2048" target="_blank">Android!</a>
        'All other versions of this game are derivatives and should be used with caution.'
      </p>
      <hr>
      <p>
        Created by 
        <a href="http://gabrielecirulli.com" target="_blank">Gabriele Cirulli.</a>
        Based on 
        <a href="https://itunes.apple.com/us/app/1024!/id823499224" target="_blank">1024 by Veewo Studio.</a>
      </p>
   </div>
</template>

<script>
 import GameBoard  from  './GameBoard.vue'
export default {
  name: 'MainContainer',
  components: {
    GameBoard
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  margin: 0;
  padding: 0;
  background: #faf8ef;
}
 
.main-container {
  background: #faf8ef;
  width: 500px;
  font-family: "Clear Sans", "Helvetica Neue", Arial, sans-serif; 
  font-size: 18px;
  margin: 35px  auto 0 auto;

}

.heading {
  display: flex;
   width: 500px; 
  position: relative;
}

.heading::after{
 content: '';
 display: block;
 clear: both;
}

.title{ 
  color: #776e65;
  font-size: 80px;
  margin: 0;
  letter-spacing: 2px;
  font-weight: 700;
 }

.scores{
  display:flex;
  position:absolute;
  top: 0;
  font-size: 13px;
  right:0px; 
  font-weight: bold;
   text-align: center;
   padding: 5px 10px ;
} 

.score-container{
  background: #bbada0 ;
  color: #eee4da;
  width: 100%;
  border-radius: 3px;
  display:block;
  padding: 5px 10px ;
  margin-right: 6px;
  
  align-items: center;
}

.best-container {
  background: #bbada0 ;
  color:#eee4da;
  display: block;
  border-radius: 3px;
  padding:5px 10px;
  margin-right: 5px;
}
 
#value1{
  color: white;
  font-size: 25px;
  font-weight: bold;
} 
#value2{
  color: white;
  font-size: 25px;
  font-weight: bold;
}

.below-heading {
  display:flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.gameintro {
  color: #776e65;
  justify-content: space-between;
}

#htp {
   color: #776e65;
  font-weight: 700;
  font-size: 15px; 
}

.new-game {
  background: #8f7a66;
  border: none;
  padding: 10px;
  border-radius: 5px;
  color: #f9f6f2;
  font-size: 15px;
  font-weight: 700; 
  margin-right: 5px;
}

#gap{
  margin: 80%;
  width: auto;
}
</style>