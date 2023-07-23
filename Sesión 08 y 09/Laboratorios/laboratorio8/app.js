const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

app.get("/api/usuarios", (req, res)=>{
     const valor = "hola mundo";
     res.json(valor);   
});

fs.readdir("./view",(err,files)=>{
     files.forEach(file=>{
          app.get("/view/"+file,(req,res)=>{
               res.sendFile(path.join(__dirname,"/view/"+file));
            });
     });
 });

app.listen(port,() =>{ console.log(`Servidor escuchando en http://localhost:${port}`)});

