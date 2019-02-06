window.addEventListener("scroll", function() { 
  var deplacement=(window.scrollY+window.innerHeight)*15/document.body.offsetHeight;
document.getElementById('progress_bar').value = deplacement; 
});
function myScroll() { 
    var progress = document.getElementById('progress_bar').value; 
    progress=progress*document.body.offsetHeight/15-window.innerHeight;
    window.scroll(0,progress) ;
}
