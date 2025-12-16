
  const features = document.querySelectorAll(".feature");
  const modals = document.querySelectorAll(".modal");
  const closes = document.querySelectorAll(".close");

  features.forEach(feature => {
    feature.addEventListener("click", () => {
      const modalId = feature.dataset.modal;
      document.getElementById(modalId).style.display = "flex";
    });
  });

  closes.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.closest(".modal").style.display = "none";
    });
  });

  window.addEventListener("click", e => {
    modals.forEach(modal => {
      if (e.target === modal) modal.style.display = "none";
    });
  });

document.body.style.overflow = "hidden";

