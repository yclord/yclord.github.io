<template>
  <div class="pinyin-background">
    <div class="shengmu">

    </div>
    <div class="yunmu">
      <div class="danyunmu">
        <div class="pinyin-letter" id="b" onclick="document.getElementById('b').style.backgroundColor = 'orange';let audio = new Audio('/data/pinyin/b.mp3');audio.addEventListener('ended', function(){document.getElementById('b').style.backgroundColor = 'rgba(0,0,0,0)';});audio.play()">b</div>
      </div>
      <div class="danyunmu">
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data : function(){
    return {
      v_display: "none"
    }
  },
  // define methods under the `methods` object
  methods: {
    play: function(){
      <div class="pinyin-letter" id="b" onclick="document.getElementById('b').style.backgroundColor = 'orange';let audio = new Audio('/data/pinyin/b.mp3');audio.addEventListener('ended', function(){document.getElementById('b').style.backgroundColor = 'rgba(0,0,0,0)';});audio.play()">b</div>
    },
    open_model: function(event){
      this.v_display = "block";
    },
    close_model: function(event){
      this.v_display = "none";
    }
  }
}
</script>

<style scoped>
.pinyin-background {
  /*opacity: 0.91;*/
  z-index: 1032;
}
/* background overlay layer */
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
}
/* modal window */
.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 1000px;
    max-height: 1000px;
    background: white;
    padding: 20px;
    border-radius: 10px;
    z-index: 1000;

}

/* close button */
.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
}
</style>
