
// audioElement.play();
let Allsongs = document.querySelector(".Allsongs");
let container = document.querySelector(".container");
let sidebar = document.querySelector("#sidebar");
let songsection = document.querySelector(".songsection")
let mainbox = document.querySelector(".mainbox")
const songs = ["Har Har Shambhu Shiv Mahadeva(PagalWorld.com.se).mp3",
    "Pyaar Karte Ho Na(PagalWorld.com.se).mp3",
    "Raatan Lambiyan(PagalWorld.com.se).mp3",
    "Kesariya(PagalWorld.com.se).mp3", "Tum Hi Ho - Aashiqui 2 - 320Kbps.mp3"
    , "Tu Jaane Na - Atif Aslam - 320Kbps.mp3",
    "Mil Jaye Mujhko Agar Sath Tera.mp3", "Manike - Thank God.mp3", "Tum Mere - Darshan Raval.mp3"
];
console.log(songs.sort());
const nameofsong = ["Har Har Shambhu Shiv Mahadeva",
    "Pyaar Karte Ho Na",
    "Raatan Lambiyan",
    "Kesariya", "Tum Hi Ho", "Tu Jaane Na", "Mil Jaye Mujhko Agar Sath Tera", "Manike - Thank God. mp3",
    "Tum Mere - Darshan Raval.mp3"];
console.log(nameofsong.sort());
let html = "";
const imageofsong = ["harharsambhu.jpg", "pyaarkartehona.jpg", "ratalambiya.jpg", "kesariya.jpg",
    "tum hi ho.jpg", "tu jaane na.jpg", "mil jaye mujhko agar sath tera.jpg", "manike.jpg"
    ,"tummereho.jpg"
];
console.log(imageofsong.sort());
Allsongs.addEventListener('click', sidbar)
function sidbar() {
    nameofsong.forEach((element, index) => {
        // element.preventDefault();
        html = html + `<button class="songitem" onclick = "changevalues(${index})">
<img src="${imageofsong[index]}" alt=""><h3>${element}</h3>
</button>`
    })
    sidebar.innerHTML = `<div class="songsection">${html}
    </div>`
    html = "";
}
container.addEventListener('click', function (even) {
    // if(even.offsetX>344)
    sidebar.innerHTML = html;
})
//main coding
var rotation;
var v;
let b = 0;
let images = document.querySelector(".imageofsong");
let gif = document.querySelector("#gif");
let audioElement;
var num = 0;
audioElement = new Audio(songs[num]);
let songimg = imageofsong[num];
let headofsong = nameofsong[num];
let prevmusicbutton = document.getElementById("prevmusicbutton");
let nextmusicbutton = document.getElementById("nextmusicbutton");
prevmusicbutton.addEventListener('click', () => {
    if (num > 0)
    {
        num--;
        changevalues(num);
   }
});
nextmusicbutton.addEventListener('click', () => {
    if (num < songs.length-1)
    {
        num++;
        changevalues(num);
        }
       
    
});
function changevalues(idx)
{
    num = idx;
    audioElement.src = `${songs[idx]}`;
    audioElement.play();
    audioElement.currentTime = 0;
    images.innerHTML = `<img src="${imageofsong[idx]}" alt="" />`;
    songname.innerHTML = `<h3>${nameofsong[idx]}</h3>`; 
    gif.style.opacity = 1;
    buttonstatus.innerHTML = ` 
            <img src="pause.png" id="pausemusicbutton" alt="" />
          `
    clearInterval(rotation);
    intervalplay(1);
}
let songname = document.querySelector(".songname")
let buttonstatus = document.querySelector(".playpausebutton");
// handle pause of music
const intervalplay = (check) => {
    let count = 0;
    if (check == 1) {
        // images.setAttribute('style', `transform:rotate(${b}deg)`)
        rotation = setInterval(() => {
            count = b;
            count++;
            images.setAttribute('style', `transform:rotate(${count}deg)`)
            b = count;
        }, 100)
    }
    else {
        clearInterval(rotation);
    }
}
function playaudio() {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        intervalplay(1);
        gif.style.opacity = 1;
        buttonstatus.innerHTML = ` 
            <img src="pause.png" id="pausemusicbutton" alt="" />
          `
    }
    else {
        audioElement.pause();
        intervalplay(0);
        // clearInterval(rotate);
        gif.style.opacity = 0;
        buttonstatus.innerHTML = `
            <img src="play.png" id="playmusicbutton" alt="" />
          `
    }
}
buttonstatus.addEventListener('click', () => {
    playaudio();
})
// listen to events
    let myprogressbar = document.getElementById("myprogressbar");
    let timestart = document.querySelector(".timestart");
let timeend = document.querySelector(".timeend");
    audioElement.addEventListener('timeupdate', () => {
        progress = ((175 / audioElement.duration * audioElement.currentTime));
        //update seekbar
        if (audioElement.currentTime == audioElement.duration) {
            changevalues(++num);
        }
        myprogressbar.value = progress;
        setTimeout(() => {
        if (Math.floor((audioElement.currentTime) / 60) + Math.floor((audioElement.currentTime) % 60) == NaN)
            timestart.innerText = "0 : 0";
        else {
            timestart.innerText = `${Math.floor((audioElement.currentTime) / 60)} :  ${Math.floor((audioElement.currentTime) % 60)}`;
        }
        if (Math.floor((audioElement.duration) / 60)+Math.floor((audioElement.duration) % 60) == NaN)
            timeend.innerText = "0:0"
        else {
            timeend.innerText = `${Math.floor((audioElement.duration) / 60)} :  ${Math.floor((audioElement.duration) % 60)}`;
        }   
        },100)
    })
    myprogressbar.addEventListener('click', (event) => {
        let newprogress = event.offsetX;
        myprogressbar.value = newprogress;
        audioElement.currentTime = ((myprogressbar.value * audioElement.duration) / 175);
    })





