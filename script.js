let home_button = document.getElementById("home_button");
let bio_button = document.getElementById("bio_button");
let contact_button = document.getElementById("contact_button");

let home = document.getElementById("home");
let bio = document.getElementById("bio");
let contact = document.getElementById("contact");

home_button.addEventListener("click", function() {
    home.style.display = "block";
    bio.style.display = "none";
    contact.style.display = "none";
    bio_button.classList.remove("active");
    contact_button.classList.remove("active");
    history.pushState(null, null, "#home");
}
);

bio_button.addEventListener("click", function() {
    home.style.display = "none";
    bio.style.display = "block";
    contact.style.display = "none";
    bio_button.classList.add("active");
    contact_button.classList.remove("active");
    history.pushState(null, null, "#bio");
}
);

contact_button.addEventListener("click", function() {
    home.style.display = "none";
    bio.style.display = "none";
    contact.style.display = "block";
    contact_button.classList.add("active");
    bio_button.classList.remove("active");
    history.pushState(null, null, "#contact");
}
);

// makes back button work
window.addEventListener("popstate", function(event) {
    showSectionFromHash();
})

// makes reload work
function showSectionFromHash() {
    if (location.hash === "#contact") {
        home.style.display = "none";
        bio.style.display = "none";
        contact.style.display = "block";
    } else if (location.hash === "#bio") {
        home.style.display = "none";
        bio.style.display = "block";
        contact.style.display = "none";
    } else {
        home.style.display = "block";
        bio.style.display = "none";
        contact.style.display = "none";
    }
}

window.addEventListener("DOMContentLoaded", showSectionFromHash);