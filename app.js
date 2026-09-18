const forms = document.querySelectorAll('form[data-next]');
const momoForm = document.getElementById('momoForm');

forms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Saving...';
    }
    window.setTimeout(() => {
      window.location.href = form.dataset.next;
    }, 450);
  });
});

if (momoForm) {
  momoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = momoForm.querySelector('button');
    button.disabled = true;
    button.textContent = 'Processing payment...';
    window.setTimeout(() => {
      window.location.href = 'companies.html?paid=true';
    }, 900);
  });
}

document.querySelectorAll('[data-apply]').forEach((button) => {
  button.addEventListener('click', () => {
    const notice = document.getElementById('applyNotice');
    if (notice) {
      notice.textContent = `Your interest in ${button.dataset.apply} has been recorded. The team will contact you soon.`;
      notice.classList.add('visible');
    }
  });
});
