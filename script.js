const formItem = document.querySelectorAll('.form__item');
const formInput = document.querySelectorAll('.form__input');
const formTextarea = document.querySelector('.form__textarea');

formItem.forEach(item => {
  formInput.forEach(input => {
    input.addEventListener('keyup', e => {
      if (e.target.value != '') {
        e.target.parentNode.classList.add('valid');
    } else {
        e.target.parentNode.classList.remove('valid');
      }
    });
  });
  formTextarea.addEventListener('keyup', e => {
    if (e.target.value != '') {
      e.target.parentNode.classList.add('valid');
  } else {
      e.target.parentNode.classList.remove('valid');
    }
  });
});
