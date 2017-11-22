const fs   = require("fs");
const sass = require("node-sass");
const string = require("underscore.string");
const path   = require("path");
const postcss = require("postcss");
const autoprefixer = require("autoprefixer");

const isComponent = (e) => /^component\.\w+\.scss$/.test(e);
const resolve = (paths) => path.resolve(__dirname, ...paths);
const writeFile = (file, css, name) => fs.writeFile(file, css, (err) => {
      if (!err) console.log(`${name}.css rendered to its component folder.`);
    });


[["./src"], ["src", "sass"], ["src", "components"], ["src", "css"]].forEach((e) => {
  const fPath = resolve(e);
  if(!fs.existsSync(fPath)){
    throw new Error(`The following directory must exist: ${fPath}`)
  }
});

const comps = fs.readdirSync("./src/sass")
                .filter(isComponent);

const spacer = "\n               ";
console.log("Rendering the following components and redirecting them:");
console.log(comps.reduce((a, c) => a += `${c}${spacer}`, "   Components: "));

for(const comp of comps) {
  let name = /^component\.(\w+)\.scss$/.exec(comp)[1];
  name = string.camelize(name);
  name = string.capitalize(name);

  const outPath1 = `./src/components/${name}`;
  if(!fs.existsSync(outPath1)) {
    throw new Error(`Folder must for component: ${name} in the ./components folder`);
  }
  const outPath2 = `./src/css/`;
  const outFile1 = resolve([outPath1,`${name}.css`]);
  const outFile2 = resolve([outPath2, `${name}.css`]);
  const fPath = resolve(["src", "sass", comp]);
  sass.render({
    file: fPath,
    outFile: outFile1,
    outputStyle: "expanded"
  }, (error, result) => {
    if(!error) {
      postcss([autoprefixer])
             .process(result.css)
             .then(result => {
               writeFile(outFile1, result.css, name);
               writeFile(outFile2, result.css, name);
             });
    }
  })
}
