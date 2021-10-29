var list = document.querySelectorAll("li");
var footerImg = document.querySelector("#footer-img");
var musicImage = document.querySelector("#music-img");
var showActive = document.getElementsByClassName("music-list")[0];
var allAudios = document.querySelectorAll("audio");
var playBtn = document.querySelector("#play-btn");
var pauseBtn = document.querySelector("#pause-btn");
var artistName = document.querySelector("#artist-name");
var track = document.createElement("audio");
var musicTitle = document.querySelector("#music-title");
var previousMusic = document.querySelector("#previous-btn");
var nextMusic = document.querySelector("#next-btn");
var startMin = document.querySelector("#start-min");
var startSec = document.querySelector("#start-sec");
var meter = document.querySelector("#meter");
var progress = document.querySelector("#meter");
var repeatMusic = document.querySelector("#repeat-btn");
var shuffleMusic = document.querySelector("#shuffle-btn");
var playDiv = document.querySelector("#change-name");
var isPlaying = false;
var track_index;
var finishMin = document.querySelector("#finish-min");
var progressMin = document.querySelector("#meter").min;
var progressMax = document.querySelector("#meter").max;
var footer = document.querySelector("#footer")
var control = document.querySelector(".control");
var remove = document.querySelector("#remove");
var n = 0;
var m = 0;
var t;
var f;
var volume = document.querySelector("#volume-btn");
var volumeRange = document.querySelector("#range");
var showMusicList = document.getElementById("music-list-icon");
var loveBtn = document.getElementById("love");
var getTrack;
var preloader = document.getElementById("preloader");

var repeatAgain = false;


var musicList = [

    {
        music: "songs/Ricch_Forever.mp3",
        name: "Roddy Ricch",
        title: "Ricch Forever",
        image: "images/ricch forever.jpg"
    },

    {
        music: "songs/The Box.mp3",
        name: "Roddy Ricch",
        title: "The Box",
        image: "images/the box.jpg"
    },

    {
        music: "songs/Project_Dreams.mp3",
        name: "Roddy Ricch",
        title: "Project Dreams",
        image: "images/project dreams.jpg"
    },

    {
        music: "songs/Every_Season.mp3",
        name: "Roddy Ricch",
        title: "Every Season",
        image: "images/every season.jpg"
    },

    {
        music: "songs/Late-At-Night.mp3",
        name: "Roddy Ricch",
        title: "Late At Night",
        image: "images/late at night.jpg"
    },

    {
        music: "songs/Rockstar.mp3",
        name: "Roddy Ricch",
        title: "Rockstar",
        image: "images/rockstar.jpg"
    },

    {
        music: "songs/Big-Stepper.mp3",
        name: "Roddy Ricch",
        title: "Big Stepper",
        image: "images/big stepper.jpg"
    },

    {
        music: "songs/God_s_Eyes.mp3",
        name: "Roddy Ricch",
        title: "God's Eyes",
        image: "images/gods eyes.jpg"
    },

    {
        music: "songs/Perfect_Time.mp3",
        name: "Roddy Ricch",
        title: "Perfect Time",
        image: "images/perfect time.jpg"
    },

    {
        music: "songs/Ballin.mp3",
        name: "Roddy Ricch",
        title: "Ballin",
        image: "images/Ballin.jpg"
    },

    {
        music: "songs/Wishing Well.m4a",
        name: "Juice WRLD",
        title: "Wishing Well",
        image: "images/wishing well.jpg"
    },

    {
        music: "songs/Stay High.m4a",
        name: "Juice WRLD",
        title: "Stay High",
        image: "images/stay high.jpg"
    },

    {
        music: "songs/Legends.mp3",
        name: "Juice WRLD",
        title: "Legends",
        image: "images/legend.jpg"
    },

    {
        music: "songs/Lucid Dreams.mp3",
        name: "Juice WRLD",
        title: "Lucid Dreams",
        image: "images/lucid dreams.jpg"
    },

    {
        music: "songs/All Girls Are The Same.mp3",
        name: "Juice WRLD",
        title: "All Girls Are The Same",
        image: "images/all girls are the same.jpg"
    },
    {
        music: "songs/Rich_and_Blind.mp3",
        name: "Juice WRLD",
        title: "Rich and Blind",
        image: "images/rich and blind.jpg"
    },
    {
        music: "songs/Think_Too_Much.mp3",
        name: "Juice WRLD",
        title: "Think Too Much",
        image: "images/think too much.jpg"
    },

    {
        music: "songs/Righteous.m4a",
        name: "Juice WRLD",
        title: "Righteous",
        image: "images/righteous.jpg"
    },
    {
        music: "songs/Life's a Mess.m4a",
        name: "Juice WRLD",
        title: "Life's a Mess",
        image: "images/mess.jpg"
    },
    {
        music: "songs/Fighting Demons.m4a",
        name: "Juice WRLD",
        title: "Fighting Demons",
        image: "images/fighting demons.jpeg"
    }

];

