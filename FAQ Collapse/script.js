const faqList = document.getElementById("faqList");

faqList.addEventListener("click", (e) => {
  const button = e.target.closest(".faq-question");
  if (!button) return;

  const isExpanded = button.getAttribute("aria-expanded") === "true";
  const answerId = button.getAttribute("aria-controls");
  const answer = document.getElementById(answerId);

  // Close all FAQs
  document.querySelectorAll(".faq-question").forEach(btn => {
    btn.setAttribute("aria-expanded", "false");
  });

  document.querySelectorAll(".faq-answer").forEach(ans => {
    ans.classList.remove("active");
  });

  // Open selected FAQ
  if (!isExpanded) {
    button.setAttribute("aria-expanded", "true");
    answer.classList.add("active");
  }
});
