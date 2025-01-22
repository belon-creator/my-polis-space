document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".open-frame-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = btn.closest(".features-list__item").querySelector(".backdrop");
      if (modal) {
        modal.classList.add("show-modal");
        document.body.classList.add("modal-open");
      }
    });
  });

  document.querySelectorAll(".backdrop").forEach((backdrop) => {
    backdrop.addEventListener("click", (event) => {
      if (event.target === backdrop || event.target.closest(".button")) {
        closeModal(backdrop);
      }
    });
  });

  function closeModal(modal) {
    modal.classList.remove("show-modal");
    document.body.classList.remove("modal-open");
  }

  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      document.querySelectorAll(".backdrop.show-modal").forEach(closeModal);
    }
  });
});
