const fs = require('fs/promises');

let usuario = {
    name: 'Luis',
    surname: 'De Oliveira',
    age: 25
};

let jusuario = JSON.stringify(usuario);
let filename = './usuario.json';

async function writeReadFile() {
    try {
        await fs.writeFile(filename, jusuario);
        const file = await fs.readFile(filename, { encoding: 'utf8' });
        console.log(JSON.parse(file));
    } catch (err) {
        console.log(err);
    }
}

writeReadFile();