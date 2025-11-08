// Get the element of the button and the body
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');

// If there is stored preference, apply it
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  toggleBtn.textContent = '🌙 Mode Gelap';
} else {
  toggleBtn.textContent = '🌞 Mode Terang';
}

// event listener for button
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // check current mode
  if (body.classList.contains('dark-mode')) {
    toggleBtn.textContent = '🌙 Mode Gelap';
    localStorage.setItem('theme', 'dark'); // Save preferensi
  } else {
    toggleBtn.textContent = '🌞 Mode Terang';
    localStorage.setItem('theme', 'light'); // Save preferensi
  }
});
