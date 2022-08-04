const btns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    modal.classList.add('open');
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('open');
});
