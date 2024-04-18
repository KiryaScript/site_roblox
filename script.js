const music = document.getElementById('music');
const wrapper = document.querySelector('.wrapper');

// Создаем анимацию
const animateText = document.createElement('div');
animateText.className = 'animate';
animateText.textContent = 'Бешеная анимация!';
wrapper.appendChild(animateText);

// Устанавливаем музыку
music.play();