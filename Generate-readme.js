const fs = require('fs');
const path = require('path');

// Base URL de tu GitHub Pages
const repoBaseUrl = 'https://mquirosp.github.io/dev-mindmaps/';

// Lee todos los archivos de la carpeta actual
const files = fs.readdirSync('.')
  .filter(f => f.endsWith('.html')) // Solo HTML
  .sort(); // Opcional: orden alfabético

// Empieza a crear el contenido del index.html
let htmlContent = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dev Mindmaps</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 2rem; background: #f9f9f9; color: #333; }
    h1 { color: #2c3e50; }
    ul { list-style: none; padding-left: 0; }
    li { margin-bottom: 0.5rem; }
    a { text-decoration: none; color: #3498db; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <h1>Dev Mindmaps</h1>
  <p>Mind maps for frontend and backend development concepts. Created with <a href="https://markmap.js.org/" target="_blank">Markmap</a>.</p>
  <h2>🌐 Live Mindmaps</h2>
  <ul>
`;

// Agrega cada archivo HTML como un enlace
files.forEach(file => {
  const fileName = path.basename(file);
  htmlContent += `    <li><a href="${repoBaseUrl}${encodeURIComponent(fileName)}">${fileName}</a></li>\n`;
});

// Cierra etiquetas
htmlContent += `  </ul>
</body>
</html>
`;

// Guarda index.html
fs.writeFileSync('index.html', htmlContent);
console.log('index.html generado correctamente ✅');
