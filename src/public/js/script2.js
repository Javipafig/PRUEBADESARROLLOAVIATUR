var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
 if (this.readyState == 4 && this.status == 200) {
    var respuesta = JSON.parse(xhttp.responseText);
// console.log(respuesta);
var Hoteles = respuesta.Hoteles;
var salida = '';
for(var i = 0; i < Hoteles.length; i++){
    salida += `<div class="posicion-principal"><div class="posicion"><img src="assets/images/hotels/${Hoteles[i].image}" width="200"/></div><div class="posicion-izquierda">${Hoteles[i].name} <br> ${Hoteles[i].stars} <br> ${Hoteles[i].amenities} <br> <img src="assets/icons/amenities/bathrobes.svg" width="20"></div><div class="posicion-siguiente"> <center><p>Precio por noche por habitación </p></center><br><br><div class="precio"><center><p><font size="5" style="color: orange;">ARS &nbsp;</p><strong>${Hoteles[i].price}</strong></center></font></div><br> <center><a href="verhotel.html" style="background-color: blue; color: white; padding:8px; border: 1px solid; margin: 2px; text-decoration: none;">VER HOTEL</a> </center></div></div>`;

  }
document.getElementById('Hoteles').innerHTML = salida;
  }

};
 xhttp.open("GET", "../../../data/data.json", true);
xhttp.send();