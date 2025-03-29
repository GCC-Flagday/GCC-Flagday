document.addEventListener("DOMContentLoaded", () => {
    const countryList = document.getElementById("country-list");
    const linksList = document.getElementById("links-list");

    const cultureLinks = [
        { text: "New GCC Anthem!", url: "anthem.html" },
        { text: "Flag Week Quiz!", url: "https://www.france.fr/" },
        { text: "3rd Option", url: "https://www.japan.travel/" }
    ];

    // Populate cultural links
    cultureLinks.forEach(link => {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = link.url;
        a.textContent = link.text;
        a.target = "_blank";
        a.style.textDecoration = "none";
        li.appendChild(a);
        linksList.appendChild(li);
    });
});
