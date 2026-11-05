import { mountWhatsNew } from './releases.js';

document.addEventListener('DOMContentLoaded', () => {
  mountWhatsNew();
  document.querySelectorAll('[data-demo-action]').forEach((el) => {
    el.addEventListener('click', () => {
      const label = el.getAttribute('data-demo-action');
      const toast = document.createElement('div');
      toast.className = 'toast';
      toast.textContent = `${label}: действие подготовлено в release candidate, без отправки в production.`;
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 3200);
    });
  });
});
