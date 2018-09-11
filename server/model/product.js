var mongoose = require('mongoose');
var Schema = mongoose.Schema;

  var product = new Schema({
    name :  String,
    description : String,
    stok :Integer,
    harga:Integer
  });

