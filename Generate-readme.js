const fs = require('fs');
const path = require('path');

const repoBaseUrl = 'https://mquirosp.github.io/dev-mindmaps/';
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

let readmeContent = `# Dev Mindmaps

Mind maps for frontend and backend development concepts.
Created with [Markmap](https://markmap.js.org/).

## 🌐 Live Mindmaps
`;

files.forEach(f => {
  const name = path.parse(f).name;
  readmeContent += `- [${name}](${repoBaseUrl}${encodeURIComponent(f)})\n`;
});

readmeContent += `\n---\n`;

fs.writeFileSync('README.md', readmeContent);
console.log('README.md updated ✅');
