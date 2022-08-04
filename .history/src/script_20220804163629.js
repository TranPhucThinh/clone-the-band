const btns = document.querySelectorAll('.js-buy-ticket');

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelector('.modal').classList.add('open');
  });
});
