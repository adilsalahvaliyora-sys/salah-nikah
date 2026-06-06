// COUNTDOWN

function updateCountdown(){

const weddingDate =
new Date("2026-07-17T10:00:00");

const now = new Date();

const difference = weddingDate - now;

if(difference <= 0){

document.getElementById("countdown").innerHTML =
"🎉 Wedding Day Has Arrived";

return;

}

const days =
Math.floor(difference / (1000 * 60 * 60 * 24));

document.getElementById("countdown").innerHTML =
days + " Days Remaining";

}

updateCountdown();

setInterval(updateCountdown,1000);


// SCROLL ANIMATION

const hiddenElements =
document.querySelectorAll(".hidden");

const observer =
new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

hiddenElements.forEach((el)=>
observer.observe(el)
);


// NASHEED PLAYER

const playBtn =
document.getElementById("playBtn");

const nasheed =
document.getElementById("nasheed");

playBtn.addEventListener("click",()=>{

if(nasheed.paused){

nasheed.play();

playBtn.innerHTML =
"⏸ Pause Nasheed";

}else{

nasheed.pause();

playBtn.innerHTML =
"▶ Play Nasheed";

}

});