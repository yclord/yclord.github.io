<template>
  <div class="pinyin-background">
      <button id="openModal" @click="open_model">拼音</button>
      
      <div id="overlay" class="overlay" :style="{display: v_display}" @click="close_model"></div>

      <div id="modal" class="modal" :style="{display: v_display}" @click="close_model">
          <span id="closeModal" class="close-btn" @click="close_model">&times;</span>
          <iframe src="/chinese/pinyin/pinyin-help" style="width: 100%; height: 450px; border: none;"></iframe>
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
