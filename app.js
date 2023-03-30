//Declaraciones
const { request, response } = require("express");
const servidorHTTP = require("express");
const app = servidorHTTP();
const port = process.env.PORT || 3000;

//Configuraciones - Resepuestas para el cliente (chrome, firefox, Insomnia, edge)

app.get("/", (req, res) => {
    res.send('Pagina Principal. Servidor en Node.js con express');

})  //htdocs public html

app.get('*',(req, res) => {
    res.send('404 | Pagina no encontrada');
})

//Procesos - Respuestas para el desarrollador

app.listen(port, () =>{
    console.log('Servidor corriendo en el puerto',port)

})