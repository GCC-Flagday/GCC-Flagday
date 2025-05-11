document.addEventListener("DOMContentLoaded", () => {
    const linksList = document.getElementById("links-list");

    const cultureLinks = [
        { text: "22 - 24 Flag Day Gallery", url: "gallery.html"},
        { text: "New GCC Anthem!", url: "anthem.html" },
        { text: "GCC Flag Redesign!", url: "flag_redesign.html" },
        { text: "National Flag History", url: "flag_history.html" },
        { text: "Flag Week Calendar", url: "calendar.html" },
        { text: "Flag Week Itinerary", url: "events.html" },
        {text: "Flag Week Credits", url: "credits.html"},
        
        
    ];

    cultureLinks.forEach(link => {
        let li = document.createElement("li");
        let a = document.createElement("a");
        let p = document.createElement("p");
        a.href = link.url;
        a.textContent = link.text;
        li.appendChild(a);
        linksList.appendChild(li);
    });
});

let logo = document.querySelector(".logo"); 
let clickCount = 0;

logo.addEventListener("click", () => {
    clickCount++;

    if (clickCount === 5) {
        logo.src = "JS/images/jason.jpg"; 
        clickCount = 0;
    }
});