// script.js
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const sidebar = document.getElementById('sidebar');
    const main = document.getElementById('main');
  
    menuIcon.addEventListener('click', () => {
      // Toggle class 'open' di sidebar
      sidebar.classList.toggle('open');
      // Toggle class 'shifted' di main
      main.classList.toggle('shifted');
    });
  });

  
  // script.js

// Contoh: Klik video-card menampilkan alert
document.addEventListener('DOMContentLoaded', () => {
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach((card) => {
      card.addEventListener('click', () => {
        alert('Video diklik!');
      });
    });
  });

// Ambil elemen badge
const notifCountSpan = document.getElementById('notif-count');
// Contoh jumlah notifikasi awal
let notifCount = 3;

// Fungsi untuk menambah notifikasi
function addNotification() {
  notifCount++;
  notifCountSpan.textContent = notifCount;
}

// Contoh: jika user klik lonceng, kita reset notifikasi jadi 0
const bellBtn = document.getElementById('bell-btn');
bellBtn.addEventListener('click', () => {
  notifCount = 0;
  // Jika 0, bisa dihilangkan badge atau isi dengan ""
  notifCountSpan.textContent = '';
});
  