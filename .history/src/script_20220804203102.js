const btns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');
const quantityInput = document.getElementById('quantity-input');
const emailInput = document.getElementById('email-input');
const payBtn = document.querySelector('pay-btn');

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    modal.classList.add('open');
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('open');
});

payBtn.addEventListener('click', () => {
  if (!quantityInput.value) {
    console.log('false');
  } else {
    console.log('true');
  }
});
