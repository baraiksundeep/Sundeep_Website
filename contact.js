const messageForm = document.getElementById("message-compose");

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const fields = new FormData(messageForm);
  const name = fields.get("name").trim();
  const email = fields.get("email").trim();
  const message = fields.get("message").trim();
  if (!name || !message) {
    document.getElementById("compose-status").textContent = "Please enter your name and message.";
    return;
  }
  const subject = `${fields.get("topic")} — ${name}`;
  const body = `${message}\n\nFrom: ${name}\nEmail: ${email}`;
  window.location.href = `mailto:sundeep.baraik@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.getElementById("compose-status").textContent = "Email draft requested. If your email app did not open, use the email link to contact me directly.";
});
