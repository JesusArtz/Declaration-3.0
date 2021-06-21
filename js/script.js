let no=document.getElementsByName('btn-no');
no.addEventListener("mouseover", function(e){
    let x = Math.round( Math.random() * 93);
    let y = Math.round( Math.random() * 93);
    no.style.left = x+"%";
    no.style.top = y+"%";
})
