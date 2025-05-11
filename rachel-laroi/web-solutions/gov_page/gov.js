// government page js ----------------------
document.addEventListener("DOMContentLoaded", function () {
  renderGovCards(officialsData);
  renderGovLinks(govData);
  renderAgencyMenu(agenciesMenu);
  renderAgencyCards(agencyData);

  const toggleCheckbox = document.getElementById("agency-toggle");
  const agencyMenuContainer = document.querySelector(".agency-menu");

  // close agency menu -------------------------------
  document.addEventListener("click", function (e) {
    if (
      agencyMenuContainer &&
      toggleCheckbox &&
      !agencyMenuContainer.contains(e.target)
    ) {
      toggleCheckbox.checked = false;
    }

    // close gov-branch dropdowns
    document.querySelectorAll(".gov-branch.active").forEach((dropdown) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("active");
      }
    });
  });
});

// government officials cards ---------------------------------
function renderGovCards(officialsData) {
  const container = document.getElementById("gov-off");
  const ulGovCards = document.createElement("ul");
  ulGovCards.classList.add("officials");

  officialsData.forEach((official) => {
    const liOffCard = document.createElement("li");
    liOffCard.innerHTML = ` 
    <div class="gov-card-content">
      <div class="off-image-container">
        <img class="off-image" src="${official.image}" alt="${official.name} portrait" />
      </div>
      <div class="officials-text">
        <h3 class="off-title">${official.title}</h3>
        <h3 class="off-name">${official.name}</h3>
        <p class="off-subtext">${official.text}</p>
        <a href="${official.socials}" class="gov-card-link">Learn more about ${official.name} </a>
      </div>
    </div>
    `;
    ulGovCards.appendChild(liOffCard);
  });

  container.appendChild(ulGovCards);
}

// gov-branch dropdowns menu -----------------------------------------
function renderGovLinks() {
  const container = document.getElementById("gov-links-container");

  const ulElement = document.createElement("ul");
  ulElement.className = "gov-links";

  govData.forEach((branch) => {
    const liElement = document.createElement("li");
    liElement.className = "gov-branch";
    liElement.innerHTML = `${branch.branch} <i class="fa-solid fa-chevron-down"></i>`;

    const dropdownContent = document.createElement("div");
    dropdownContent.className = "dropdown-content";

    const linksList = document.createElement("ul");
    linksList.className = "branch-links";

    branch.links.forEach((link) => {
      const linkItem = document.createElement("li");
      linkItem.textContent = link;
      linksList.appendChild(linkItem);
    });

    dropdownContent.appendChild(linksList);
    liElement.appendChild(dropdownContent);

    liElement.addEventListener("click", function (e) {
      const activeDropdowns = document.querySelectorAll(".gov-branch.active");
      activeDropdowns.forEach((dropdown) => {
        if (dropdown !== this) {
          dropdown.classList.remove("active");
        }
      });
      this.classList.toggle("active");
      e.stopPropagation();
    });

    ulElement.appendChild(liElement);
  });

  container.appendChild(ulElement);
}

// agency dropdown menu ------------------------------------------------------------
function renderAgencyMenu(agenciesMenu) {
  const container = document.querySelector(".agency-links");
  container.innerHTML = "";
  const ulAgencyMenu = document.createElement("ul");

  agenciesMenu.forEach((menuItem) => {
    const agencyItem = document.createElement("li");

    const agencyHTML = `
      <input type="checkbox" id="${menuItem.id}" class="agency-checkbox">
      <label for="${menuItem.id}" class="agency-link">${menuItem.label}</label>
    `;
    agencyItem.innerHTML = agencyHTML;
    ulAgencyMenu.appendChild(agencyItem);
  });

  container.appendChild(ulAgencyMenu);

  // select agencies
  const agencyCheckboxes = document.querySelectorAll(".agency-checkbox");

  agencyCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      console.log(
        checkbox.id + " is " + (checkbox.checked ? "checked" : "unchecked")
      );
    });
  });
}

// agency data cards ------------------------------------------------
function renderAgencyCards(agencyData) {
  const container = document.getElementById("agencies-cards");

  agencyData.forEach((agency) => {
    const agencyCard = document.createElement("div");
    agencyCard.className = "program-card";
    const agencyHTML = `
      <img src="${agency.image}" alt="${agency.title}" class="program-image">
      <div class="program-category">${agency.program}</div>
      <h2 class="program-title">${agency.title}</h2>
      <p class="program-subtitle">${agency.subtitle}</p>
    `;

    agencyCard.innerHTML = agencyHTML;
    container.appendChild(agencyCard);
  });
}
