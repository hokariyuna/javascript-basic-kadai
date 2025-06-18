const text = document.getElementById('text');

const btn = document.getElementById('button');

btn.addEventListener('click', () => {
  text.textContent = 'ボタンをクリックしました'
});