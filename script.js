const audioPlayer = document.getElementById('music-player');
const audioSource = document.getElementById('audio-source');
var audio = document.getElementById('music-player'); 



function playMusic(src) {
 var toggleButton = document.getElementById('toggleButton'); 
 var wave = document.getElementById('wave');
  audioSource.src = src;
  currentSongSrc = src;
  audioPlayer.load(); 

  if (audioPlayer.paused) { 
    audioPlayer.play();
    wave.classList.add('active1');
    toggleButton.classList.remove("bi-play-fill");
    toggleButton.classList.add("bi-pause-fill");
} else { 
    audioPlayer.pause();
    wave.classList.remove('active1');
    toggleButton.classList.add("bi-play-fill");
    toggleButton.classList.remove("bi-pause-fill");
}
}    

function search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("playlist");
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function togglePlayPause() {
    var button = document.getElementById('playPauseButton');
    var wave = document.getElementById('wave');
    if (audio.paused) { 
        audio.play();
        wave.classList.add('active1');
        button.textContent = 'Pause'; 
    } else { 
        audio.pause();
        wave.classList.remove('active1');
        button.textContent = 'Play'; 
    }
}
function toggle() {

    var toggleButton= document.getElementById('toggleButton'); 
    var wave = document.getElementById('wave');
    if (audio.paused) { 
        audio.play();
        wave.classList.add('active1');
        toggleButton.classList.remove("bi-play-fill");
        toggleButton.classList.add("bi-pause-fill");
    } else { 
        audio.pause();
        wave.classList.remove('active1');
        toggleButton.classList.add("bi-play-fill");
        toggleButton.classList.remove("bi-pause-fill");
    }
};
    var currentSongSrc = "";
    var currentSongIndex = 0;
    var songs = [
        "audio/1.mp3",
        "audio/2.mp3",
        "audio/3.mp3",
        "audio/4.mp3",
        "audio/5.mp3",
        "audio/6.mp3",
        "audio/7.mp3",
        "audio/8.mp3",
        "audio/9.mp3",
        "audio/10.mp3",
       
    ];
    // function playMusic(songUrl) {
    //     audio.src = songUrl;
    //     audio.play();
    //     currentSongSrc = songUrl;
   
    // }
    function stopSong() {
        audio.pause();
        audio.currentTime = 0;
    }
    function nextSong() {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            currentSongIndex = 0;
        }
        audio.src = songs[currentSongIndex];
        audio.play(); 
    
    }
    function prevSong() {
        currentSongIndex--;
        if (currentSongIndex >= songs.length) {
            currentSongIndex = 10;
        }
        audio.src = songs[currentSongIndex];
        audio.play(); 
    }
    function downloadSong() {
        if (currentSongSrc) {
            var link = document.createElement("a");
            link.href = currentSongSrc;
            link.download = currentSongSrc.split('/').pop(); 
            link.click();
        } else {
            alert("No song is currently playing.");
        }
    }

 window.addEventListener('DOMContentLoaded', () => {
  const audioVOL = document.getElementById('music-player');
  const volumeControl = document.getElementById('volume');

  volumeControl.addEventListener('input', function() {
    audioVOL.volume = this.value;
  });
});

window.addEventListener('DOMContentLoaded', () => {
    const seek = document.getElementById('music-player');
    const seekBar = document.getElementById('seek-bar');
   
 
    seek.addEventListener('timeupdate', function() {
      seekBar.value = audio.currentTime;
    });
  
    seekBar.addEventListener('input', function() {
      seek.currentTime = this.value;
    });
  });

  function toggleFollow() {
    var followButton = document.getElementById("followButton");
    if (followButton.innerText === "FOLLOW") {
        followButton.innerText = "FOLLOWED";
    } else {
        followButton.innerText = "FOLLOW";
    }
}
