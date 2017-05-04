'use strict';

module.exports = function(Categoria) {

 Categoria.findByName = function(nombre, cb) {
        Categoria.findOne({where: {nombre: nombre}}, function(err, categoria){
            if (err){
                cb(err, null)
            }else{
                cb(null, categoria)
            }
        });
    };
 Categoria.remoteMethod(
    'findByName', {
      notes: ["Enuentra una categoria de habitación, identificada por el nombre"],
      http: {
        path: '/findByName',
        verb: 'get'
      },
      accepts: {arg: 'nombre', type: 'string', required: true},
      returns: {
        arg: 'entity',
        type: 'object'
      }
    }
  );

  Categoria.findByStatus = function(st, cb) {
        Categoria.find({where: {activo: st}, order: 'precio ASC'}, function(err, categorias){
            if (err){
                cb(err, null)
            }else{
                cb(null, categorias)
            }
        });
    };
  Categoria.remoteMethod(
    'findByStatus', {
      notes: ["Enuentra todas las categorias activas y ordenadas ascendentemente por el precio"],
      http: {
        path: '/findByStatus',
        verb: 'get'
      },
      accepts: {arg: 'st', type: 'boolean', required: true},
      returns: {
        arg: 'categorias',
        type: 'array'
      }
    }
  );
};
