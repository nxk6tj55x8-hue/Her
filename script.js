
window.onload = function(){
  document.querySelector(".preloader").style.display = "none";
}

const startBtn = document.getElementById("startBtn");
const sections = document.querySelectorAll(".hidden");

startBtn.onclick = () => {
  sections.forEach(sec => sec.style.display = "flex");
  startBtn.style.display = "none";
}

document.querySelectorAll(".bubble").forEach(bubble => {
  bubble.onclick = () => {
    alert("Exhibit confirmed. Extremely cute behavior detected.");
  }
});

let score = 0;
const gameArea = document.querySelector(".game-area");

function createCompliment(){
  const words = ["Pretty","Drama Queen","Sunshine","Trouble","Angel","Menace"];
  const div = document.createElement("div");
  div.classList.add("falling");
  div.innerText = words[Math.floor(Math.random()*words.length)];
  div.style.left = Math.random()*80 + "%";
  div.onclick = () => {
    score++;
    document.getElementById("score").innerText = score;
    div.remove();
  }
  gameArea.appendChild(div);
  setTimeout(()=>div.remove(),4000);
}

setInterval(createCompliment,1000);

const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("bgMusic");

musicBtn.onclick = () => {
  if(music.paused){
    music.play();
    musicBtn.innerText = "⏸ Pause Music";
  } else {
    music.pause();
    musicBtn.innerText = "▶ Play Music";
  }
}
