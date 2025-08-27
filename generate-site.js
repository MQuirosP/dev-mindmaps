const fs = require('fs');
const path = require('path');

const repoBaseUrl = 'https://mquirosp.github.io/dev-mindmaps/';

// Obtiene todos los archivos HTML del repositorio en la raíz
const files = fs.readdirSync('.')
  .filter(f => f.endsWith('.html'))
  .sort();

console.log("Archivos HTML encontrados:", files);

// --- Generar index.html ---
let indexContent = `<!DOCTYPE html>
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

files.forEach(file => {
  const fileName = path.basename(file);
  indexContent += `    <li><a href="${repoBaseUrl}${encodeURIComponent(fileName)}">${fileName}</a></li>\n`;
});

indexContent += `  </ul>
</body>
</html>
`;

fs.writeFileSync('index.html', indexContent);
console.log("index.html generado en:", path.resolve('index.html'));

// --- Generar README.md ---
let readmeContent = `# Dev Mindmaps

Mind maps for frontend and backend development concepts.  
Created with [Markmap](https://markmap.js.org/).

## 🌐 Live Mindmaps
`;

files.forEach(file => {
  const fileName = path.basename(file);
  readmeContent += `- [${fileName}](${repoBaseUrl}${encodeURIComponent(fileName)})\n`;
});

readmeContent += `\n---\n`;

fs.writeFileSync('README.md', readmeContent);
console.log("README.md actualizado en:", path.resolve('README.md'));
