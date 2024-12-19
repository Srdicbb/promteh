document.addEventListener("DOMContentLoaded", function () {
  // Funkcija za dodavanje CSS fajlova
  function loadCSS(href) {
    // Kreiraj link element za CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;

    // Dodaj link u <head> sekciju stranice
    document.head.appendChild(link);
  }

  // Funkcija za učitavanje HTML sadržaja
  function loadHTML(filePath, targetId, cssPath) {
    fetch(filePath)
      .then((response) => response.text())
      .then((data) => {
        // Kreiraj novi div element
        const element = document.createElement("div");

        // Postavi HTML sadržaj unutar div-a
        element.innerHTML = data;

        // Dodaj novokreirani element u DOM unutar ciljanog elementa
        document.getElementById(targetId).appendChild(element);

        // Učitaj odgovarajući CSS
        loadCSS(cssPath);
      })
      .catch((error) => console.error(`Error loading ${filePath}:`, error));
  }

  // Učitavanje header-a
  loadHTML("shared/header/header.html", "header", "shared/header/header.css");

  // Učitavanje footer-a
  loadHTML("shared/footer/footer.html", "footer", "shared/footer/footer.css");
});