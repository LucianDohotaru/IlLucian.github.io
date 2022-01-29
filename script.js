var i = 0;
var txt = 'Sono Dohotaru Lucian';
var txt1 = 'Sono un ragazzo di 17 anni, che vive a bologna,nato in moldavia';
var speed = 85;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("a").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
function typeWriter2(){
    if (i < txt1.length) {
        document.getElementById("b").innerHTML += txt1.charAt(i);
        i++;
        setTimeout(typeWriter2, speed);
      }
}