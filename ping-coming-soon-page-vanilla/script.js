const emailInput = document.querySelector('input');
const inputMsgP = document.querySelector('.input-message');
const emailValidRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (emailInput.value.match(emailValidRegex)) {
    // form.submit(); fake submit
    inputMsgP.classList.add('shown-success');
    inputMsgP.innerText = 'Thank you for subscribing!';
    emailInput.value = '';
  } else {
    emailInput.classList.add('error');
    inputMsgP.classList.add('shown-error');
    inputMsgP.innerText = 'Please provide a valid email address';
    emailInput.focus();
  }
})

emailInput.addEventListener('input', () => {
  emailInput.classList.remove('error');
  inputMsgP.classList.remove('shown-error', 'shown-success');
})