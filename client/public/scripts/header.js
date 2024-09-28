const header = document.querySelector("header");
header.style.display = "flex";
header.style.justifyContent = "center";

// Create the <nav> element
const nav = document.createElement("nav");
nav.style.width = "80%";

// Create the first <ul> element
const ulCompany = document.createElement("ul");

// Create and append the <li> for the company name
const liCompany = document.createElement("li");
const strongCompany = document.createElement("strong");
strongCompany.textContent = "Valorant Champions";
liCompany.appendChild(strongCompany);
ulCompany.appendChild(liCompany);

// Create the second <ul> element
const ulLinks = document.createElement("ul");

// Create and append the <li> for the home link
const liHome = document.createElement("li");
const aHome = document.createElement("a");
aHome.textContent = "Home";
aHome.href = "#";
aHome.addEventListener("click", function handleClick(event) {
  window.location = "/";
});
liHome.appendChild(aHome);
ulLinks.appendChild(liHome);

// Append both <ul> elements to the <nav>
nav.appendChild(ulCompany);
nav.appendChild(ulLinks);

// Append the <nav> to the header
header.appendChild(nav);
