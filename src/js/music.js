const songs = [
    {
      title: "Mahika",
      artist: "Adie (cover by Joffer Escoto)",
      albumCover: "src/img/songcover1.png",
      duration: 138, 
      url: "src/media/song1.mp3"
    },
    {
      title: "Pagsamo",
      artist: "Arthur Nery (cover by Joffer Escoto)",
      albumCover: "src/img/songcover2.png",
      duration: 230,
      url: "src/media/song2.mp3"
    },
    {
      title: "Paraluman",
      artist: "Adie (cover by Joffer Escoto) ",
      albumCover: "src/img/songcover3.png",
      duration: 321,
      url: "src/media/song3.mp3"
    },
    {
      title: "My Love Mine All Mine",
      artist: "Mitski (cover by Joffer Escoto) ",
      albumCover: "src/img/songcover4.png",
      duration: 145,
      url: "src/media/song4.mp3"
    }
  ];
  
  let currentSongIndex = 0;
  let isPlaying = false; 
  let currentTime = 0;
  
  const songTitle = document.getElementById("song-title");
  const artistName = document.getElementById("artist-name");
  const albumCover = document.getElementById("album-cover");
  const progressBar = document.getElementById("progress");
  const currentTimeDisplay = document.getElementById("current-time");
  const durationDisplay = document.getElementById("duration");
  const playPauseButton = document.getElementById("play-pause");
  const playPauseIcon = document.getElementById("play-pause-icon");
  const playPath = document.getElementById("play-path");  
  const prevButton = document.getElementById("prev-song");
  const nextButton = document.getElementById("next-song");
  
  const audioPlayer = document.getElementById("audio-player");
  
  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' + secs : secs}`;
  }
  
  function loadSong(songIndex) {
    const song = songs[songIndex];
    songTitle.innerText = song.title;
    artistName.innerText = song.artist;
    albumCover.src = song.albumCover;
    durationDisplay.innerText = formatTime(song.duration);
    progressBar.style.width = "0%";
    currentTime = 0;
    currentTimeDisplay.innerText = "0:00";
    audioPlayer.src = song.url;
    audioPlayer.load();
  }
  
  function updateProgressBar() {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = progress + "%";
    currentTimeDisplay.innerText = formatTime(Math.floor(audioPlayer.currentTime));
  }
  
  function togglePlayPause() {
    if (isPlaying) {
      audioPlayer.pause();
      playPath.setAttribute("d", "M8 5V19L19 12L8 5Z"); 
    } else {
      audioPlayer.play();
      playPath.setAttribute("d", "M6 2H9V22H6V2Z M13 2H16V22H13V2Z");
    }
    isPlaying = !isPlaying;
  }

  function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
    togglePlayPause();
  }
  
  function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audioPlayer.play();
    togglePlayPause();
  }
  
  playPauseButton.addEventListener("click", togglePlayPause);
  
  nextButton.addEventListener("click", nextSong);
  
  prevButton.addEventListener("click", prevSong);
  
  audioPlayer.addEventListener("timeupdate", updateProgressBar);
  
  audioPlayer.addEventListener("ended", nextSong);
  
  loadSong(currentSongIndex);
  