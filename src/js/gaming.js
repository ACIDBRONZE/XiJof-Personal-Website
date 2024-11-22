const thumbnails = document.querySelectorAll('.thumbnail');
const modal = document.getElementById('mediaModal');
const modalImage = document.getElementById('modalImage');
const modalVideo = document.getElementById('modalVideo');
const modalVideoSource = document.getElementById('modalVideoSource');
const modalContent = document.getElementById('modalContent');


thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', function (event) {
    event.preventDefault(); 


    const videoSrc = this.dataset.video;

    if (videoSrc) {

      modalImage.classList.add('hidden'); 
      modalVideo.classList.remove('hidden'); 
      modalVideoSource.src = videoSrc;
      modalVideo.load();
      modalVideo.play();
    } else {

      modalImage.classList.remove('hidden');
      modalVideo.classList.add('hidden');
      modalImage.src = this.src;
    }


    modal.classList.remove('hidden');
  });
});


modal.addEventListener('click', function (event) {

  if (event.target !== modalImage && event.target !== modalVideo) {

    modal.classList.add('hidden');


    if (!modalImage.classList.contains('hidden')) {
      modalImage.src = ''; 
    }

    if (!modalVideo.classList.contains('hidden')) {
      modalVideo.pause(); 
      modalVideo.currentTime = 0;
    }
  }
});


modalContent.addEventListener('click', function (event) {
  event.stopPropagation();
});


let scrollContainer = document.querySelector(".clips");
let prevbtn = document.getElementById('prevbtn');
let nextbtn = document.getElementById('nextbtn');


scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});


nextbtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 900;
});


prevbtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 900;
});
