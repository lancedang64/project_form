const passwordConfirm = document.getElementById('password-confirm');
const password = document.getElementById('password');
const error = document.querySelector('#password-confirm + span.error');

function validateConfirm(e) {
  passwordConfirm.setCustomValidity('Password confirmation is not the same');
  if (!passwordConfirm.validity.valid) showConfirmError();
  else {
    error.textContent = '';
    error.className = 'error';
  }
}

function showConfirmError() {
  if (!isSame(passwordConfirm.value)) {
    error.textContent = `Password confirmation is not the same!`;
  }
  error.className = 'error active';
}

function isSame(value) {
  return value === password.value;
}

export { validateConfirm, showConfirmError };
