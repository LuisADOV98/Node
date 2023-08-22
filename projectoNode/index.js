const writeAndRead = require('./writeAndReadObject');
const readConsole = require('./readConsole');


let path = './final.json';
readConsole (obj => {
writeAndRead(path,obj)
});
