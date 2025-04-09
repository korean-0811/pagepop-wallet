// script.js
function showSection(id) {
  document.querySelectorAll('.section').forEach(el => el.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}
function toggleLogin() {
  const popup = document.getElementById('loginPopup');
  popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
}
