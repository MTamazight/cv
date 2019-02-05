window.addEventListener("scroll", function() { 
let deplacement = ((window.scrollY)*100)/(document.body.offsetHeight-window.innerHeight);
document.getElementById('progress').value = deplacement; 
});