var icount = 0;
var play_audio = function(id, audio_path){
  let ele = document.getElementById(id);
  if (ele && icount < 3){
    icount += 1;
    ele.style.backgroundColor = 'orange';
    let audio = new Audio(audio_path);
    audio.addEventListener(
      'ended', 
      function(){
        ele.style.backgroundColor = 'rgba(0,0,0,0)';
        icount -= 1;
      }
    );
    audio.addEventListener(
      'error', 
      function(){
        ele.style.backgroundColor = 'rgba(0,0,0,0)';
        icount -= 1;
      }
    );
    audio.play();
  }
}