window.addEventListener("scroll", function() { 
  window.scrollY // Valeur du scroll en pixel
document.body.offsetHeight // Hauteur totale de la page en pixel
window.innerHeight // Hauteur de l'écran en pixel
let deplacement = ((window.scrollY)*100)/(document.body.offsetHeight-window.innerHeight);
  window.scrollTo(50, 100);
document.getElementById('progress').value = deplacement; 
});


/*window.addEventListener("scroll", function() { 

// Calculez le déplacement ici ...
var deplacement=(window.scrollY+window.innerHeight)*15/document.body.offsetHeight;
document.getElementById('progress_bar').value = deplacement; 
});

function myScroll() {
    var progress = document.getElementById('progress_bar').value; 
    progress=progress*document.body.offsetHeight/15-window.innerHeight;
    
    
    window.scroll(0,progress) ;
}*/

