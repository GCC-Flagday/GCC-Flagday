document.addEventListener("DOMContentLoaded", () => {
    const linksList = document.getElementById("links-list");

    const cultureLinks = [
        { text: "22 - 24 Flag Day Gallery", url: "gallery.html"},
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


  function showPopup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("popup-overlay").style.display = "block";
  }

  function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("popup-overlay").style.display = "none";
    sessionStorage.setItem("popupShown", "true");
  }

  if (!sessionStorage.getItem("popupShown")) {
    window.addEventListener("load", showPopup);
  }
