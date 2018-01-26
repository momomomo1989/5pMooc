const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const bodyParser = require('body-parser');
const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:false}));

const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/SchoolDb',(err,client)=>{
        if(err) return console.log(err);
        let db = client.db('SchoolDb');
        closure(db);
    })
}
router.get('/etudiants',(req,res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    connection((db)=>{
        db.collection('classe').find({}).toArray((err,result)=>{
            res.send(result);
        })
    });
});

module.exports = router;