showMusicList.addEventListener("click", () => {
    showMusicList.classList.toggle("yellow");
    let getColor = window.getComputedStyle(showMusicList, null).getPropertyValue("color");
    if (getColor == "rgb(255, 255, 0)") {
        musicImage.style.display = "none";
        playDiv.style.display = "none";
        showActive.style.display = "block";
        showActive.style.marginTop = "-50%";
        showActive.style.marginLeft = "10%";
        showActive.style.width = "90%";

    } else {
        musicImage.style.display = "block";
        playDiv.style.display = "block";
        showActive.style.display = "none";
    }
})

function pauseBtnChange() {
    pauseBtn.style.display = "block";
    playBtn.style.display = "none";
}


function shuffle(num) {
    isPlaying = true;
    pauseBtnChange();
    finishMin.textContent = musicList[num].time;
    artistName.textContent = musicList[num].name;
    musicTitle.textContent = musicList[num].title;
    footerImg.src = musicList[num].image;
    musicImage.src = musicList[num].image;
    track.src = musicList[num].music;
    track.play();
    activeColor(num);
}


function musicPlay(num) {
    isPlaying = true;
    artistName.textContent = musicList[num].name;
    musicTitle.textContent = musicList[num].title;
    footerImg.src = musicList[num].image;
    musicImage.src = musicList[num].image;
    track.src = musicList[num].music;
    // getTrack = track.src;
    // alert(track.readyState)
    var s = setInterval(() => {
        // console.log(track.readyState)/
        // if (track.readyState !=="4") {
            // preloader.style.display="flex"
            // alert("loaded")
            // let getPreloader = window.getComputedStyle(preloader, null).getPropertyValue("display");
            // console.log(getPreloader)
            // getTrack = "Loaded";
            
        // } 
        
        if (track.readyState=="4") {
            alert("loaded");
            clearInterval(s);
            preloader.style.display="flex"
            
        }
    }, 100);
    // console.log(track)
    // track.play();
    activeColor(num);
}


function activeColor(num) {
    for (let i = 0; i <= list.length; i++) {
        list[num].style.color = "yellow";
        list[i].style.color = "white";
    }
}


for (let i = 0; i < list.length; i++) {

    list[i].addEventListener("click", () => {
        clearInterval(t);
        n = 0;
        startMin.textContent = n + ":";
        m = -1;
        track_index = i;
        musicPlay(i);
    })
}

// function startPlay() {
//     progressCount();
//     pauseBtnChange();
//     track.play();
// }




// if (track.readyState == 'loading'){
//     // preloader.style.display="flex";
//     alert("loading")
// } else {
    //  preloader.style.display="none";
    // alert("loaded")
    // track.addEventListener("loadeddata", () => {
    //     startPlay();
    // })
   
// }



function playBtnChange() {
    pauseBtn.style.display = "none";
    playBtn.style.display = "block";
}

var holdV, holdV2;

