const tabs = document.querySelectorAll('.tab-button');
const forms = document.querySelectorAll('.auth-form');
const primaryActionButtons = document.querySelectorAll('[data-target]');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const momoForm = document.getElementById('momoForm');
const companyAccess = document.getElementById('companyAccess');

function activateTab(formId) {
  tabs.forEach((button) => {
    button.classList.toggle('active', button.dataset.form === formId);
  });

  forms.forEach((form) => {
    form.classList.toggle('active', form.id === formId);
  });
}

tabs.forEach((button) => {
  button.addEventListener('click', () => activateTab(button.dataset.form));
});

primaryActionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const formId = button.dataset.target;
    activateTab(formId);
    document.getElementById('portal')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  document.getElementById('paymentPanel')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  document.getElementById('paymentPanel')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

momoForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const button = momoForm.querySelector('button');
  const originalText = button.textContent;
  button.textContent = 'Processing payment...';
  button.disabled = true;

  setTimeout(() => {
    button.textContent = 'Payment confirmed';
    button.disabled = false;
    document.getElementById('companyAccess').classList.remove('hidden');
    document.getElementById('companyAccess').scrollIntoView({ behavior: 'smooth', block: 'start' });

    const status = document.querySelector('.status-pill.warning');
    if (status) {
      status.textContent = 'Confirmed';
      status.classList.remove('warning');
      status.classList.add('success');
    }
  }, 1200);
});
