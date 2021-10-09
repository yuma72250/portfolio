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

const navbar = document.querySelector('.home__navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('scroll');
  } else {
    navbar.classList.remove('scroll');
  }
});


const ratio = .1;
let options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio,
};

const progressBarPercents = [97, 89, 85, 83, 70, 86];
const bars = document.querySelectorAll('.load-bar__skill');

const handleIntersectSkills = function (entries) {
  entries.forEach(entry => {
    if (entry.intersectionRatio > ratio) {
      setTimeout(() => {
        bars.forEach((el, i) => {
          el.style.transition = 'width 3s';
          el.style.width = `${progressBarPercents[i]}%`;
          for (let j = 0; j <= progressBarPercents[i]; j++) {
            setTimeout(function () {
              el.firstElementChild.textContent = j + '%';
            }, 35 * j);
          }
        });
      }, 3000)
    }
  });
};

const skillsObserver = new IntersectionObserver(handleIntersectSkills, options);
skillsObserver.observe(document.querySelector('.skills'));

const addClassToScroll = className => {
  const el = document.querySelector(className);
  const ratio = 0.1;
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio,
  };

  const handleIntersect = entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > ratio) {
        entry.target.classList.add('scroll');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(el);
};

addClassToScroll('.home');
addClassToScroll('.about');
addClassToScroll('.skills');
addClassToScroll('.projects');
addClassToScroll('.contact');
