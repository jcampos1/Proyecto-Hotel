'use strict';

module.exports = function(Habitacion) {
Habitacion.findByCategory = function(categoria, cb) {
        Habitacion.find({where: {categoriaId: categoria}}, function(err, habitaciones){
            if (err){
                cb(err, null)
            }else{
                cb(null, habitaciones)
            }
        });
    };
 Habitacion.remoteMethod(
    'findByCategory', {
      notes: ["Enuentra todas las habitaciones de una categoria"],
      http: {
        path: '/findByCategory',
        verb: 'get'
      },
      accepts: {arg: 'categoria', type: 'number', required: true},
      returns: {
        arg: 'habitaciones',
        type: 'array'
      }
    }
  );
};
