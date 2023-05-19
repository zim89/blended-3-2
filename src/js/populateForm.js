import { refs } from './refs';

export const populateForm = () => {
  const lsData = JSON.parse(localStorage.getItem('userData'));
  if (!lsData) {
    return;
  }
  const { email, password } = refs.form;
  email.value = lsData.email;
  password.value = lsData.password;
  email.disabled = true;
  password.disabled = true;
  refs.submitButton.textContent = 'Logout';
};
