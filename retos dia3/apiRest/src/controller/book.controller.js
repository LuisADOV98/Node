const { request } = require("express");
const Book = require("../models/book")

let book1 = null//new Book("nada", "luis")

function getStart(req, res)
{
    let respuesta = {error: false, codigo: 200, mensaje:'Punto de inicio'};
    res.send(respuesta);
}

function getBook(req, res)
{
    let respuesta;
    if (book1 != null){
    respuesta = {error: false, codgio: 200, mensaje: "este es el libro", data: book1};
}else{
    respuesta = {error: true, codgio: 200, mensaje: "El libro no existe"};
}
    res.json(respuesta)
  
}

function postBook(req, res)
{
    let respuesta;
    console.log(req.body);
    if (book1 === null)
    {
        book1 = new Book(req.body.title,
                    req.body.author)

        respuesta    = {error: false, codigo:200,
                        mensaje: 'libro creado', data: book1};
    } else {
        respuesta = {error: true, codigo: 200,
                        mensaje: 'Libro ya existe'};
    }
    res.json(respuesta)
}

function putBook(request,response)
{
    let respuesta;
    if (book1 != null) 
    {
        book1.title  = request.body.title;
        book1.author = request.body.author;
        respuesta    = {error: false, codigo: 200,
                            mensaje: "Se ha actualizado el libro" , data: book1}
    } else 
        respuesta = {error: true, codigo: 200,
                        mensaje: "el libro ya existe", data: book1};
    
    response.send(respuesta);
}

function delBook(req, res)
{
    let respuesta;
    if(book1 != null)
    {
        book1     = null;
        respuesta = {error: false, codigo: 200,
                        mensaje: "Libro borrado", data: book1};
    } else 
        respuesta = {error: true, codigo: 200,
                        mensaje: "El libro no existe", data: book1}
    
    res.send(respuesta);
}

module.exports = {getStart, getBook, postBook, putBook,delBook}