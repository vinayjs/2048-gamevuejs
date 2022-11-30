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
          <a href="#link-htp">How to play -></a>
        </p>
        <button class="new-game">NEW GAME</button>
      </div>
      <div class="game-board" id="game">will add a seperate component, add space and color as in game board</div>
      <span></span>
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
export default {

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
  /* border: 2px solid blue; */
  font-family:Clear Sans,Arial, Helvetica, sans-serif;
  width: auto;
  height:100%;
  position: absolute;
  margin: 32%;
  margin-top: 1%;
}

.heading {
position: relative;
display: flex;
color: #776e65;
}

.title{
  font-size: 83px;
  margin: 2%;
  letter-spacing: 2px;
  font-weight: 700;
  margin-bottom: 0px;

}

.scores{
  margin:0px;
  position: absolute;
  right: 5px;
  top: 0;
  padding:0 0 0 0;
  display: grid;
  column-gap: 5px;
  grid-template-columns: auto auto;
  margin-bottom: 0px;
  font-size: 12px;
  font-weight: bold;
} 

.score-container{
  background: #bbada0 ;
  color: #eee4da;
  border-radius: 3px;
  text-align: center;
  padding: 5px 10px 0 10px;
  margin: 0;
}

.best-container {
  background: #bbada0 ;
  color:#eee4da;
  border-radius: 3px;
  text-align: center;
  padding:3px 10px 0px 10px;
  margin: 0;
}

#gap{
  height: 60%;
  width:  60%;
}

#value1{
  color: white;
  font-size: 30px;
  font-weight: bold;
}
#value2{
  color: white;
  font-size: 30px;
  font-weight: bold;
}

.game-board {
  background: #bbada0  ;
  /* border: 5px solid   #bbada0 ; */
  width:93% ;
  height: 60%;
  margin: 35px;
  margin: 2%;
  padding: 2%;
}
.below-heading {
  display: grid;
  column-gap: 110px;
  grid-template-columns: auto auto;
  margin-bottom: 0px;
  margin-right: 0px;
  margin-top: 2%;
}

.gameintro {
  border: none;
  border-radius: 5px;
  color: #776e65;
  font-weight: 700;
  font-size: 18px;
  margin-bottom:3px;
  padding: 2px;
  margin-right: 5%;
  height: 90%;
  /* border: 1px solid black; */
  align-items: center;
  margin: auto;
}

#htp {
  color: #776e65;
  font-weight: 700;
  font-size: 18px;
}
.new-game {
  background: #8f7a66;
  border: none;
  border-radius: 12px;
  color:white;
  font-weight: 700;
  font-size: 10px;
  margin-bottom:10px;
  padding: 12px;
  margin-right: 15%;
  height: 90%;
}
</style>