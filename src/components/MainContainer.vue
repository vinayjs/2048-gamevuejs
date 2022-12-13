<template>
  <div class="main-container"> 
     <GameBoard />
     <!-- <span></span> -->
     <div id="gap"></div>
     <div class="below-gameboard">
       <p class="about-game" id="link-htp">
          <strong>HOW TO PLAY:</strong> Use your <strong>arrow keys</strong> to move the tiles. Tiles with the same number <strong>merge into one</strong> when they touch.
          Add them up to reach  <strong>2048!</strong>
          <br>
          <a id='stp' href="#htp">Start Playing</a>
       </p>
     </div>
     <hr>
     <div class="instruction">
     <p class="about-game">
       'You are playing the ' <b>orginal version of 2048.</b>
       'Try out the offcial apps for '
       <a class='yrp' href="https://itunes.apple.com/us/app/2048-by-gabriele-cirulli/id868076805" target="_blank">iOS</a>
       'and'
       <a class="yrp" href="https://play.google.com/store/apps/details?id=com.gabrielecirulli.app2048" target="_blank">Android!</a>
       'All other versions of this game are derivatives and should be used with caution.'
     </p>
     <hr>
     <p>
       Created by 
       <a class="yrp" href="http://gabrielecirulli.com" target="_blank">Gabriele Cirulli.</a>
       Based on 
       <a class="yrp" href="https://itunes.apple.com/us/app/1024!/id823499224" target="_blank">1024 by Veewo Studio.</a>
     </p>
    </div>
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
.main-container {
  width: 500px;
  font-family:  Arial; 
  font-size: 18px;
  margin: 35px  auto 0 auto;
}
@media (min-width: 280px) and (max-width: 1180px) {
.main-container{
  width: 490px;
  margin-left: 10px;
}
}

#gap{
  margin: 80%;
  width: auto;
}

.about-game {
  font-size: 18px;
  font-weight:500px;
  color: #59442e;

}

.instruction{
  color: #59442e;
}

#stp{
  color: #59442e;
  
}
.yrp{
  color: #59442e;
  font-weight: 500px ;
  
}


</style>