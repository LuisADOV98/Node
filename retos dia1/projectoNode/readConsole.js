let readline = require('readline');
let fs = require('fs');
let rl = readline.createInterface(process.stdin, process.stdout);


function readConsole(callback){
    let usuario = {
        name: '',
        surname: '',
        age: 0
    }

    rl.question('¿Cuál es tu nombre? ', (name) => {
        usuario.name = name;
        rl.question('¿y tu apellido? ', (surname) => {
            usuario.surname = surname;
            rl.question('¿Cuántos años tienes?(número) ', (age) => {
                usuario.age = age;
                callback(usuario);
                rl.close();
            });
        });
    });
}
// readConsole(console.log)


module.exports = readConsole;
