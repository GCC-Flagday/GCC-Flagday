document.addEventListener("DOMContentLoaded", () => {
    const linksList = document.getElementById("links-list");

    const cultureLinks = [
        { text: "New GCC Anthem!", url: "anthem.html" },
        { text: "GCC Flag Redesign!", url: "flag_redesign.html" },
        { text: "National Flag History", url: "flag_history.html" },
        { text: "Flag Week Calendar", url: "calendar.html" },
        { text: "Flag Week Itinerary", url: "events.html" },
        { text: "Gallery", url: "gallery.html"},
    ];

    cultureLinks.forEach(link => {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = link.url;
        a.textContent = link.text;
        li.appendChild(a);
        linksList.appendChild(li);
    });
});
