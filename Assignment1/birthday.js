<script>
    let play = document.getElementById("play");
        function playMusic() {
         let audio = new Audio("audio.mp3");
         audio.play()
      }
      play.addEventListener("click", playMusic);
</script> 