var http = require('http');
var express = require('express');


// configuration section
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

// allow cors
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// data base conection settings
var mongoose = require('mongoose');
mongoose.connect('mongodb://ThiIsAPassword:TheRealPassword@cluster0-shard-00-00-euadh.mongodb.net:27017,cluster0-shard-00-01-euadh.mongodb.net:27017,cluster0-shard-00-02-euadh.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');
var db =mongoose.connection;

// web server functionality
app.get('/', function (req, res) {
    console.log("Req on root page");
    res.send("hello world");
});

app.get('/about', function (req, res) {
    res.send("I'm jose");
});


// api functionality 

var ItemDB; // this is the model for DB items


app.get('/api/items', function (req, res) {
   ItemDB.find({}, function(error,data){
       if(error){
           console.log("error reading items");
           res.status(500);
           res.send(error);
       }

       // no error
       res.status(200);
       res.json(data);
   });
});

app.get('/api/items/:name', function(req,res){
    var name = req.params.name;
    ItemDB.find({user: name}, function(error,data){
        if(error){
            console.log("error reading items");
            res.status(500);
            res.send(error);
        }
 
        // no error
        res.status(200);
        res.json(data);
    });
});

app.get('/api/items/priceLowerThan/:price', function(req, res){
    var val = req.params.price;
    ItemDB.find({ price: {$gte: val} }, function(error, data){
        if(error){
            console.log("Error reading items");
            res.status(500);
            res.send(error);
        }

        // no error
        res.status(200);
        res.json(data);
    })
 });



app.post('/api/items', function (req, res) {


    var item = req.body;
    var itemForMongo = ItemDb(item);
    itemForMongo.save(
        function(error,savedItem){
            if(error){
                console.log("error saving",error);
                res.status(500); //http status 500:internal server error
                res.send(error);
            }
            // no error
            console.log('object saved!!');
            res.status(201); // 201:created
            res.json(savedItem); 
        });
   
});



// start the server and db check connection
db.on('open',function(){
    console.log('db con');
      /*
        Data types allowed for schemas:
        String, Number, Date, Buffer, Boolean, ObjectId, Array
    */

    var itemSchema = mongoose.Schema({
        code: String,
        title: String,
        price: Number,
        description: String,
        image: String,
        user: String
    });
    // create object constructor
    ItemDB = mongoose.model('itemsCH7', itemSchema);

});
db.on('error',function(details){
    console.log(" no db con");
    console.log('error details: '+ details);
});
app.listen(8080, function () {
    console.log("Server running at local host:8080");
});
//http://127.0.0.1/ = http://localhost
