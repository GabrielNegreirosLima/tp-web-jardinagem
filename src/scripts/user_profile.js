const editButtonEl = document.querySelector('#edit');
const saveButtonEl = document.querySelector('#save-profile');
const inputs = document.querySelectorAll('input');

editButtonEl.addEventListener('click', () => {
  inputs.forEach((el) => {
    el.removeAttribute('disabled');
  });
  saveButtonEl.removeAttribute('disabled');
  editButtonEl.setAttribute('disabled', "''");
});
