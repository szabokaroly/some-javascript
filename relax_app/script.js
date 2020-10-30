const app = () => {
    const song = document.querySelector(".song");
    const play = document.querySelector(".play");
    const outline = document.querySelector(".moving-outline circle");
    const video = document.querySelector(".background-video video");

    const sounds = document.querySelectorAll(".sound-list button");
    const timeDisplay = document.querySelector(".time-display");
    const timeSelect = document.querySelectorAll(".time-select button");

    const outlineLength = outline.getTotalLength();
    let defaultDuration = 600;

    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;

    sounds.forEach(sound => {
        sound.addEventListener("click", function(){
            song.src = this.getAttribute("data-sound");
            video.src = this.getAttribute("data-video");
            checkPlaying(song);
        })
    })

    play.addEventListener("click", () => {
        checkPlaying(song);
    });

    timeSelect.forEach(option => {
        option.addEventListener("click", function() {
            defaultDuration = this.getAttribute("data-time");
            timeDisplay.textContent = `${Math.floor(defaultDuration / 60)}:${Math.floor(defaultDuration % 60)}`
        });
    });

    const checkPlaying = song => {
        if (song.paused) {
            song.play();
            video.play();
            play.src = "./pics/pause.svg";
        }
        else {
            song.pause();
            video.pause();
            play.src = "./pics/play.svg";
        }
    } 

    song.ontimeupdate = () => {
        let currentTime = song.currentTime;
        let elapsedTime = defaultDuration - currentTime;
        let seconds = Math.floor(elapsedTime % 60);
        let minutes = Math.floor(elapsedTime / 60);

        let circleProgress = outlineLength - (currentTime / defaultDuration) * outlineLength;
        outline.style.strokeDashoffset = circleProgress;

        timeDisplay.textContent = `${minutes}:${seconds}`;
        
        if(currentTime >= defaultDuration) {
            song.pause();
            song.currentTime = 0;
            play.src = "./pics/play.svg";
            video.pause();
        }
    }
};

app();