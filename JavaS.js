const images = [
    'CPU.PNG',
    'Disk.PNG',
    'Memorie.PNG',
    'Porturi.PNG',
    'Procese.PNG',
    'Servicii.PNG',
  ];
  
  let currentIndex = 0;
let slideshowInterval;

function showImage(index) {
  const imgElement = document.getElementById('slideshow-img');
  imgElement.src = images[index];
  imgElement.style.display = 'block';

const dots = document.querySelectorAll('.dot');
dots.forEach((dot, dotIndex) => {
  dot.style.backgroundColor = dotIndex === index ? '#ffb5e0' : 'white';
});
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function startSlideshow() {
  showImage(currentIndex);

  document.querySelector('.dot-container').style.display = 'block';

  slideshowInterval = setInterval(nextImage, 3000);
}

function stopSlideshow() {
  clearInterval(slideshowInterval);
}

function showSlideshowOnClick() {
  startSlideshow();
}

const dots = document.querySelectorAll('.dot');
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    showImage(currentIndex);
  });
});