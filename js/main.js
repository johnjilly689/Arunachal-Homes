document.addEventListener("DOMContentLoaded", () => {
  const mobileToggle = document.querySelector(".mobile-nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  const currentPath = window.location.pathname.split("/").pop() || "home.html";
  const pageKey = currentPath.replace(".html", "");

  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    const target = link.getAttribute("data-nav-link");
    link.classList.toggle("active", target === pageKey || (pageKey === "index" && target === "home"));
  });

  document.querySelectorAll(".filter-tag").forEach((tag) => {
    tag.addEventListener("click", () => {
      const siblings = tag.parentElement?.querySelectorAll(".filter-tag") || [];
      siblings.forEach((item) => item.classList.remove("active"));
      tag.classList.add("active");
    });
  });

  const submitButton = document.getElementById("submit-property-form");

  if (submitButton) {
    submitButton.addEventListener("click", () => {
      const whatsappNumber = "9362726852";
      const fields = {
        name: document.getElementById("owner-name")?.value?.trim() || "Not provided",
        whatsapp: document.getElementById("owner-whatsapp")?.value?.trim() || "Not provided",
        propertyName: document.getElementById("property-name")?.value?.trim() || "Not provided",
        district: document.getElementById("property-district")?.value?.trim() || "Not provided",
        village: document.getElementById("property-village")?.value?.trim() || "Not provided",
        area: document.getElementById("property-area")?.value?.trim() || "Not provided",
        rooms: document.getElementById("property-rooms")?.value?.trim() || "Not provided",
        price: document.getElementById("property-price")?.value?.trim() || "Not provided",
        sleeping: document.getElementById("property-sleeping")?.value?.trim() || "Not provided",
        meals: document.getElementById("property-meals")?.value?.trim() || "Not provided",
        special: document.getElementById("property-special")?.value?.trim() || "Not provided"
      };

      const message = [
        "Hello Arunachal Homes, I would like to list my property.",
        `Name: ${fields.name}`,
        `WhatsApp number: ${fields.whatsapp}`,
        `Property name: ${fields.propertyName}`,
        `District: ${fields.district}`,
        `Village / City: ${fields.village}`,
        `Colony / Area: ${fields.area}`,
        `Number of rooms: ${fields.rooms}`,
        `Price per night: ${fields.price}`,
        `Sleeping arrangement: ${fields.sleeping}`,
        `Meals available: ${fields.meals}`,
        `Special details: ${fields.special}`
      ].join("\n");

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    });
  }

  const contactButton = document.getElementById("submit-contact-form");

  if (contactButton) {
    contactButton.addEventListener("click", () => {
      const whatsappNumber = "9362726852";
      const fields = {
        name: document.querySelector(".inquiry-form input[type='text']")?.value?.trim() || "Not provided",
        phone: document.getElementById("contact-phone")?.value?.trim() || "Not provided",
        email: document.querySelector(".inquiry-form input[type='email']")?.value?.trim() || "Not provided",
        dates: document.querySelectorAll(".inquiry-form input[type='text']")[1]?.value?.trim() || "Not provided",
        people: document.querySelector(".inquiry-form input[type='number']")?.value?.trim() || "Not provided",
        district: document.querySelectorAll(".inquiry-form select")[0]?.value?.trim() || "Not provided",
        experience: document.querySelectorAll(".inquiry-form select")[1]?.value?.trim() || "Not provided",
        budget: document.querySelectorAll(".inquiry-form input[type='text']")[2]?.value?.trim() || "Not provided",
        places: document.querySelectorAll(".inquiry-form input[type='text']")[3]?.value?.trim() || "Not provided",
        requirements: document.querySelector(".inquiry-form textarea")?.value?.trim() || "Not provided"
      };

      const message = [
        "Hello Arunachal Homes, I would like to inquire about a homestay trip.",
        `Name: ${fields.name}`,
        `Phone / WhatsApp: ${fields.phone}`,
        `Email: ${fields.email}`,
        `Travel dates: ${fields.dates}`,
        `Number of people: ${fields.people}`,
        `Preferred district: ${fields.district}`,
        `Type of experience: ${fields.experience}`,
        `Budget per night: ${fields.budget}`,
        `Places to visit: ${fields.places}`,
        `Requirements: ${fields.requirements}`
      ].join("\n");

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    });
  }
});
