var isPlaying = false;
var play_audio = function(id, audio_path){
  let ele = document.getElementById(id);
  if (ele && !isPlaying){
    isPlaying = true;
    ele.style.backgroundColor = 'orange';
    let audio = new Audio(audio_path);
    audio.addEventListener(
      'ended', 
      function(){
        ele.style.backgroundColor = 'rgba(0,0,0,0)';
        isPlaying = false;
      }
    );
    audio.addEventListener(
      'error', 
      function(){
        ele.style.backgroundColor = 'rgba(0,0,0,0)';
        isPlaying = false;
      }
    );
    audio.play();
  }
}