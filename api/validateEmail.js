const email = document.getElementById('email');
const error = document.querySelector('#email + span.error');

function validateEmail(e) {
  if (!email.validity.valid) showEmailError();
  else {
    error.textContent = '';
    error.className = 'error';
  }
}

function showEmailError() {
  if (email.validity.valueMissing) {
    error.textContent = 'You need to enter an e-mail address.';
  } else if (email.validity.typeMismatch) {
    error.textContent = 'Entered value needs to be an e-mail address.';
  } else if (email.validity.tooShort) {
    error.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
  error.className = 'error active';
}

export { validateEmail , showEmailError}