playBtn.addEventListener("click", () => {

    if (isPlaying == true) {
        playBtn.style.display = "none";
        pauseBtn.style.display = "block";
        track.play();
        t = setInterval(startInt, 1000);
    } else {
        alert("Please Select Any Music To Load On Deck!");
    }

})


var getCurrent;

track.addEventListener("ended", () => {

    if (getCurrent == "rgb(255, 255, 0)") {

        clearInterval(t)
        m = 0;
        n = 0;
        startMin.textContent = "0:";
        startSec.textContent = " 00"
        track.play();
        startInt();
        progressCount()

    } else {

        setTimeout(() => {
            alert("This Music has Ended, Please Select Another Music To Play!")
        }, 1000);
        clearInterval(t);
        n = 0;
        m = 0;
        startMin.textContent = "0:";
        startSec.textContent = " 00"
        playBtnChange();
    }
})


pauseBtn.addEventListener("click", () => {
    pauseBtn.style.display = "none";
    playBtn.style.display = "block";
    track.pause();
    clearInterval(t);

})

previousMusic.addEventListener("click", () => {

    if (track_index > 0) {
        clearInterval(t);
        track_index -= 1;
        m = 0;
        n = 0;
        startMin.textContent = m + ":";
        musicPlay(track_index);
    } else {
        clearInterval(t);
        m = 0;
        n = 0;
        startMin.textContent = m + ":";
        track_index = musicList.length;
        musicPlay(track_index);
    }
});


nextMusic.addEventListener("click", () => {

    if (track_index < musicList.length - 1) {
        clearInterval(t);
        m = 0;
        n = 0;
        startMin.textContent = m + ":";
        track_index += 1;
        musicPlay(track_index);
        
    } else {
        clearInterval(t)
        m = 0;
        n = 0;
        startMin.textContent = m + ":";
        index_no = 0;
        musicPlay(track_index);
    }
});

function startInt() {
    m++;
    if (m < 10) {
        startSec.textContent = "0" + m;
    } else {
        startSec.textContent = m
    }
    if (startSec.textContent == "60") {
        m = 0;
        n++;
        startMin.textContent = n + ":";
    }

    meter.value = track.currentTime;
}

function progressCount() {

    t = setInterval(startInt, 1000);
    track.addEventListener("playing", function (_event) {
        meter.min = 1;
        meter.max = _event.target.duration;
        finishMin.textContent = secToTimeFormat(_event.target.duration);

    });

    function secToTimeFormat(duration) {
        var min = Math.floor(duration / 60);
        var sec = Math.floor(duration - (min * 60));
        // console.log(sec)
        return min + ":" + sec;
    }

}

loveBtn.addEventListener("click", () => {
    loveBtn.classList.toggle("yellow");
})


repeatMusic.addEventListener("click", () => {
    repeatMusic.classList.toggle("yellow");
    getCurrent = window.getComputedStyle(repeatMusic, null).getPropertyValue("color");
    let getColor = window.getComputedStyle(repeatMusic, null).getPropertyValue("color");
})


shuffleMusic.addEventListener("click", () => {
    shuffleMusic.classList.toggle("yellow");
    let getColor = window.getComputedStyle(shuffleMusic, null).getPropertyValue("color");
    if (getColor == "rgb(255, 255, 0)") {
        randomMusic = Math.floor(Math.random() * 20);
        clearInterval(t);
        m = 0;
        n = 0;
        progressCount()
        musicPlay(randomMusic);
    }
    track.addEventListener("ended", () => {
        alert("done")
    })
})

volume.addEventListener("click", () => {
    volume.classList.toggle("yellow");
    let getColor = window.getComputedStyle(volume, null).getPropertyValue("color");
    if (getColor == "rgb(255, 255, 0)") {
        volumeRange.style.display = "block";
    } else {
        volumeRange.style.display = "none";
    }
})

volumeRange.addEventListener("change", () => {
    let volumeLevel = volumeRange.value;
    track.volume = volumeLevel / 100;
})
