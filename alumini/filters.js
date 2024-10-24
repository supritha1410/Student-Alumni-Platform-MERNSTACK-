const companyList = document.getElementById("companyList");
const domainList = document.getElementById("domainList");
const skillsContainer = document.getElementById("skills-container");
const searchButton = document.getElementById("searchButton");

const companies = ["Microsoft", "Google", "JPMC", "Amazon", "Facebook"]; // Replace with actual data source
const domains = ["CSE", "CSM", "CSD", "AIDS", "ECE", "MECH"]; // Replace with actual data source
const skills = ["Web development", "Python", "Competitive coding", "Java", "C++", "App development"];

// Function to create and populate company list
function createCompanyList(companyName) {
  companyList.innerHTML = ""; // Clear previous results
  const filteredCompanies = companies.filter((company) => company.toLowerCase().startsWith(companyName.toLowerCase()));
  if (filteredCompanies.length) {
    filteredCompanies.forEach((company) => {
      const listItem = document.createElement("li");
      listItem.textContent = company;
      listItem.addEventListener("click", function() {
        document.getElementById("companyNameInput").value = company;
        companyList.innerHTML = ""; // Hide list on selection
      });
      companyList.appendChild(listItem);
    });
  } else {
    companyList.innerHTML = "<li>No companies found</li>";
  }
}

// Function to create and populate domain list
function createDomainList(domainName) {
  domainList.innerHTML = ""; // Clear previous results
  const filteredDomains = domains.filter((domain) => domain.toLowerCase().startsWith(domainName.toLowerCase()));
  if (filteredDomains.length) {
    filteredDomains.forEach((domain) => {
      const listItem = document.createElement("li");
      listItem.textContent = domain;
      listItem.addEventListener("click", function() {
        document.getElementById("domain").value = domain;
        domainList.innerHTML = ""; // Hide list on selection
      });
      domainList.appendChild(listItem);
    });
  } else {
    domainList.innerHTML = "<li>No domains found</li>";
  }
}

// Function to create skill checkboxes
function createSkillCheckboxes() {
  skills.forEach((skill) => {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = skill.replace(/\s/g, ""); // Remove spaces for ID
    checkbox.value = skill;
    const label = document.createElement("label");
    label.htmlFor = checkbox.id;
    label.textContent = skill;
    skillsContainer.appendChild(checkbox);
    skillsContainer.appendChild(label);
    skillsContainer.appendChild(document.createElement("br"));
  });
}

// Event listeners
document.getElementById("companyNameInput").addEventListener("keyup", function() {
  createCompanyList(this.value);
});

document.getElementById("domain").addEventListener("keyup", function() {
  createDomainList(this.value);
});

searchButton.addEventListener("click", function() {
  // Implement your search logic here based on selected filters (company, skills, domain, experience)
  const selectedCompany = document.getElementById("companyNameInput").value;
  const selectedSkills = Array.from(document.querySelectorAll("#skills-container input[type=checkbox]:checked"))
    .map((checkbox) => checkbox.value);
  const selectedDomain = document.getElementById("domain").value;
  const selectedExperience = document.querySelector("#experience-container input[type=radio]:checked").value;

  // Replace with your actual logic to search and display alumni based on filters
  alert("Searching alumni with filters:\n" +
        "Company: " + selectedCompany + "\n" +
        "Skills: " + selectedSkills.join(", ") + "\n" +
        "Domain: " + selectedDomain + "\n" +
        "Experience: " + selectedExperience + " years");
});

// Call functions to initialize elements
createSkillCheckboxes();