const fs = require('fs/promises');
const readline = require('readline');


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


async function readconsole(){
    try {
    let usuario = {name: "",surname:"",age:0}
    usuario.name = await pregunta('¿Cual es su nombre?');
    usuario.surname = await pregunta('¿Cual es su apellido?');
    usuario.age = await pregunta('¿Cual es su edad?');
    return usuario
}catch(error){
    console.log(error);
    }
}

module.exports = readconsole;