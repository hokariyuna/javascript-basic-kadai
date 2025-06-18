const text = document.getElementById('text');
const btn = document.getElementById('button');

btn.addEventListener('click', () => {
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました'
  }, 2000);
});