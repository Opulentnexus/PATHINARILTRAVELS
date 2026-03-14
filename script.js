document.addEventListener("DOMContentLoaded", function () {

  /* ===============================
     PACKAGE TOGGLE BUTTON
  =============================== */
  const buttons = document.querySelectorAll(".toggle-btn");

  buttons.forEach(function (button) {

    button.addEventListener("click", function () {

      const allLists = document.querySelectorAll(".package-list");
      const currentList = this.closest(".service-category")
                              .querySelector(".package-list");

      allLists.forEach(list => {
        if (list !== currentList) {
          list.classList.remove("active");

          const toggleBtn = list.closest(".service-category")
                                .querySelector(".toggle-btn");
          if (toggleBtn) toggleBtn.textContent = "View Packages";
        }
      });

      currentList.classList.toggle("active");

      this.textContent = currentList.classList.contains("active")
        ? "Hide Packages"
        : "View Packages";

    });

  });


  /* ===============================
     WHATSAPP BOOK BUTTON
  =============================== */
  document.querySelectorAll(".book-btn").forEach(button => {

    button.addEventListener("click", function () {

      const packageItem = this.closest(".package-item");
      const packageName = packageItem.querySelector("h4").innerText;

      const phoneNumber = "918547562425"; // your number
      const message = `Hello, I am interested in the package: ${packageName}`;
      const encodedMessage = encodeURIComponent(message);

      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      window.open(whatsappURL, "_blank");

    });

  });

});

document.addEventListener("DOMContentLoaded", function () {

  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav");
  const overlay = document.getElementById("overlay");

  hamburger.addEventListener("click", function () {
    nav.classList.toggle("active");
    hamburger.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", function () {
    nav.classList.remove("active");
    hamburger.classList.remove("active");
    overlay.classList.remove("active");
  });

  document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", function () {
      nav.classList.remove("active");
      hamburger.classList.remove("active");
      overlay.classList.remove("active");
    });
  });

});





  /* ===============================
     WHATSAPP BOOK BUTTON
  =============================== */
  document.querySelectorAll(".book-btn").forEach(button => {

    button.addEventListener("click", function () {

      const packageItem = this.closest(".vehicle-item");
      const packageName = packageItem.querySelector("h4").innerText;

      const phoneNumber = "918547562425"; // your number
      const message = `Hello, I am interested in the car: ${packageName}`;
      const encodedMessage = encodeURIComponent(message);

      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      window.open(whatsappURL, "_blank");

    });

  });


