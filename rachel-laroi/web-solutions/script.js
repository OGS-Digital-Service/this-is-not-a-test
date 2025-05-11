//  nav scroll   -------------------------

document.addEventListener("DOMContentLoaded", function () {
  const navContainer = document.querySelector(".nav-container");
  const mobileMenu = document.querySelector(".mobile-menu-btn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navContainer.classList.add("scrolled");
    } else {
      navContainer.classList.remove("scrolled");
    }
  });

  mobileMenu.addEventListener("click", function () {
    navContainer.classList.toggle("mobile-active");
    mobileMenu.classList.toggle("active");
  });
});

//  programs dropdown menu toggle ------------------------

document.addEventListener("DOMContentLoaded", () => {
  const toggleCheckbox = document.getElementById("programs-dropdown-toggle");
  const toggleButton = document.querySelector(".programs-button");

  // show menu
  toggleButton.addEventListener("click", (e) => {
    e.preventDefault();
    toggleCheckbox.checked = !toggleCheckbox.checked;
  });

  //close menu
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".programs-menu")) {
      toggleCheckbox.checked = false;
    }
  });
});

// programs dropdown menu selections ------------------------------------------------------------
function renderProgramsMenu(programsMenuItems) {
  const container = document.querySelector(".programs-links");
  const ulProgramsMenu = document.createElement("ul");
  programsMenuItems.forEach((menuItem) => {
    const programItem = document.createElement("li");
    const programHTML = `
                <input type="checkbox" id="${menuItem.id}" class="program-checkbox">
                <label for="${menuItem.id}">${menuItem.label}</label>
            `;
    programItem.innerHTML = programHTML;
    ulProgramsMenu.appendChild(programItem);
  });
  container.appendChild(ulProgramsMenu);

  // select programs
  const programCheckboxes = document.querySelectorAll(".program-checkbox");

  programCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      console.log(
        checkbox.id + " is " + (checkbox.checked ? "checked" : "unchecked")
      );
    });
  });
}

//  programs data cards and menu  -----------------------------

document.addEventListener("DOMContentLoaded", function () {
  renderProgramsCards(programsData);
  renderProgramsMenu(programsMenu);
});

function renderProgramsCards(programItems) {
  const container = document.getElementById("program-container");

  programItems.forEach((program) => {
    const programCard = document.createElement("div");
    programCard.className = "program-card";

    const programHTML = `
            <img src="${program.image}" alt="${program.title}" class="program-image">
            <div class="program-category">${program.program}</div>
            <h2 class="program-title">${program.title}</h2>
            <p class="program-subtitle">${program.subtitle}</p>
        `;

    programCard.innerHTML = programHTML;
    container.appendChild(programCard);
  });
}

//  footer links -----------------------------

const footerItems = [
  "Accessibility",
  "Agencies",
  "App Directory",
  "Counties",
  "Disclaimer",
  "Events",
  "Language Access",
  "Privacy Policy",
  "Programs",
  "Services",
];

function renderFooter(footerItems) {
  const footerColumn = document.getElementById("footer-column-1");
  const ulElement = document.createElement("ul");
  ulElement.className = "footer-links";

  footerItems.forEach((linkItem) => {
    const listItem = document.createElement("li");
    listItem.className = "ft-link";
    listItem.textContent = linkItem;
    ulElement.appendChild(listItem);
  });

  footerColumn.appendChild(ulElement);
}

document.addEventListener("DOMContentLoaded", function () {
  renderFooter(footerItems);
});
