let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');

let timer;
let autoplay = 0; 

let index_no =0;
let playing_song = false;

let track = document.createElement('audio');


let All_song = [
    {
        name: "Do It Again",
        path: "music/song1.mp3",
        img: "img/bg.jpg",
        singer: "Elevation Worship"
    },

    {
        name: "The Blessing",
        path: "music/song2.mp3",
        img: "img/bg1.jpg",
        singer: "Elevation Worship"
    },

    {
        name: "Million Little Miracles",
        path: "music/song3.mp3",
        img: "img/img2.jpg",
        singer: "Elevation Worship"
    },
];

function load_track(index_no){
    track.src = All_song[index_no].path;
    title.innerHTML = All_song[index_no].name;
    track.image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
}

load_track(index_no);