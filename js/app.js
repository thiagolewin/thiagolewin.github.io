
const ham = document.getElementById("burger")
const labelHam = document.querySelector(".burger")
const menu = document.querySelector(".menu")
const searchGeneral = document.querySelector(".input")
const searchBar = document.getElementById("searchBar")
const searchBarFalso = document.getElementById("searchBarFalso")
const linkmenu = document.querySelectorAll(".linkmenu")
const flechas = document.querySelector(".flechas")
const flechaIzq = document.querySelector(".left")
const flechaDer = document.querySelector(".right")
const inputH6 = document.querySelector(".inputH6")
function searchInTextContent(elemento, textoBuscado) {
  return elemento.textContent.toLowerCase().includes(textoBuscado);
}
let cont = 0;
window.addEventListener("click",(e)=> {
  if(!(e.target.classList.contains("cerra"))) {
    ham.checked = false;
    menu.classList.remove("venir")
  }
  if(!(e.target.classList.contains("cerraInput")) && !(e.target.tagName === 'INPUT')) {
    searchGeneral.style.top= "10vh"
    inputH6.style.display = "none"
    flechas.style.display = "none"
    searchGeneral.style.position ="fixed"
  }

})
ham.addEventListener("click",(e)=> {
  menu.classList.toggle("venir")
})

window.addEventListener("scroll",()=> {
if (window.innerHeight > window.scrollY) {
  if(ham.checked) {
    ham.checked = false;
  }
  labelHam.style.display = "none"
  menu.classList.remove("venir")
} else {
  labelHam.style.display = "block"
}
})
searchBarFalso.addEventListener("focus",(e)=> {
  searchBar.focus()
  inputH6.style.display = "flex"
  flechas.style.display = "flex"
  searchGeneral.style.top= "10vh"
  searchGeneral.style.position ="fixed"
})
searchBar.addEventListener("click",(e)=> {
  inputH6.style.display = "flex"
  flechas.style.display = "flex"
  searchGeneral.style.position ="fixed"
  searchGeneral.style.top= "10vh"
})
searchBar.addEventListener("input",function inputFun(e){
  e.target.style.top= "10vh"
  cont = 0
  var aElement = document.querySelectorAll('.yellow');
  for(let i = 0;i<aElement.length;i++) {
      aElement[i].parentElement.replaceChild(document.createTextNode(aElement[i].textContent),aElement[i]);
  }
  var textoBuscado = e.target.value.toLowerCase()
  if(textoBuscado.length != 0) {

  var todosLosElementos = document.querySelectorAll(".nameProduct, h4, h2");
  var elementosCoincidentes = Array.from(todosLosElementos).filter(function(elemento) {
    return searchInTextContent(elemento, textoBuscado);
  });
  if (elementosCoincidentes.length == 0) {
    inputH6.textContent = 0 + "/" + 0
  } else {
    inputH6.textContent = cont+1 + "/" + elementosCoincidentes.length
  }
  if (elementosCoincidentes.length > 0) {
    function encontrarPadrePorTag(elemento, nombreTag) {
      let padre = elemento.parentNode;
    
      while (padre && !(padre.classList.contains("secID"))) {
        padre = padre.parentNode;
      }
    
      return padre;
    }
    var elementoPadreSection = encontrarPadrePorTag(elementosCoincidentes[cont], 'section');
    console.log(elementoPadreSection)
    var rect = elementoPadreSection.getBoundingClientRect();
    const posicionAjustada = rect.top + window.scrollY;
    console.log(rect.top + window.scrollY)
    window.scrollTo({
      top: posicionAjustada,
      behavior: 'smooth' 
    });
  }
    const highlightedText = elementosCoincidentes[cont].textContent.replace(
      new RegExp(textoBuscado, 'gi'),
      match => `<span class="yellow">${match}</span>`
  );

  // Mostrar el texto resaltado
  elementosCoincidentes[cont].innerHTML = highlightedText;

}
})
flechaIzq.addEventListener("click",()=> {
  var aElement = document.querySelectorAll('.yellow');
  for(let i = 0;i<aElement.length;i++) {
      aElement[i].parentElement.replaceChild(document.createTextNode(aElement[i].textContent),aElement[i]);
  }
  cont-=1
  if(cont == -1) {
    cont = 0
  }
  var todosLosElementos = document.querySelectorAll(".nameProduct, h4, h2");
  var elementosCoincidentes = Array.from(todosLosElementos).filter(function(elemento) {
    return searchInTextContent(elemento, searchBar.value);
  });
  if (elementosCoincidentes.length == 0) {
    inputH6.textContent = 0 + "/" + 0
  } else {
    inputH6.textContent = cont+1 + "/" + elementosCoincidentes.length
  }
  if (elementosCoincidentes.length > 0) {
    function encontrarPadrePorTag(elemento, nombreTag) {
      let padre = elemento.parentNode;
    
      while (padre && !(padre.classList.contains("secID"))) {
        padre = padre.parentNode;
      }
    
      return padre;
    }
    var elementoPadreSection = encontrarPadrePorTag(elementosCoincidentes[cont], 'section');
    console.log(elementoPadreSection)
    var rect = elementoPadreSection.getBoundingClientRect();
    const posicionAjustada = rect.top + window.scrollY;
    window.scrollTo({
      top: posicionAjustada,
      behavior: 'smooth' 
    });
    const highlightedText = elementosCoincidentes[cont].textContent.replace(
      new RegExp(searchBar.value, 'gi'),
      match => `<span class="yellow">${match}</span>`
  );

  // Mostrar el texto resaltado
  elementosCoincidentes[cont].innerHTML = highlightedText;
  }
})
flechaDer.addEventListener("click",()=> {
  var aElement = document.querySelectorAll('.yellow');
  for(let i = 0;i<aElement.length;i++) {
      aElement[i].parentElement.replaceChild(document.createTextNode(aElement[i].textContent),aElement[i]);
  }
  cont+=1
  var todosLosElementos = document.querySelectorAll(".nameProduct, h4, h2");
  var elementosCoincidentes = Array.from(todosLosElementos).filter(function(elemento) {
    return searchInTextContent(elemento, searchBar.value);
  });
  if(cont >=elementosCoincidentes.length) {
    cont = 0
  }
  if (elementosCoincidentes.length == 0) {
    inputH6.textContent = 0 + "/" + 0
  } else {
    inputH6.textContent = cont+1 + "/" + elementosCoincidentes.length
  }
  if (elementosCoincidentes.length > 0) {
    function encontrarPadrePorTag(elemento, nombreTag) {
      let padre = elemento.parentNode;
    
      while (padre && !(padre.classList.contains("secID"))) {
        padre = padre.parentNode;
      }
    
      return padre;
    }
    var elementoPadreSection = encontrarPadrePorTag(elementosCoincidentes[cont], 'section');
    var rect = elementoPadreSection.getBoundingClientRect();
    const posicionAjustada = rect.top + window.scrollY;
    console.log(rect.top + window.scrollY)
    window.scrollTo({
      top: posicionAjustada,
      behavior: 'smooth' 
    });
    const highlightedText = elementosCoincidentes[cont].textContent.replace(
      new RegExp(searchBar.value, 'gi'),
      match => `<span class="yellow">${match}</span>`
  );

  // Mostrar el texto resaltado
  elementosCoincidentes[cont].innerHTML = highlightedText;
  }
})


