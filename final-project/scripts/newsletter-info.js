const newsletter = new URLSearchParams(window.location.search);
const subscribed = document.querySelector("#subscribed");

subscribed.innerHTML =
    `<h2>You are Subscribed to my Newsletter</h2>
    <p>Thank you for subscribing to my newsletter. In my newsletter
    I will send you new and exciting tools, tips and tricks as they
    get posted on the website. This way you will stay updated.</p>
    <p>The e-mail you subscribed with was: <strong>${newsletter.get("email")}</strong>`;