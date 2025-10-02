document.querySelectorAll(".doc-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const box = document.getElementById(targetId);

    box.classList.toggle("active");
    button.textContent = box.classList.contains("active")
      ? "Hide " + (targetId === "cv-box" ? "CV" : "Cover Letter")
      : "View " + (targetId === "cv-box" ? "CV" : "Cover Letter");
  });
});
