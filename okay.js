const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const delay = entry.target.getAttribute('data-delay') || "0s";
      entry.target.style.transitionDelay = delay;
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.5
});

cards.forEach(card => observer.observe(card));

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(this);

    fetch(this.action, {
      method: this.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        alert("✅ Message sent successfully!");
        contactForm.reset();
      } else {
        alert("❌ Oops! Something went wrong. Please try again.");
      }
    }).catch(() => {
      alert("❌ Network error. Please check your internet connection.");
    });
  });
}