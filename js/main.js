document.getElementById("highlight").style.backgroundColor = "rgb(99, 14, 14)";

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("gmail").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name.length < 3) {
    alert("Name is too small");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Invalid email");
    return;
  }

  if (message.length < 10) {
    alert("Message is too short");
    return;
  }
  const subject = encodeURIComponent("Feedback received");
const body = encodeURIComponent("Thank you for your feedback.");

window.location.href =
`mailto:${email}?subject=${subject}&body=${body}`;




});




document.getElementById("colo").onclick = () => {
	window.location.href = "Colosseum.html";
};
document.getElementById("baalbek").onclick = () => {
	window.location.href = "Baalbek Temple.html";
};
document.getElementById("rock").onclick = () => {
	window.location.href = "Raouché Rocks.html";
};
document.getElementById("eiffel").onclick = () => {
	window.location.href = "Eiffel Tower.html";
};
document.getElementById("statue").onclick = () => {
	window.location.href = "Statue of Liberty.html";
};
document.getElementById("tokyo").onclick = () => {
	window.location.href = "Fushimi Inari Shrine.html";
};
