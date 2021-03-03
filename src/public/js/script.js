var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
 if (this.readyState == 4 && this.status == 200) {
    var respuesta = JSON.parse(xhttp.responseText);
// console.log(respuesta);
var Hoteles = respuesta.Hoteles;
    
 }

    const formulario = document.querySelector('#formulario');
    const boton = document.querySelector('#boton');
    const resultado = document.querySelector('#resultado');
    const filtrar = ()=>{
    resultado.innerHTML = '';
      //  console.log(formulario.value);
      const texto = formulario.value.toLowerCase();
    for(let Hotel of Hoteles){
        let name = Hotel.name.toLowerCase(); 
        if(name.indexOf(texto) !== -1){
            resultado.innerHTML += `
            <li><div class="principal"><img src="assets/images/hotels/${Hotel.image}" width="200" style=""/></div><div class="posicion-i"><font size="5" style="color:blue;">${Hotel.name}</font><br> ${Hotel.stars} <br> ${Hotel.amenities}</div><div class="posicion-f"><center><p style="color:gray; padding:8px;">Precio por noche por habitación </p></center><br><center><p><font size="5" style="color: orange;">ARS &nbsp;</p><strong>${Hotel.price}</strong></center></font><br> <center><a href="verhotel.html" style="background-color: blue; color: white; padding:8px 20px; border: 1px solid; border-radius:4px; margin: 2px; text-decoration: none;">VER HOTEL</a> </center></div></li>
            `
        }
    }
        if(resultado.innerHTML === ''){
            resultado.innerHTML += `
            <li>Hotel no se encuentra..</li>
            `
        }
}

boton.addEventListener('click', filtrar)
formulario.addEventListener('keyup', filtrar)

filtrar();
};
 xhttp.open("GET", "data/data.json", true);
xhttp.send();