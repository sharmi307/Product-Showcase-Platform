
const filterButtons = document.querySelectorAll(".filter");
const productCards = document.querySelectorAll(".product-card");
const noProducts = document.getElementById("noProducts");

// Product category filters
filterButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    const category = button.dataset.category;
    let visibleCount = 0;

    filterButtons.forEach(function(item) {
      item.classList.remove("active");
    });

    button.classList.add("active");

    productCards.forEach(function(card) {
      const matches =
        category === "all" ||
        card.dataset.category === category;

      card.classList.toggle("hidden", !matches);

      if (matches) {
        visibleCount++;
      }
    });

    noProducts.classList.toggle("hidden", visibleCount > 0);
  });
});

// Product details modal
const modal = document.getElementById("productModal");
const modalTitle = document.getElementById("modalTitle");
const modalPrice = document.getElementById("modalPrice");
const modalDescription =
  document.getElementById("modalDescription");

function closeModal() {
  modal.classList.add("hidden");
}

document.querySelectorAll(".details-btn").forEach(function(button) {
  button.addEventListener("click", function() {
    modalTitle.textContent = button.dataset.name;
    modalPrice.textContent = button.dataset.price;
    modalDescription.textContent = button.dataset.description;

    modal.classList.remove("hidden");
    document.getElementById("closeModal").focus();
  });
});

document.getElementById("closeModal")
  .addEventListener("click", closeModal);

document.getElementById("modalCloseButton")
  .addEventListener("click", closeModal);

// Close modal when clicking outside its content
modal.addEventListener("click", function(event) {
  if (event.target === modal) {
    closeModal();
  }
});

// Close modal using Escape key
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

// Contact form demo
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    formMessage.textContent = "Please fill in all fields.";
    return;
  }

  formMessage.textContent =
    "Thank you, " + name +
    "! Your demo message has been checked successfully.";

  contactForm.reset();
});
