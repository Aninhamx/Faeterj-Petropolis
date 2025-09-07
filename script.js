<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-next-btn');
    const prevButton = document.querySelector('.carousel-prev-btn');
    const slideWidth = slides[0].getBoundingClientRect().width;

    // Arrange slides next to each other
    const setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    };
    slides.forEach(setSlidePosition);

    const moveToSlide = (currentSlide, targetSlide) => {
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    };

    nextButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide') || slides[0];
        const nextSlide = currentSlide.nextElementSibling;

        if (nextSlide) {
            moveToSlide(currentSlide, nextSlide);
        } else {
            moveToSlide(currentSlide, slides[0]);
        }
    });

    prevButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide') || slides[0];
        const prevSlide = currentSlide.previousElementSibling;

        if (prevSlide) {
            moveToSlide(currentSlide, prevSlide);
        } else {
            moveToSlide(currentSlide, slides[slides.length - 1]);
        }
    });

    // Initialize first slide as current
    slides[0].classList.add('current-slide');
});


document.querySelectorAll('.carousel-container').forEach(container => {
  const track = container.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const prevButton = container.querySelector('.carousel-prev-btn');
  const nextButton = container.querySelector('.carousel-next-btn');

  let currentIndex = 0;

  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  });

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  });
});

// Função para montar o HTML de um depoimento
function createReviewHTML({ name, course, comment, rating }) {
  const starsSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 text-yellow-400">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>`;

  let starsHTML = '';
  for(let i = 0; i < rating; i++) starsHTML += starsSVG;

  // Iniciais do nome
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();

  return `
    <div class="rounded-lg border bg-white shadow-sm p-6">
      <div class="flex items-center space-x-1 mb-4">${starsHTML}</div>
      <p class="text-sm text-gray-600 mb-4">"${comment}"</p>
      <div class="flex items-center space-x-2">
        <div class="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
          <span class="text-xs font-medium text-blue-800">${initials}</span>
        </div>
        <div>
          <p class="text-sm font-medium">${name}</p>
          <p class="text-xs text-gray-500">${course}</p>
        </div>
      </div>
    </div>
  `;
}

const reviewsContainer = document.getElementById('reviews');
const form = document.getElementById('reviewForm');

// Carrega avaliações do localStorage e exibe na tela
function loadReviews() {
  const reviews = JSON.parse(localStorage.getItem('faeterjReviews') || '[]');
  reviewsContainer.innerHTML = reviews.map(createReviewHTML).join('');
}

// Salva nova avaliação no localStorage
function saveReview(review) {
  const reviews = JSON.parse(localStorage.getItem('faeterjReviews') || '[]');
  reviews.push(review);
  localStorage.setItem('faeterjReviews', JSON.stringify(reviews));
}

// Se não tiver avaliações no localStorage, insere 3 depoimentos iniciais (exemplo)
if (!localStorage.getItem('faeterjReviews')) {
  const initialReviews = [
    {
      name: 'Maria Silva',
      course: 'Engenharia Civil',
      comment: 'A FAETERJ me proporcionou uma formação completa. Hoje trabalho na área que sempre sonhei graças ao conhecimento adquirido aqui.',
      rating: 5
    },
    {
      name: 'João Santos',
      course: 'Sistemas de Informação',
      comment: 'Os professores são excelentes e a infraestrutura é moderna. Recomendo a FAETERJ para quem busca qualidade no ensino.',
      rating: 5
    },
    {
      name: 'Ana Costa',
      course: 'Técnico em Informática',
      comment: 'O curso técnico me deu a base necessária para ingressar rapidamente no mercado de trabalho. Muito satisfeita!',
      rating: 5
    }
  ];
  localStorage.setItem('faeterjReviews', JSON.stringify(initialReviews));
}

loadReviews();

form.addEventListener('submit', e => {
  e.preventDefault();

  const name = form.name.value.trim();
  const course = form.course.value.trim();
  const comment = form.comment.value.trim();
  const rating = form.rating.value;

  if(name && course && comment && rating) {
    const newReview = { name, course, comment, rating: Number(rating) };
    saveReview(newReview);
    loadReviews();
    form.reset();
    alert('Obrigado pela sua avaliação!');
  }
});

// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'azul-marinho': '#001f3f', // sua cor desejada
      },
    },
  },
}


=======
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-next-btn');
    const prevButton = document.querySelector('.carousel-prev-btn');
    const slideWidth = slides[0].getBoundingClientRect().width;

    const setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    };
    slides.forEach(setSlidePosition);

    const moveToSlide = (currentSlide, targetSlide) => {
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    };

    nextButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide') || slides[0];
        const nextSlide = currentSlide.nextElementSibling;

        if (nextSlide) {
            moveToSlide(currentSlide, nextSlide);
        } else {
            moveToSlide(currentSlide, slides[0]);
        }
    });

    prevButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide') || slides[0];
        const prevSlide = currentSlide.previousElementSibling;

        if (prevSlide) {
            moveToSlide(currentSlide, prevSlide);
        } else {
            moveToSlide(currentSlide, slides[slides.length - 1]);
        }
    });

    //slide
    slides[0].classList.add('current-slide');
});


document.querySelectorAll('.carousel-container').forEach(container => {
  const track = container.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const prevButton = container.querySelector('.carousel-prev-btn');
  const nextButton = container.querySelector('.carousel-next-btn');

  let currentIndex = 0;

  function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  });

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
  });
});

// função para montar o HTML 
function createReviewHTML({ name, course, comment, rating }) {
  const starsSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 text-yellow-400">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>`;

  let starsHTML = '';
  for(let i = 0; i < rating; i++) starsHTML += starsSVG;

  // iniciais do nome
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();

  return `
    <div class="rounded-lg border bg-white shadow-sm p-6">
      <div class="flex items-center space-x-1 mb-4">${starsHTML}</div>
      <p class="text-sm text-gray-600 mb-4">"${comment}"</p>
      <div class="flex items-center space-x-2">
        <div class="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
          <span class="text-xs font-medium text-blue-800">${initials}</span>
        </div>
        <div>
          <p class="text-sm font-medium">${name}</p>
          <p class="text-xs text-gray-500">${course}</p>
        </div>
      </div>
    </div>
  `;
}

const reviewsContainer = document.getElementById('reviews');
const form = document.getElementById('reviewForm');

// carrega avaliações do localStorage e exibe na tela
function loadReviews() {
  const reviews = JSON.parse(localStorage.getItem('faeterjReviews') || '[]');
  reviewsContainer.innerHTML = reviews.map(createReviewHTML).join('');
}

// salva nova avaliação no localStorage
function saveReview(review) {
  const reviews = JSON.parse(localStorage.getItem('faeterjReviews') || '[]');
  reviews.push(review);
  localStorage.setItem('faeterjReviews', JSON.stringify(reviews));
}

// se não tiver avaliações no localStorage, adc 3 depoimentos iniciais 
if (!localStorage.getItem('faeterjReviews')) {
  const initialReviews = [
    {
      name: 'Maria Silva',
      course: 'Engenharia Civil',
      comment: 'A FAETERJ me proporcionou uma formação completa. Hoje trabalho na área que sempre sonhei graças ao conhecimento adquirido aqui.',
      rating: 5
    },
    {
      name: 'João Santos',
      course: 'Sistemas de Informação',
      comment: 'Os professores são excelentes e a infraestrutura é moderna. Recomendo a FAETERJ para quem busca qualidade no ensino.',
      rating: 5
    },
    {
      name: 'Ana Costa',
      course: 'Técnico em Informática',
      comment: 'O curso técnico me deu a base necessária para ingressar rapidamente no mercado de trabalho. Muito satisfeita!',
      rating: 5
    }
  ];
  localStorage.setItem('faeterjReviews', JSON.stringify(initialReviews));
}

loadReviews();

form.addEventListener('submit', e => {
  e.preventDefault();

  const name = form.name.value.trim();
  const course = form.course.value.trim();
  const comment = form.comment.value.trim();
  const rating = form.rating.value;

  if(name && course && comment && rating) {
    const newReview = { name, course, comment, rating: Number(rating) };
    saveReview(newReview);
    loadReviews();
    form.reset();
    alert('Obrigado pela sua avaliação!');
  }
});



>>>>>>> 277f31ea95ccedae5535d6735311b0eb03f56d4d
  