const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Configurando la ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html_cheat_sheet.html'));
});

// Iniciando el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
