// Scroll animation logic
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.1,
  });

  elements.forEach(el => observer.observe(el));
});


const toggle = document.getElementById('billingToggle');

toggle.addEventListener('change', function () {
  const isYearly = toggle.checked;

  document.getElementById('basicPrice').innerHTML = isYearly ? "$5<span>/month</span>" : "$7<span>/month</span>";
  document.getElementById('proPrice').innerHTML = isYearly ? "$10<span>/month</span>" : "$14<span>/month</span>";
  document.getElementById('unlimitedPrice').innerHTML = isYearly ? "$20<span>/month</span>" : "$28<span>/month</span>";
});
