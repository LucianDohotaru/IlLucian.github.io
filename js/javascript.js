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
  x[IndiceSlide-1].style.display = "block";
}