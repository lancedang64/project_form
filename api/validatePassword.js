const password = document.getElementById('password');
const error = document.querySelector('#password + span.error');

function validatePassword(e) {
  password.setCustomValidity('Password is not strong enough');
  if (isStrong(password.value)) {
    password.setCustomValidity('');
  }
  if (!password.validity.valid) {
    showPasswordError();
    return;
  } else {
    error.textContent = '';
    error.className = '';
  }
}

function showPasswordError() {
  if (password.validity.valueMissing) {
    error.textContent = 'You need to enter a password';
  } else if (password.validity.tooShort) {
    error.textContent = `Password should be at least ${password.minLength} to ${password.maxLength} characters; you entered ${password.value.length}.`;
  } else if (!isStrong(password.value)) {
    error.textContent = `Password is not strong enough. Need at least 1 uppercase, 1 lowercase letter, 1 number and 1 special character`;
  }
  error.className = 'error active';
}

function isStrong(password) {
  let hasUpperCase = /[A-Z]/.test(password);
  let hasLowerCase = /[a-z]/.test(password);
  let hasNumbers = /\d/.test(password);
  let hasNonalphas = /\W/.test(password);
  return hasUpperCase + hasLowerCase + hasNumbers + hasNonalphas === 4;
}

export { validatePassword, showPasswordError };
