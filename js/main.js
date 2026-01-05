document.getElementById("highlight").style.backgroundColor = "rgb(99, 14, 14)";

// Colosseum
const coloElement = document.getElementById("colo");
if (coloElement) {
    coloElement.onclick = () => {
        window.location.href = "Colosseum.html";
    };
}

// Baalbek
const baalbekElement = document.getElementById("baalbek");
if (baalbekElement) {
    baalbekElement.onclick = () => {
        window.location.href = "Baalbek Temple.html";
    };
}

// Rock
const rockElement = document.getElementById("rock");
if (rockElement) {
    rockElement.onclick = () => {
        window.location.href = "Raouché Rocks.html";
    };
}

// Eiffel Tower
const eiffelElement = document.getElementById("eiffel");
if (eiffelElement) {
    eiffelElement.onclick = () => {
        window.location.href = "Eiffel Tower.html";
    };
}


const statueElement = document.getElementById("statue");
if (statueElement) {
    statueElement.onclick = () => {
        window.location.href = "Statue of Liberty.html";
    };
}

const tokyoElement = document.getElementById("tokyo");
if (tokyoElement) {
    tokyoElement.onclick = () => {
        window.location.href = "Fushimi Inari Shrine.html";
    };
}

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

