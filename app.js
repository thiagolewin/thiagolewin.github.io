  // Ruta relativa al archivo JSON
  

    var rutaArchivo = 'datos.json';
    fetch(rutaArchivo)
    .then(response => {
      // Verificar si la respuesta es exitosa (status 200-299)
      if (!response.ok) {
        throw new Error('Error al cargar el archivo JSON');
      }
      // Parsear el JSON y retornar la promesa resultante
      return response.json();
    })
    .then(datos => {
      RealizarDatos(datos)
    })
    .catch(error => {
      console.error(error.message);
    });
  

const RealizarDatos = (datos)=>{
  console.log(datos)
  datos["CAFETERIA"].forEach(element => {
    let productos = ``;
    data = document.querySelector("#Cafetería")
    data = data.children[1]
    data.innerHTML += `<div class="Datos"> 
    <h3>${element[0]}</h3>
    <div class="NombrePrecio">
        ${element[1].forEach(e =>{
            productos+= `<div class="producto"><h5 class="nameProduct">${e[0]}</h5>
            <h5 class="precio">$${e[1]}</h5></div>`
        }),
        productos}
    </div>
</div>`
  });
}

  