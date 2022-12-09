<template>
  <div class="main-container"> 
     <GameBoard />
     <!-- <span></span> -->
     <div id="gap"></div>
     <div class="below-gameboard">
       <p class="about-game" id="link-htp">
           HOW TO PLAY: Use your arrow keys to move the tiles. Tiles with the same number merge into one when they touch.
          Add them up to reach 2048!
          <br>
          <a href="#htp">Start Playing</a>
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
 },
 data() {
    return {
    };
  },
  methods: {
  
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  margin: 0;
  padding: 0;
}
 
.main-container {
  width: 500px;
  font-family:  Arial; 
  font-size: 18px;
  margin: 35px  auto 0 auto;
}

#gap{
  margin: 80%;
  width: auto;
}
</style>