const contactForm = new URLSearchParams(window.location.search);
const message = document.querySelector("#message");

message.innerHTML =
    `<h2>Thank you for your message ${contactForm.get("fullname")}</h2>
    <p>Your message is about: ${contactForm.get("about")}.</p>
    <p>I will try my best to answer your message in 1-3 days on this e-mail: <strong>${contactForm.get("email")}</strong></p>`;