const Cafeteria = (datos)=>{
    datos = Object.values(datos);
    datos = datos[0]
   const resultados = datos.filter(item => item.Titulo === 'CAFETERÍA')
   let subDatos = {}
   subDatos["TRADICIONAL"] = resultados.filter(item => item.SubTitulo === 'TRADICIONAL')
   subDatos["ESPECIALES"] = resultados.filter(item => item.SubTitulo === 'ESPECIALES')
   subDatos["FRÍOS"] = resultados.filter(item => item.SubTitulo === 'FRÍOS')
   subDatos["INFUSIONES"] = resultados.filter(item => item.SubTitulo === 'INFUSIONES')
   data = document.querySelector("#dataCafeteria")
   let content = ``
   for (const categoria in subDatos) {
     content += `<div class="Datos"> 
     <h3>${categoria}</h3>
     <div class="NombrePrecio">`
     subDatos[categoria].forEach(element => {
       content+= `<div class="producto"><a class="nameProduct" href="/product?name=${element.Nombre}&descripcion=${element.Descripcion}&foto=${element.Foto}">${element.Nombre}</a>
       <a class="precio">$${element.Precio}</a></div>`
     })
     content += '</div> </div>'
   }
   data.innerHTML = content
   
   }
   const Desayunos = (datos)=> {
   datos = Object.values(datos);
    datos = datos[0]
   const resultados = datos.filter(item => item.Titulo === 'DESAYUNOS')
   data = document.querySelector("#dataDesayunos")
   let content = ``
   content += `<div class="Datos"> 
     <div class="NombrePrecio">`
   resultados.forEach(element => {
    if(element.Descripcion == '/img/cafe.png') {
      content+= `<div class="producto"> <img class="foto" src="${element.Descripcion}"></div>`
    } else {
      content+= `<div class="producto"> <div class="priceName"><a class="nameProduct" href="/product?name=${element.Nombre}&descripcion=${element.Descripcion}&foto=${element.Foto}">${element.Nombre}</a>
      <a class="precio">$${element.Precio}</a></div><h4>${element.Descripcion}</h4></div>`
    }
   })
   content += '</div></div>'
   data.innerHTML = content;
   }

   const Brunch = (datos)=> {
    datos = Object.values(datos);
     datos = datos[0]
    const resultados = datos.filter(item => item.Titulo === 'BRUNCH')
    data = document.querySelector("#dataBrunch")
    let content = ``
    content += `<div class="Datos"> 
      <div class="NombrePrecio">`
    resultados.forEach(element => {
     if(element.Descripcion == '/img/frut.png' || element.Descripcion == '/img/ham.png') {
       content+= `<div class="producto"> <img class="foto" src="${element.Descripcion}"></div>`
     } else {
       content+= `<div class="producto"> <div class="priceName"><a class="nameProduct" href="/product?name=${element.Nombre}&descripcion=${element.Descripcion}&foto=${element.Foto}">${element.Nombre}</a>
       <a class="precio">$${element.Precio}</a></div><h4>${element.Descripcion}</h4></div>`
     }
    })
    content += '</div></div>'
    data.innerHTML = content;
    }

    const Patisserie = (datos)=>{
      datos = Object.values(datos);
      datos = datos[0]
     const resultados = datos.filter(item => item.Titulo === 'PATISSERIE')
     let subDatos = {}
     subDatos["PATISSERIE"] = resultados.filter(item => item.SubTitulo === 'PATISSERIE')
     subDatos["PATISSERIE SIN TACC"] = resultados.filter(item => item.SubTitulo === 'PATISSERIE SIN T.A.C.C')
     data = document.querySelector("#dataPatisserie")
     let content = ``
     for (const categoria in subDatos) {
      if (categoria == 'PATISSERIE SIN TACC') {
        content += `<div class="Datos"> 
        <h2>${categoria}</h2>
        <h3>Consultar disponibilidad.</h3>
        <div class="NombrePrecio">`
      } else {
        content += `<div class="Datos"> 
        <h2>${categoria}</h2>
        <div class="NombrePrecio">`
      }
       subDatos[categoria].forEach(element => {
         content+= `<div class="producto"><a class="nameProduct" href="/product?name=${element.Nombre}&descripcion=${element.Descripcion}&foto=${element.Foto}">${element.Nombre}</a>
         <a class="precio">$${element.Precio}</a></div>`
       })
       content += '</div> </div>'
     }
     data.innerHTML = content
     
     }

     const Tortas = (datos)=> {
      datos = Object.values(datos);
       datos = datos[0]
      const resultados = datos.filter(item => item.Titulo === 'TORTAS')
      data = document.querySelector("#dataTortas")
      let content = ``
      content += `<div class="Datos"> 
        <div class="NombrePrecio">`
      resultados.forEach(element => {
         content+= `<div class="producto"> <a class="nameProduct">${element.Nombre}</a>
         <a class="precio">$${element.Precio}</a></div>`
      })
      content += '</div></div><img class="foto" src="/img/torta.png">'
      data.innerHTML = content;
      }

      const Sandwiches = (datos)=> {
        datos = Object.values(datos);
         datos = datos[0]
        const resultados = datos.filter(item => item.Titulo === 'SANDWICHES')
        data = document.querySelector("#dataSandwiches")
        let content = ``
        content += `<div class="Datos"> 
          <div class="NombrePrecio">`
        resultados.forEach(element => {
           content+= `<div class="producto"> <div class="priceName"><a class="nameProduct" href="/product?name=${element.Nombre}&descripcion=${element.Descripcion}&foto=${element.Foto}">${element.Nombre}</a>
           <a class="precio">$${element.Precio}</a></div><h4>${element.Descripcion}</h4></div>`
        })
        content += '</div></div>'
        data.innerHTML = content;
        }

        const Ensaladas = (datos)=>{
          datos = Object.values(datos);
          datos = datos[0]
         const resultados = datos.filter(item => item.Titulo === 'ENSALADAS')
         let subDatos = {}
         subDatos["ENSALADAS"] = resultados.filter(item => item.SubTitulo === 'ENSALADAS')
         subDatos["ROLLS"] = resultados.filter(item => item.SubTitulo === 'ROLLS')
         subDatos["GUARNICIONES"] = resultados.filter(item => item.SubTitulo === 'GUARNICIONES')
         data = document.querySelector("#dataEnsaladas")
         let content = ``
         for (const categoria in subDatos) {
          if(categoria == "ENSALADAS") {
            content += `<div class="Datos"> 
            <h2 class="mayor">${categoria}</h2>
            <div class="NombrePrecio">`
          } else {
            content += `<div class="Datos"> 
           <h2>${categoria}</h2>
           <div class="NombrePrecio">`
          }
           
           subDatos[categoria].forEach(element => {
             content+= `<div class="producto"> <div class="priceName"><a class="nameProduct" href="/product?name=${element.Nombre}&descripcion=${element.Descripcion}&foto=${element.Foto}">${element.Nombre}</a>
             <a class="precio">$${element.Precio}</a></div><h4>${element.Descripcion}</h4></div>`
           })
           content += '</div> </div>'
         }
         data.innerHTML = content
         }




         const Jugos = (datos)=>{
          datos = Object.values(datos);
          datos = datos[0]
         const resultados = datos.filter(item => item.Titulo === 'JUGOS')
         let subDatos = {}
         subDatos["JUGOS NATURALES"] = resultados.filter(item => item.SubTitulo === 'JUGOS NATURALES')
         subDatos["LICUADOS FRUTALES"] = resultados.filter(item => item.SubTitulo === 'LICUADOS FRUTALES')
         subDatos["BEBIDAS"] = resultados.filter(item => item.SubTitulo === 'BEBIDAS')
         subDatos["BEBIDAS C/ALCOHOL"] = resultados.filter(item => item.SubTitulo === 'BEBIDAS C/ALCOHOL')
         data = document.querySelector("#dataJugos")
         let content = ``
         for (const categoria in subDatos) {
          if(categoria == "JUGOS NATURALES") {
            content += `<div class="Datos"> 
            <h2>${categoria}</h2>
            <div class="NombrePrecio">`
            subDatos[categoria].forEach(element => {
              if(element.Nombre == "BOTELLA") {
                content+= `<div class="producto"> <div class="priceName"><a class="nameProduct" href="/product?name=${element.Nombre}&descripcion=${element.Descripcion}&foto=${element.Foto}">${element.Nombre}</a>
                <a class="precio">$${element.Precio}</a></div><h4 class="max">${element.Descripcion}</h4></div>`
              } else if(element.Nombre == "ADICIONALES") {
                content+= `<div class="flechaAdi"><div class="flechaContainer"><img src="/img/flecha.png" class="flecha"></div><div class="producto derecha"> <div class="priceName"><a class="nameProduct" href="/product?name=${element.Nombre}&descripcion=${element.Descripcion}&foto=${element.Foto}">${element.Nombre}</a>
                <a class="precio">+$${element.Precio}</a></div><h4 class="max">${element.Descripcion}</h4></div></div>`
              } 
              else {
                content+= `<div class="producto"><div class="priceName"><a class="nameProduct" href="/product?name=${element.Nombre}&descripcion=${element.Descripcion}&foto=${element.Foto}">${element.Nombre}</a>
                <a class="precio">$${element.Precio}</a></div></div>`
              }
            })
            content += '</div> </div>'
          } else if(categoria == "LICUADOS FRUTALES") {
            content += `<div class="Datos"> 
            <h2>${categoria}</h2>
            <div class="NombrePrecio">`
            subDatos[categoria].forEach(element => {
              content+= `<div class="producto"> <div class="priceName"><a class="nameProduct" href="/product?name=${element.Nombre}&descripcion=${element.Descripcion}&foto=${element.Foto}">${element.Nombre}</a>
              <a class="precio">$${element.Precio}</a></div><h4>${element.Descripcion}</h4><h4 class="consultar">Consultar disponibilidad.</h4></div>`
            })
            content += '</div> </div>'
          } else if (categoria == "BEBIDAS") {
            content += `<div class="Bebidas"><div class="Datos BEBIDAS"> 
            <h2 class="menor">${categoria}</h2>
            <div class="NombrePrecio">`
            subDatos[categoria].forEach(element => {
              content+= `<div class="producto"><a class="nameProduct" href="/product?name=${element.Nombre}&descripcion=${element.Descripcion}&foto=${element.Foto}">${element.Nombre}</a>
              <a class="precio">$${element.Precio}</a></div>`
            })
            content += '</div> </div>'
          } else if (categoria == "BEBIDAS C/ALCOHOL") {
            content += `<div class="Datos ALCOHOL"> 
            <h2 class="menor">${categoria}</h2>
            <div class="NombrePrecio">`
            subDatos[categoria].forEach(element => {
              content+= `<div class="producto"><a class="nameProduct" href="/product?name=${element.Nombre}&descripcion=${element.Descripcion}&foto=${element.Foto}">${element.Nombre}</a>
              <a class="precio">$${element.Precio}</a></div>`
            })
            content += '</div> </div></div>'
          }
            
         }
         data.innerHTML = content
         }


   fetch('/archivoDatos').then(res=> {
    if(!res.ok) {
      throw new Error("Error al obtener los datos")
    }
    return res.json()
   }).then(res=> {
    Cafeteria(res)
    Desayunos(res)
    Brunch(res)
    Patisserie(res)
    Tortas(res)
    Sandwiches(res)
    Ensaladas(res)
    Jugos(res)
   })
  