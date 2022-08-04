const btns = document.querySelectorAll('.js-buy-ticket');
console.log(btns);

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    console.log(btn);
  });
});
