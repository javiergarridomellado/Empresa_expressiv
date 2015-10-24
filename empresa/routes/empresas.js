var express = require('express');
//var router = express.Router();
var assert = require("assert");




var lista = new Array();

//assert
function listar_alumnos(req, res){
   res.render('empresas/listar_alumno', {
      lista: lista
   });
}



exports.get_listar_alumnos = function(req, res){

	assert(lista[0].emp, "Practicas de alumnos");
    console.log("Acceso a los datos correcto");

	listar_alumnos(req, res)
};




function enviar_empresa(req, res){
   res.render('empresas/enviar_empresa', {
      lista: lista
   });
}

//
function eliminar_empresa(req, res){
   res.render('empresas/eliminar_empresa', {
      lista: lista
   });
}

exports.post_eliminar_empresa = function(req, res){
   var item = req.body.alumno;
   for(var i = lista.length; i--;) {
       if(lista[i].alumno === item) {
              lista.splice(i, 1);
          }
      }

   eliminar_empresa(req, res);
}

exports.get_eliminar_empresa = function(req, res){
   eliminar_empresa(req, res);
}
//

exports.get_enviar_empresa = function(req, res){
   enviar_empresa(req, res);
}

exports.post_enviar_empresa = function(req, res){
   var emp = req.body.emp;
   var alumno = req.body.alumno;
   var fechainicio = req.body.fechainicio;
   var fechafinalizacion = req.body.fechafinalizacion;
   var calificacion = req.body.calificacion;
   lista.push({
      emp: emp,
      alumno: alumno,
      fechainicio: fechainicio,
      fechafinalizacion: fechafinalizacion,
      calificacion: calificacion
   })
   assert(emp, "Practicas de alumnos");
   assert(alumno, "Practicas de alumnos");
   assert(fechainicio, "Practicas de alumnos");
   assert(fechafinalizacion, "Practicas de alumnos");
   assert(calificacion, "Practicas de alumnos");
   console.log("Acceso a los datos correcto");
   
   enviar_empresa(req, res);
}
