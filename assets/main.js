// GREEN
let greenbuttons=document.querySelectorAll(".green")
let greensounds=["./P5 Sounds/Waterfall.mp3", "./P5 Sounds/river.mp3", "./P5 Sounds/ocean.mp3"]

let greenaudio=[]
greensounds.forEach(sound => {
    greenaudio.push (new Audio(sound))
});
greenbuttons.forEach((button, i) => {
    button.addEventListener("click", () => {
        playmusic(greenaudio, i, button)
    });
  });

let greenslider=document.querySelectorAll(".greenslider")
greenslider.forEach((slider, i) => {
    slider.addEventListener("change", function() {
    console.log(slider.value)
    greenaudio[i].volume=slider.value/10
    }, false);
  });


// WHITE
  let whitebuttons=document.querySelectorAll(".white")
let whitesounds=["./P5 Sounds/air con.mp3", "./P5 Sounds/room static.mp3", "./P5 Sounds/fan.mp3"]
let whitechecks=[true,true,true]
let whiteaudio=[]

whitesounds.forEach(sound => {
    whiteaudio.push(new Audio(sound))
});
whitebuttons.forEach((button, i) => {
    button.addEventListener("click", () => {
        playmusic(whiteaudio, i, button)
    });
  });

  let whiteslider=document.querySelectorAll(".whiteslider")
  whiteslider.forEach((slider, i) => {
    slider.addEventListener("change", function() {
    console.log(slider.value)
    whiteaudio[i].volume=slider.value/10
    }, false);
  });
  
// BROWN
let brownbuttons=document.querySelectorAll(".brown")
let brownsounds=["./P5 Sounds/0howling wind.mp3", "./P5 Sounds/shower-35087.mp3", "./P5 Sounds/natural-thunder-113219.mp3"]
let brownchecks=[true,true,true]
let brownaudio=[]
brownsounds.forEach(sound => {
    brownaudio.push (new Audio(sound))
});
brownbuttons.forEach((button, i) => {
    button.addEventListener("click", () => {
        playmusic(brownaudio, i, button)
    });
  });


let brownslider=document.querySelectorAll(".brownslider")
brownslider.forEach((slider, i) => {
    slider.addEventListener("change", function() {
    console.log(slider.value)
    brownaudio[i].volume=slider.value/10
    }, false);
  });

function playmusic(array, i, element){
    audio=array[i]
    if(!audio.paused) { /* Check if it's not paused */
        audio.pause();  /* To pause the audio */
        audio.currentTime = 0;  /* To reset the time back to 0 */
        element.style.backgroundColor="rgba(255, 255, 255, 0.236)"
        element.classList.remove("clicked")
    }


    else {
        audio.play();  /* To make it play again */
        element.style.borderColor="white"
        element.classList.add("clicked")
    }
}

function pausemusic(array, i, element){
  audio=array[i]
  if(!audio.paused) { /* Check if it's not paused */
      audio.pause();  /* To pause the audio */
      audio.currentTime = 0;  /* To reset the time back to 0 */
      element.style.backgroundColor="rgba(255, 255, 255, 0.236)"
      element.classList.remove("clicked")
      element.classList.add("clicked2")
  }
  else if(element.classList.contains("clicked") || element.classList.contains("clicked2")){
    audio.play();  /* To make it play again */
    element.style.borderColor="#0FE07C"
}
}


// PINK
let pinkbuttons=document.querySelectorAll(".pink")
let pinksounds=["./P5 Sounds/rusting leaves.mp3", "./P5 Sounds/soft rain.mp3", "./P5 Sounds/0crickets.mp3"]
let pinkchecks=[true,true,true]
let pinkaudio=[]
pinksounds.forEach(sound => {
    pinkaudio.push (new Audio(sound))
});
pinkbuttons.forEach((button, i) => {
    button.addEventListener("click", () => {
        playmusic(pinkaudio, i, button)
    });
  });

  let pinkslider=document.querySelectorAll(".pinkslider")
pinkslider.forEach((slider, i) => {
    slider.addEventListener("change", function() {
    console.log(slider.value)
   pinkaudio[i].volume=slider.value/10
    }, false);
  });



// REFRESH\
document.querySelector(".refresh").addEventListener("click", function(){
    window.location.reload();
    })

// PAUSE/PLAY\
document.querySelector(".pause").addEventListener("click", function(){
    greenbuttons.forEach((button, i) => {
      pausemusic(greenaudio, i, button)
    });
    pinkbuttons.forEach((button, i) => {
      pausemusic(pinkaudio, i, button)
    });
    whitebuttons.forEach((button, i) => {
      pausemusic(whiteaudio, i, button)
    });
    brownbuttons.forEach((button, i) => {
      pausemusic(brownaudio, i, button)
    });
  })