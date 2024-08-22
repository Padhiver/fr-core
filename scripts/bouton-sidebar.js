Hooks.on("renderSidebarTab", () => {
  const buttons = document.querySelectorAll('.create-document.create-entry, .create-entry');
  buttons.forEach(button => {
    if (button.innerText.includes("Acteur")) {
      button.innerText = button.innerText.replace("Acteur", "un acteur");
    }
    if (button.innerText.includes("Scène")) {
      button.innerText = button.innerText.replace("Scène", "une scène");
    }
    if (button.innerText.includes("Objet")) {
      button.innerText = button.innerText.replace("Objet", "un objet");
    }
    if (button.innerText.includes("Journal")) {
      button.innerText = button.innerText.replace("Journal", "un journal");
    }
    if (button.innerText.includes("Table aléatoire")) {
      button.innerText = button.innerText.replace("Table aléatoire", "une table aléatoire");
    }
    if (button.innerText.includes("Ensemble de carte")) {
      button.innerText = button.innerText.replace("Ensemble de carte", "un ensemble de carte");
    }
    if (button.innerText.includes("Playlist")) {
      button.innerText = button.innerText.replace("Playlist", "une playlist");
    }
    if (button.innerText.includes("Compendium")) {
      button.innerText = button.innerText.replace("Compendium", "un compendium");
    }
  });
});
