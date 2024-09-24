// // This code for Contact Form
// let contactForm = document.getElementById("contactForm");
// contactForm.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const formData = new FormData(this);
//   const data = {};
//   formData.forEach((value, key) => {
//     data[key] = value;
//   });

//   fetch("https://api.web3forms.com/submit", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify({
//       access_key: "a9ecaee5-c1ed-4eec-9b6c-c9bbb9569f23",
//       ...data,
//     }),
//   })
//     .then((response) => response.json())
//     .then((result) => {
//       const messageContainer = document.getElementById("messageContainer");
//       if (result.success) {
//         messageContainer.textContent = "Form submitted successfully!";
//         messageContainer.className = "message success";
//         document.getElementById("contactForm").reset();
//       } else {
//         messageContainer.textContent =
//           "Form submission failed. Please try again.";
//         messageContainer.className = "message error";
//       }
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//       const messageContainer = document.getElementById("messageContainer");
//       messageContainer.textContent = "An error occurred. Please try again.";
//       messageContainer.className = "message error";
//     });
// });

const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (event) {
  // Show success message immediately
  successMessage.style.display = "none"; // Hide it initially in case of resubmission

  // Handle form submission
  // Note: We do not prevent the default behavior here
  setTimeout(() => {
    // Show success message
    successMessage.style.display = "block";

    // Clear form inputs after showing success
    form.reset();

    // Hide the success message after a few seconds
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 3000);
  }, 1000); // Simulating a delay for visual effect

  // Do not prevent the default form submission
});
