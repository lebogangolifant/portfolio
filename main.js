// menu toggle
function toggleMenu() {
  const menuToggle = document.querySelector('.toggle');
  const navigation = document.querySelector('.nav');
  const menuToggleClose = document.querySelector('.toggleClose');
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
  menuToggleClose.classList.toggle('active');
}

