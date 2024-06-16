let icon4= document.querySelector("#icon4");
let song= document.querySelector("#song");
let progress= document.querySelector("#progress");
let play= document.querySelector("#play");
let rightArrow =document.querySelector("#rightArrow");
let source =document.querySelector("source")

play.addEventListener("click",playPause);
function playPause(){
    if(icon4.classList.contains("fa-pause")){
        song.pause();
        icon4.classList.remove("fa-pause");
        icon4.classList.add("fa-play");
    }else{
        song.play(); 
        icon4.classList.add("fa-pause");
        icon4.classList.remove("fa-play");
    }
} 

if(song.play()){
    setInterval(()=>{
        progress.value= song.currentTime;
    },500)
       
};

progress.onchange= function(){
    song.play();
    song.currentTime= progress.value;
    icon4.classList.add("fa-pause");
    icon4.classList.remove("fa-play");

};
song.pause();

