const phoneEl = document.querySelector('#phone');
let phone;
let prefix;

phoneEl.addEventListener('keyup', () => {
  phone = phoneEl.value;
  prefix = phone.substring(0, 2);
  if (phone.length === 2) {
    prefix = phone.substring(0, 2);
    phone = `(${prefix})`;
  } else if (phone.length === 9) {
    phone = `${phone}-`;
  }
  phoneEl.value = phone;
});
