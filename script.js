// ====================
// Part 1: Event Handling
// ====================

// Toggle dark mode
const toggleBtn = document.getElementById("toggle-theme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// ====================
// Part 2: Interactive Elements
// ====================

// Counter game
let counter = 0;
const counterValue = document.getElementById("counter-value");
document.getElementById("increment-btn").addEventListener("click", () => {
  counter++;
  counterValue.textContent = counter;
});
document.getElementById("reset-btn").addEventListener("click", () => {
  counter = 0;
  counterValue.textContent = counter;
});

// FAQ section (toggle answers)
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// ====================
// Part 3: Form Validation
// ====================

const form = document.getElementById("register-form");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent page reload
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  let errors = [];

  // Name validation
  if (name.length < 3) {
    errors.push("Name must be at least 3 characters.");
  }

  // Email validation (regex for simple check)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    errors.push("Enter a valid email address.");
  }

  // Password validation
  if (password.length < 6) {
    errors.push("Password must be at least 6 characters.");
  }

  // Show messages
  if (errors.length > 0) {
    formMessage.textContent = errors.join(" ");
    formMessage.className = "error";
  } else {
    formMessage.textContent = "✅ Form submitted successfully!";
    formMessage.className = "success";
    form.reset();
  }
});

