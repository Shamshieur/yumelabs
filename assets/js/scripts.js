// JavaScript
document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const dropdown = document.querySelector(".dropdown");

  if (dropdownToggle && dropdown) {
    dropdownToggle.addEventListener("click", function (e) {
      e.preventDefault();
      dropdown.classList.toggle("open");
    });

    // Optional: Close when clicking outside
    document.addEventListener("click", function (e) {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("open");
      }
    });
  }

  const mainImage = document.getElementById("mainImage");
  const thumbnails = document.querySelectorAll(".thumbnail");
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");

  window.changeImage = function (element) {
    mainImage.src = element.dataset.full;
    thumbnails.forEach((thumb) => thumb.classList.remove("active"));
    element.classList.add("active");
  };

  mainImage.addEventListener("click", function () {
    modal.style.display = "flex";
    modalImg.src = this.src;
  });

  window.closeModal = function () {
    modal.style.display = "none";
  };

  modal.addEventListener("click", function (e) {
    if (e.target === this) {
      closeModal();
    }
  });
});
