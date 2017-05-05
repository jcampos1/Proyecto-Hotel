// Copyright IBM Corp. 2015,2016. All Rights Reserved.
// Node module: loopback-example-access-control
// This file is licensed under the Artistic License 2.0.
// License text available at https://opensource.org/licenses/Artistic-2.0

module.exports = function(app) {
  var User = app.models.Usuario;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;

  User.create([
    {
        "nombres": "Junior David",
        "apellidos": "Campos Gimenez",
        "cedula": 22204356,
        "fechanac": "2017-04-26T20:03:15.419Z",
        "telefono": "04143494487",
        "username": "jcampos",
        "password": "jc2220",
        "email": "junior.uc.91@hotmail.com",
        "emailVerified": true
    },
    {
        "nombres": "Cesar Leonardo",
        "apellidos": "Lopez Fuente",
        "cedula": 21585985,
        "fechanac": "2017-04-26T20:03:15.419Z",
        "telefono": "04126784356",
        "username": "cesar",
        "password": "cesar",
        "email": "jcampos@ea-asc.com",
        "emailVerified": true
    },
    {
        "nombres": "Karloisi Yeimar",
        "apellidos": "Vasquz Gomez",
        "cedula": 21478469,
        "fechanac": "2017-04-26T20:03:15.419Z",
        "telefono": "04143494487",
        "username": "kar",
        "password": "kar",
        "email": "kaarloisiv@hotmail.com",
        "emailVerified": true
    },

  ], function(err, users) {
    if (err) console.log(err);

    console.log('Usuarios administrador y empleado creados.');

    //create the admin role
    Role.create({
      name: 'admin'
    }, function(err, role) {
      if (err) console.log(err);

      console.log('Rol admin creado.');

      //make bob an admin
      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: users[0].username
      }, function(err, principal) {
        if (err) console.log(err);

        console.log('Asignado rol admin a '+users[0].username);
      });
    });

    //create the admin role
    Role.create({
      name: 'empleado'
    }, function(err, role) {
      if (err) console.log(err);

      console.log('Rol empleado creado.');

      //make bob an admin
      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: users[1].username
      }, function(err, principal) {
        if (err) console.log(err);

        console.log('Asignado rol empleado a ', users[1].username);
      });
    });

    //Creación rol cliente
    Role.create({
      name: 'cliente'
    }, function(err, role) {
      if (err) console.log(err);

      console.log('Rol cliente creado.');

       //make bob an admin
      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: users[2].username
      }, function(err, principal) {
        if (err) console.log(err);

        console.log('Asignado rol cliente a ', users[2].username);
      });

      });
  });
};