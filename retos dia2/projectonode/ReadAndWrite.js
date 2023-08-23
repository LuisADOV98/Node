
const fs = require('fs/promises')


async function readAndWrite(path,obj) {
    
    try {
        await fs.writeFile(path,JSON.stringify(obj) )

        let read = await fs.readFile(path, 'utf8');

    } catch(error){
        console.log(error);
    }
}

    readAndWrite('WriteAndRead.json', {name:"luis",surname:"De Oliveira",age:25})

module.exports = readAndWrite;