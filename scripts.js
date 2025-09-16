// scripts.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Alterado: mensagem mais amigável
    alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso.`);
    form.reset();
  });
});
