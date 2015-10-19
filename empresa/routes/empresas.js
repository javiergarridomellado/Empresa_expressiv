var lista = new Array();
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
   var item = req.body.mensaje;
   for(var i = lista.length; i--;) {
       if(lista[i].mensaje === item) {
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
   var asunto = req.body.asunto;
   var mensaje = req.body.mensaje;
   var fechainicio = req.body.fechainicio;
   var fechafinalizacion = req.body.fechafinalizacion;
   var calificacion = req.body.calificacion;
   lista.push({
      asunto: asunto,
      mensaje: mensaje,
      fechainicio: fechainicio,
      fechafinalizacion: fechafinalizacion,
      calificacion: calificacion
   })
   enviar_empresa(req, res);
}
