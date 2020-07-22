const path = require('path');
const fs = require('fs-extra');

const apps = ['spa1', 'spa2'];

apps.forEach(app => {
  const fromPath = path.join(__dirname, '../packages', app, 'src');
  const outPath = path.join(__dirname, '../packages/combined/src/generated', app);
  console.log('Copy', fromPath, '->', outPath);
  fs.copySync(fromPath, outPath);
  // const { entrypoints } = require(`${fromPath}/asset-manifest.json`);
  // const entryBundle = entrypoints
  //   .map(entry => entry.includes('js/main')
  //     ? `export { default as ${app} } from '${entry}';`
  //     : `import '${entry}';`)
  //   .join('\n');
  // const entryBundlePath = path.join(outPath, 'entrypoints.js');
  // console.log('Write', entryBundlePath);
  // fs.writeFileSync(entryBundlePath, entryBundle);
})
