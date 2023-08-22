const { log } = require('console');
let fs = require('fs');

function writeAndRead(path, obj){
    
    fs.writeFile(path, JSON.stringify(obj), (error) => {
        if (error){
            console.log(error);
        }else{
           
            fs.readFile(path,(error,data) => {
                if (error){
                    console.log(error);
                }else{
                    console.log(data.toString());
                 
                }
            })
        }
    });
}
// writeAndRead('./fichero1',{name: "luis", surname: "de oliveira"})

module.exports = writeAndRead;