var form = document.querySelector('.contact__form');
form.addEventListener('submit', formSubmit);

function formSubmit(e) {
  e.preventDefault();

  const formData = new FormData();
  formData.append(
    'firstName',
    document.querySelector('input[name="firstName"]').value
  );
  formData.append(
    'lastName',
    document.querySelector('input[name="lastName"]').value
  );
  formData.append('email', document.querySelector('input[name="email"]').value);
  formData.append(
    'message',
    document.querySelector('textarea[name="message"]').value
  );

  fetch('https://getform.io/f/d2361585-5da2-4f5e-bdb0-9c0ca4c2929d', {
    method: 'POST',
    body: formData,
  })
    .then(response => {
        document.querySelectorAll('input').forEach(input => {
          input.value = null
        })
        document.querySelector('textarea').value = null
        document.querySelectorAll('.form__item').forEach(formItem => {
          formItem.classList.remove('valid');
        })
        document.querySelector('.message').classList.add('visible')
        document.querySelector('.valid').style.display = 'block'
        document.querySelector('.invalid').style.display = 'none'
        console.log(response)
    })
    .catch(error => {
        document.querySelector('.message').classList.add('visible')
        document.querySelector('.invalid').style.display = 'block'
        document.querySelector('.valid').style.display = 'none'
        console.log(error)
    });
}
