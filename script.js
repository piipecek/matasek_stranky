let home_button = document.getElementById("home_button");
let bio_button = document.getElementById("bio_button");
let contact_button = document.getElementById("contact_button");
let music_button = document.getElementById("music_button");
let theatre_button = document.getElementById("theatre_button");
let education_button = document.getElementById("education_button");
let seminars_button = document.getElementById("seminars_button");

let home = document.getElementById("home");
let bio = document.getElementById("bio");
let contact = document.getElementById("contact");
let no_bio = document.getElementById("no_bio");
let music = document.getElementById("music");
let theatre = document.getElementById("theatre");
let education = document.getElementById("education");
let seminars = document.getElementById("seminars");

home_button.addEventListener("click", function() {
    display_sections([home]);
    activate_buttons([])
    history.pushState(null, null, "#home");
}
);

bio_button.addEventListener("click", function() {
    display_sections([bio, no_bio]);
    activate_buttons([bio_button])
    history.pushState(null, null, "#bio");
}
);

contact_button.addEventListener("click", function() {
    display_sections([contact]);
    activate_buttons([contact_button])
    history.pushState(null, null, "#contact");
}
);

music_button.addEventListener("click", function() {
    display_sections([bio, music]);
    activate_buttons([bio_button, music_button])
    history.pushState(null, null, "#music");
})

theatre_button.addEventListener("click", function() {
    display_sections([bio, theatre]);
    activate_buttons([bio_button, theatre_button])
    history.pushState(null, null, "#theatre");
})

education_button.addEventListener("click", function() {
    display_sections([bio, education]);
    activate_buttons([bio_button, education_button])
    history.pushState(null, null, "#education");
})

seminars_button.addEventListener("click", function() {
    display_sections([bio, seminars]);
    activate_buttons([bio_button, seminars_button])
    history.pushState(null, null, "#seminars");
})


// makes back button work
window.addEventListener("popstate", function(event) {
    showSectionFromHash();
})


// show the section based on the hash when the page loads
window.addEventListener("DOMContentLoaded", showSectionFromHash);


function showSectionFromHash() {
    window.scrollTo(0, 0);
    if (location.hash === "#home"){
        display_sections([home]);
    } else if (location.hash === "#contact") {
        display_sections([contact]);
        activate_buttons([contact_button]);
    } else if (location.hash === "#bio") {
        display_sections([bio, no_bio]);
        activate_buttons([bio_button]);
    } else if (location.hash === "#music") {
        display_sections([bio, music]);
        activate_buttons([bio_button, music_button]);
    } else if (location.hash === "#theatre") {
        display_sections([bio, theatre]);
        activate_buttons([bio_button, theatre_button]);
    } else if (location.hash === "#education") {
        display_sections([bio, education]);
        activate_buttons([bio_button, education_button]);
    } else if (location.hash === "#seminars") {
        display_sections([bio, seminars]);
        activate_buttons([bio_button, seminars_button]);
    } else {
        display_sections([home]);
    }
}

function activate_buttons(buttons) {
    let all_buttons = [home_button, bio_button, contact_button, music_button, theatre_button, education_button, seminars_button];
    all_buttons.forEach(button => {
        if (buttons.includes(button)) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
}

function display_sections(sections) {
    let all_sections = [home, bio, contact, no_bio, music, theatre, education, seminars];
    all_sections.forEach(section => {
        if (sections.includes(section)) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    });
}