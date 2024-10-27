const btnEdit = document.getElementById("btnEdit");
const btnResume = document.getElementById("btnResume");
const formSection = document.getElementById("formSection");
const form = document.getElementById("form");

formSection.style.display = "none";

btnEdit.addEventListener("click", function () {
  formSection.style.display = "block";
});

btnResume.addEventListener("click", function () {
  alert("Sorry😅");
});

document.getElementById("nameDisplay").innerText = localStorage.getItem("name");
document.getElementById("roleDisplay").innerText = localStorage.getItem("role");
document.getElementById("availabilityDisplay").innerText = localStorage.getItem("availability");
document.getElementById("ageDisplay").innerText = localStorage.getItem("age");
document.getElementById("locationDisplay").innerText = localStorage.getItem("location");
document.getElementById("yoeDisplay").innerText = localStorage.getItem("yoe");
document.getElementById("emailDisplay").innerText = localStorage.getItem("email");

function updateProfile(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  const availability = document.getElementById("availability").value;
  const age = document.getElementById("age").value;
  const location = document.getElementById("location").value;
  const yoe = document.getElementById("yoe").value;
  const email = document.getElementById("email").value;

  localStorage.setItem("name", name);
  localStorage.setItem("role", role);
  localStorage.setItem("availability", availability);
  localStorage.setItem("age", age);
  localStorage.setItem("location", location);
  localStorage.setItem("yoe", yoe);
  localStorage.setItem("email", email);

  document.getElementById("nameDisplay").innerText = localStorage.getItem("name");
  document.getElementById("roleDisplay").innerText = localStorage.getItem("role");
  document.getElementById("availabilityDisplay").innerText = localStorage.getItem("availability");
  document.getElementById("ageDisplay").innerText = localStorage.getItem("age");
  document.getElementById("locationDisplay").innerText = localStorage.getItem("location");
  document.getElementById("yoeDisplay").innerText = localStorage.getItem("yoe");
  document.getElementById("emailDisplay").innerText = localStorage.getItem("email");

  formSection.style.display = "none";
}

document.getElementById("form").addEventListener("submit", updateProfile);
