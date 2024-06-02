const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
// Iniciando el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });

// Configurando la ruta principal
app.get('/htmlBasics', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html_cheat_sheet.html'));
});

app.get('/cssBasics', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'css_cheat_sheet.html'));
  });
|
  app.get('/webPage', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'webPage.html'));
  });