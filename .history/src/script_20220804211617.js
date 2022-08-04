const btns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');
const quantityInput = document.getElementById('quantity-input');
const quantityMsg = document.querySelector('.quantity-msg');
const emailInput = document.getElementById('email-input');
const emailMsg = document.querySelector('.email-msg');
const payBtn = document.querySelector('.pay-btn');

const regExEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regExQuantity = /^[0-9]+$/;

const reset = () => {
  quantityInput.value = '';
  emailInput.value = '';
  quantityMsg.innerHTML = '';
  emailMsg.innerHTML = '';
};

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    modal.classList.add('open');
  });
});

closeBtn.addEventListener('click', () => {
  reset();
  modal.classList.remove('open');
});

payBtn.addEventListener('click', () => {
  let flat = false;
  if (!quantityInput.value || quantityInput.value === '0') {
    quantityMsg.innerHTML = `<span class="danger">Enter a number greater than 0, please!</span>`;
  } else if (!regExQuantity.test(quantityInput.value)) {
    quantityMsg.innerHTML = `<span class="danger">Value is invalid!</span>`;
  } else {
    quantityMsg.innerHTML = '';
    flat = true;
  }

  if (!emailInput.value) {
    emailMsg.innerHTML = `<span class="danger">Enter your email, please!</span>`;
    flat = false;
  } else if (!regExEmail.test(emailInput.value)) {
    emailMsg.innerHTML = '<span class="danger">Your email is invalid!</span>';
    flat = false;
  } else {
    emailMsg.innerHTML = '';
  }

  if (flat) {
    modal.classList.remove('open');
    setTimeout(alert('You have successfully ordered'), 500);

    reset();
  }
});
