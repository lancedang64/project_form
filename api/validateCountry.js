const country = document.getElementById('country');
const error = document.querySelector('#country + span.error');

function validateCountry(e) {
  if (!country.validity.valid) showCountryError(country);
  else {
    error.textContent = '';
    error.className = 'error';
  }
}

function showCountryError() {
  if (country.validity.valueMissing) {
    error.textContent = 'You need to enter a country';
  } else if (country.validity.typeMismatch) {
    error.textContent = 'Entered value needs to be text';
  } else if (country.validity.tooShort) {
    error.textContent = `Country should be at least ${country.minLength} characters; you entered ${country.value.length}.`;
  } else if (country.validity.patternMismatch) {
    error.textContent = `Country should not contain numbers!`
  }
  error.className = 'error active';
}

export { validateCountry, showCountryError };
