// importacion de modulos
const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
app.listen(3000, () => {
    console.log("El servidor está inicializado en el puerto 3000");
});
app.engine(
    "handlebars",
    exphbs({
        layoutsDir: __dirname + "/views",
        partialsDir: __dirname + "/views/componentes/",
    })
);
app.set("view engine", "handlebars");

//middleware que publique la carpeta “css” de Bootstrap
app.use("/css", express.static(__dirname +
    "/node_modules/bootstrap/dist/css"));

//middleware que publique la carpeta Jquery
app.use('/jquery', express.static(__dirname +
    '/node_modules/jquery/dist'))

//ruta raiz
app.get("/", function (req, res) {
   
    res.render("Dashboard", {
        layout: "Dashboard",
        productos: [
            "banana",
            "cebollas",
            "lechuga",
            "papas",
            "pimenton",
            "tomate",
        ],
       
    });
});

//directorio local
app.use(express.static('image'));
