import { validateEmail, showEmailError } from './api/validateEmail.js';
import { validateCountry, showCountryError } from './api/validateCountry.js';
import { validatePassword, showPasswordError } from './api/validatePassword.js';
import { validateConfirm, showConfirmError } from './api/validatePasswordConfirm.js';

const email = document.getElementById('email');
const country = document.getElementById('country');
const zipCode = document.getElementById('zip-code');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');
const form = document.getElementsByTagName('form')[0];
const inputs = [email, country, password, passwordConfirm];

email.addEventListener('input', validateEmail);
country.addEventListener('input', validateCountry);
password.addEventListener('input', validatePassword);
passwordConfirm.addEventListener('input', validateConfirm);
form.addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
  if (hasErrors()) return;
  sendDataToServer();
}

function hasErrors() {
  let hasError = false;
  inputs.forEach((input) => {
    if (!input.validity.valid) {
      showErrorFrom(input);
      hasError = true;
    }
  });
  return hasError;
}

function showErrorFrom(input) {
  if (input === email) showEmailError();
  if (input === country) showCountryError();
  if (input === password) showPasswordError();
  if (input === passwordConfirm) showConfirmError();
}

function sendDataToServer() {
  const submitted = document.createElement('div');
  submitted.textContent = 'Congrats, all inputs are valid!!! Data is sent';
  const container = document.querySelector('.form-container');
  container.appendChild(submitted);
}
