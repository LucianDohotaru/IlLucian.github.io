var IndiceSlide = 1;
showDivs(IndiceSlide);

function avantiSlide(n) {
  showDivs(IndiceSlide += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {IndiceSlide = 1}
  if (n < 1) {IndiceSlide = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  //x[IndiceSlide-1].style.display = "block";
}
function muoviLogo(){
var ximg=+document.getElementById("iconGrande").style.left.substring(0, 1);
var yimg=+document.getElementById("iconGrande").style.top.substring(0, 1);
  if(ximg<1&&yimg<1){
    console.log(ximg);
    ximg=ximg+1;
    yimg=yimg+1;
    document.getElementById("iconGrande").style.left=+ximg+"vw";
    document.getElementById("iconGrande").style.top=+yimg+"vh";
    setTimeout(muoviLogo, 900);
  }else{
    console.log(ximg);
    ximg=ximg-1;
    yimg=yimg-1;
    document.getElementById("iconGrande").style.left=+ximg+"vw";
    var h=document.getElementById("iconGrande").style.top=+yimg+"vh";
    console.log(h);
    setTimeout(muoviLogo, 900);
  }
}
function buyNowWindow(){
  console.log("aaaaa");
  var a=document.getElementById("dialog").style.visibility="visible";
  console.log(a);
}
