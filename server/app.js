var express = require('express');
var app = express();
var cors=require('cors')
app.use(cors())

var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/ecommerce';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Define a schema
var Schema = mongoose.Schema;

var productSchema = new Schema({
    name :  String,
    description : String,
    stok :Number,
    harga:Number,
    imgurl:String,
    kategori:String
});

var myProduct= mongoose.model("product", productSchema);

var listProduct= [
    {
        name: "celana panjang",
        description:"celana panjang serbaguna",
        stok:10,harga:30000,imgurl:"https://jakmall.id/2018/03/images/products/2fcc3b/thumbnail/hipster-celana-panjang-chino-pria.jpeg?s=7db37fc667dd6af52601e1c1f017eb63",
        kategori:"celana"
    },
    {
        name: "celana panjang chinoo",
        description:"celana panjang serbaguna juga",
        stok:10,harga:50000,imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKYG5XAXWhUl9kbCSOJq6DkDKkxGbxx9W738e2iiIsYzoVIHX_",
        kategori:"celana"
    },
    {
        name: "celana panjang sippo",
        description:"celana panjang sippo",
        stok:10,harga:75000,imgurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOvC3qMAC7W3ZonCVr4h87Imde8Qxtjo2VMbb8Ih6SHDf2omLS",
        kategori:"celana"
    }
];

// myProduct.create(listProduct, function (err, results) {
//    console.log(results)
// });

app.get('/', (req, res) => {
    myProduct.find({}, function (err, results) {
        if(!err){
            res.send(results)
        }
        else{
            res.send(err)
        }
    });
});
  
app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});




