// This code for Contact Form
let contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(this);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: "a9ecaee5-c1ed-4eec-9b6c-c9bbb9569f23",
      ...data,
    }),
  })
    .then((response) => response.json())
    .then((result) => {
      const messageContainer = document.getElementById("messageContainer");
      if (result.success) {
        messageContainer.textContent = "Form submitted successfully!";
        messageContainer.className = "message success";
        document.getElementById("contactForm").reset();
      } else {
        messageContainer.textContent =
          "Form submission failed. Please try again.";
        messageContainer.className = "message error";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      const messageContainer = document.getElementById("messageContainer");
      messageContainer.textContent = "An error occurred. Please try again.";
      messageContainer.className = "message error";
    });
});
