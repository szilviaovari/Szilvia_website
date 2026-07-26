const form = document.getElementById("contactForm");
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popup-message");
const popupClose = document.getElementById("popup-close");

form.addEventListener("submit", async function (event) {
  event.preventDefault(); // dont update the page
  const data = new FormData(form);
  const action = form.getAttribute("action");

  try {
    const res = await fetch(action, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      form.reset(); // reset form input
      popupMessage.innerText = "✅ Your message has been sent successfully!";
    } else {
      popupMessage.innerText = "❌ Something went wrong. Please try again.";
    }
  } catch (error) {
    popupMessage.innerText = "⚠️ Network error. Please try again later.";
  }

  popup.style.display = "flex"; // shows popup
});

// Popup closed
popupClose.addEventListener("click", () => {
  popup.style.display = "none";
});
