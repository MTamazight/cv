window.addEventListener("scroll", function() { 
  window.scrollY // Valeur du scroll en pixel
document.body.offsetHeight // Hauteur totale de la page en pixel
window.innerHeight // Hauteur de l'écran en pixel
let deplacement = ((window.scrollY)*100)/(document.body.offsetHeight-window.innerHeight);
  window.scrollTo(50, 100);
document.getElementById('progress').value = deplacement; 
});
