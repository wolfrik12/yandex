// script.js
const participantsCarousel = document.querySelector('.participants-carousel');
let currentIndex = 0;
const participantItems = document.querySelectorAll('.participant-item');
const itemCount = participantItems.length;

function autoScrollCarousel() {
  currentIndex = (currentIndex + 1) % itemCount;
  participantsCarousel.scrollTo({
    left: currentIndex * participantItems[0].offsetWidth,
    behavior: 'smooth'
  });
}

setInterval(autoScrollCarousel, 4000);

// Optional: Adding navigation buttons for manual control
const nextButton = document.createElement('button');
nextButton.textContent = 'Next';
nextButton.className = 'carousel-button next';

const prevButton = document.createElement('button');
prevButton.textContent = 'Prev';
prevButton.className = 'carousel-button prev';

document.querySelector('.participants').appendChild(prevButton);
document.querySelector('.participants').appendChild(nextButton);

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % itemCount;
  participantsCarousel.scrollTo({
    left: currentIndex * participantItems[0].offsetWidth,
    behavior: 'smooth'
  });
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + itemCount) % itemCount;
  participantsCarousel.scrollTo({
    left: currentIndex * participantItems[0].offsetWidth,
    behavior: 'smooth'
  });
});