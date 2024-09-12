// Award Section
//  The Modal for Awards Section
document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("modal");
  var modalClose = document.getElementById("modal-close");

  if (modal && modalClose) {
    modalClose.addEventListener("click", function () {
      modal.style.display = "none";
    });
  }

  // Global handler for clicks
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("modal-target")) {
      var img = e.target;
      var modalImg = document.getElementById("modal-content");
      var captionText = document.getElementById("modal-caption");

      if (modalImg && captionText) {
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
      }
    }
  });
});

//  The Modal For Products Section
document.addEventListener("DOMContentLoaded", function () {
  // Get the modal and its elements
  const productModal = document.getElementById("productModal");
  const modalTitle = document.getElementById("productModalLabel");
  const modalImage = document.getElementById("modalProductImage");

  // Function to show the modal with product details
  function showModal(event) {
    const button = event.target.closest(".card-img-top"); // Find the closest image in case of nested elements
    if (button) {
      const productName = button.getAttribute("data-product-name");
      const productImage = button.getAttribute("data-product-image");

      modalTitle.textContent = productName;
      modalImage.src = productImage;

      // Show the modal
      const modal = new bootstrap.Modal(productModal);
      modal.show();
    }
  }

  // Add event listeners to all product images
  document.querySelectorAll(".card-img-top").forEach((image) => {
    image.addEventListener("click", showModal);
  });
});
