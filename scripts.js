// scripts.js
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
  
      if (!name || !email || !message) {
        alert("Por favor, preencha todos os campos.");
      } else {
        alert("Mensagem enviada com sucesso!");
        form.reset();
      }
    });
  });
  