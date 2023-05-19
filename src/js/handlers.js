import { USER_DATA } from './constants';
import { refs } from './refs';

export const handlerSubmit = e => {
  e.preventDefault();
  const { email, password } = e.target;

  if (refs.submitButton.textContent === 'Logout') {
    localStorage.removeItem('userData');
    refs.submitButton.textContent = 'Login';
    email.disabled = false;
    password.disabled = false;
    e.target.reset();
    return;
  }

  if (
    email.value !== USER_DATA.email ||
    password.value !== USER_DATA.password
  ) {
    alert('Goodbay');
    return;
  }
  localStorage.setItem(
    'userData',
    JSON.stringify({ email: email.value, password: password.value })
  );
  refs.submitButton.textContent = 'Logout';
  email.disabled = true;
  password.disabled = true;
};
