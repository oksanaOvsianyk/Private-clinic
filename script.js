// Відкриття модального вікна для форми
function openFormModal() {
  const modal = document.getElementById('formModal');
  modal.classList.add('show');
}

// Відкриття модального вікна для навігації
function openNavModal() {
  const modal = document.getElementById('navModal');
  modal.classList.add('show');
}

// Закриття модальних вікон
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove('show');
}
