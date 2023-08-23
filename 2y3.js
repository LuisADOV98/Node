
let fs = require('fs');
let readline = require('readline');
let rl = readline.createInterface(process.stdin, process.stdout);

let usuario = {
    name: '',
    surname: '',
    age: 0
}
module.exports = usuario;

rl.question('¿Cuál es tu nombre? ', (answer) => {
    usuario.name = answer;
    rl.question('¿y tu apellido? ', (answer) => {
        usuario.surname = answer;
        rl.question('¿Cuántos años tienes?(número) ', (answer) => {
            usuario.age = answer;
                fs.writeFile('./usuarioRegistro.json', JSON.stringify(usuario), (error) => {
                    if (error){
                       console.log(error);
                    }else{

                        fs.readFile('./usuarioRegistro.json',(error,data) => {
                            if (error){
                                console.log(error);
                            }else{
                                console.log(data.toString());
                    
                                rl.close();
                            }
                        })
                    }
                });
            });
        });
    });
    