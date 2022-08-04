const btns = document.querySelectorAll('.js-buy-ticket');

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    console.log(btn);
  });
});
