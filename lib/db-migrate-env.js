var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var file = path.resolve(__dirname, '../../../database.json');
var jsonDb = JSON.parse( fs.readFileSync( file, 'utf-8' ) );

var Dme = function(){

  var self = this;

  self.set = function( db, env ){

    var customConnection = jsonDb[env];

    _.extend(db.connection.connectionParameters, db.connection.connectionParameters, customConnection);

    return db;
  };

};

module.exports = new Dme();
