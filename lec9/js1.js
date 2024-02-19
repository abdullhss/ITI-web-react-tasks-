let video = document.getElementById("video");
let speedSlider = document.getElementById("speed")
let soundSlider = document.getElementById("sound")
let timeSlider = document.getElementById("A")
let a = document.getElementById("-10")
let b = document.getElementById("-30")
let c = document.getElementById("+10")
let d = document.getElementById("+30")
function play() {
    video.play()
}
function stop() {
    video.pause()
}
function mute() {
    video.muted = "muted"
}

speedSlider.addEventListener("input" , ()=>{
    let speed = parseFloat(speedSlider.value).toFixed(1);
    video.playbackRate = speed ;
})
soundSlider.addEventListener("input", () => {
    let volume = parseFloat(soundSlider.value).toFixed(2);
    video.volume = volume;
});

timeSlider.addEventListener("input", () => {
    timeSlider.setAttribute("max", video.duration);
    let time = parseInt(timeSlider.value);
    video.currentTime = time;
        });
a.addEventListener("click", () => {
    video.currentTime -= 30;
});

b.addEventListener("click", () => {
    video.currentTime -= 10;
});

c.addEventListener("click", () => {
    video.currentTime += 10;
});

d.addEventListener("click", () => {
    video.currentTime += 30;
});

video.addEventListener("timeupdate", () => {
    timeSlider.value = video.currentTime;
})