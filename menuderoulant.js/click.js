// Obtenir le bouton et le menu
var menuButton = document.getElementById("menuButton");
var dropdownMenu = document.getElementById("dropdownMenu");

// Ajouter un écouteur d'événement au bouton pour ouvrir/fermer le menu
menuButton.addEventListener("click", function () {
  dropdownMenu.classList.toggle("show");
});

// Fermer le menu si l'utilisateur clique en dehors de celui-ci
window.onclick = function (event) {
  if (!event.target.matches(".menu-button")) {
    if (dropdownMenu.classList.contains("show")) {
      dropdownMenu.classList.remove("show");
    }
  }
};
