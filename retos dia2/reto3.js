const readline = require('readline');
const fs = require('fs/promises');

let usuario = {};
let filename = './usuario2.json';

function pregunta(pregunta) {
    const question = new Promise((resolve, reject) => {

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(pregunta, (respuesta) => {
            resolve(respuesta);
            rl.close();
        });
    });

    return question;
}

async function writeReadFile(usuario) {
    try {
        await fs.writeFile(filename, JSON.stringify(usuario));
        const file = await fs.readFile(filename, { encoding: 'utf8' });
        console.log(JSON.parse(file));

        

    } catch (err) {
        console.log(err);
    }
}

pregunta('Escribe tu nombre: ')
    .then(result => {
        usuario.name = result;
        return pregunta('Escribe su apellido: ');
    })
    .then(result => {
        usuario.surname = result;
        return pregunta('Escribe su edad: ');
    })
    .then(result => {
        usuario.age = result;
        writeReadFile(usuario);
    })
    .catch(err => console.log(err));