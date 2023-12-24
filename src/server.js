import express from 'express'
import handlebards from 'express-handlebars'
import __dirname from './utils.js'
import fss from 'fs'
const app = express()
const fs = fss
const fileNameAsync = 'archivoDatos';
app.engine('handlebars',handlebards.engine())
app.set('views',__dirname + '/views')
app.set('view engine', 'handlebars')
app.use(express.static(__dirname+'/public'))

app.get('/',(req,res)=> {
    res.render('index')
})
app.get('/data',async (req,res)=> {
  let datos = await fs.readFileSync(fileNameAsync,'utf8')
  datos = JSON.parse(datos)
  res.json(datos)
})
app.get("/actualizarPrecios", async (req,res)=> {
  var rutaArchivo = 'https://script.google.com/macros/s/AKfycbygfJX-tjb90QBpjnkvJ5HNx4KCROzgF9TPutvqJ8viTO3tqvPx8ZU-Y95rCp6njy9y/exec';
  fetch(rutaArchivo)
  .then(response => {
    // Verificar si la respuesta es exitosa (status 200-299)
    if (!response.ok) {
      throw new Error('Error al cargar el archivo JSON');
    }
    // Parsear el JSON y retornar la promesa resultante
    return response.text();
  })
  .then(datos => {
    EscribirDatos(datos)
   
    
  })
  .catch(error => {
    console.error(error.message);
  });
  res.send(true)
})
const server = app.listen(8080,()=>console.log("Eswcuchando puerto"))
  const EscribirDatos = async (datos)=> {
    await fs.promises.writeFile(fileNameAsync,datos)
  } 
  
  



