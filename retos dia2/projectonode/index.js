const fs = require('fs/promises');
const readline = require('readline');
const readAndWrite = require('./ReadAndWrite');
const readconsole = require('./readconsole')

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


let path = "usuario.json"
const crearUsuario = async (path) => {
    let usuario = {};
    try {
        usuario.name = await pregunta('¿Cual es su nombre?');
        usuario.surname = await pregunta('¿Cual es su apellido?');
        usuario.age = await pregunta('¿Cual es su edad?');
      await readAndWrite(path,usuario );
    } catch (err) {
      console.log(err);
    }
  };
  crearUsuario("usuario.json");
