const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// Servir archivos estáticos del directorio public
app.use(express.static(path.join(__dirname, "public")));

// Manejar rutas adicionales
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
