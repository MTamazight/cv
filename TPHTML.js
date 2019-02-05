window.addEventListener("scroll", function() { 
let deplacement = ((window.scrollY)*100)/(document.body.offsetHeight-window.innerHeight);
  window.scrollTo(50, 100);
document.getElementById('progress').value = 50; 
});
