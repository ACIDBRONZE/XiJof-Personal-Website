const thumbnails = document.querySelectorAll('.thumbnail');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');


thumbnails.forEach(img => {
  img.addEventListener('click', function (event) {
    event.preventDefault(); 
    modal.classList.remove('hidden'); 
    modalImage.src = this.src; 
  });

  img.addEventListener('touchstart', function (event) {
    event.preventDefault(); 
    modal.classList.remove('hidden'); 
    modalImage.src = this.src;
  });
});

modal.addEventListener('click', function (event) {
  if (event.target !== modalImage) { 
    modal.classList.add('hidden'); 
  }
});


