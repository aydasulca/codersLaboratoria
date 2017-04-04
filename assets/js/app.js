var codersChile = document.getElementById('4-chile');
var codersLima5 = document.getElementById('5-lima');
var codersLima6 = document.getElementById('6-lima');

var opciones = document.getElementById('opciones');
opciones.onchange = function(){
    if (opciones.value == "todas") {
      codersChile.style.display = "block";
      codersLima6.style.display = "block";
      codersLima5.style.display = "block";
    }
    if(opciones.value == "codersChile"){
      codersChile.style.display = "block";
      codersLima6.style.display = "none";
      codersLima5.style.display = "none";
    }
    if(opciones.value == "codersLima5"){
        codersChile.style.display = "none";
        codersLima6.style.display = "none";
        codersLima5.style.display = "block";
    }
    if(opciones.value == "codersLima6"){
        codersChile.style.display = "none";
        codersLima6.style.display = "block";
        codersLima5.style.display = "none";
      }
    }

  /*
  var codersChile = document.getElementsByClassName('4-chile');
  var codersLima5 = document.getElementsByClassName('5-lima');
  var codersLima6 = document.getElementsByClassName('6-lima');

  if(opciones.value == "codersChile"){
    for(var i =0; i < codersChile.length; i++){
      codersChile[i].style.display = "block";
      codersLima6[i].style.display = "none";
      codersLima5[i].style.display = "none";
    }
  }
  if(opciones.value == "codersLima5"){
    for(var j = 0; j < codersLima5.length; j++){
      codersChile[j].style.display = "none";
      codersLima6[j].style.display = "none";
      codersLima5[j].style.display = "block";
    }
  }
  if(opciones.value == "codersLima6"){
    for(var k = 1; k < codersLima6.length; k++){
      codersChile[k].style.display = "none";
      codersLima6[k].style.display = "block";
      codersLima5[k].style.display = "none";    }
  }

  */
