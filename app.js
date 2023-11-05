const video = document.querySelector("video")
console.log(video)
const btnpaused = document.querySelector(".btn-paused")
const btnplay = document.querySelector(".btn-play")



btnpaused.setAttribute('onclick', "pausedHandler()");
btnplay.setAttribute('onclick', "PlayHandler()")


function PlayHandler(){
    video.play()
}
function pausedHandler(){
    video.pause()
}