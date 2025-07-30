document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for reaching out!');
});

document.getElementById('learn-more').addEventListener('click', function () {
  document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
});
