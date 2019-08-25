let express = require('express');
let router = express.Router();

let data = [
    {"user_id":"1", "name":"piyush", "age":23 , "occupation":"software Engineer"},
    {"user_id":"2","name":"kamal", "age":19 , "occupation":"student"}
]

router.get('/piyush', (req, res) => {
    res.send('Hello Piyush!')
});

router.get('/users' , (req , res) =>{
    res.send(data);
})

router.post('/user' , (req , res) => {
    let someData = req.body;
    data.push(someData);
        res.send(data);
})

router.get('/user/:id' , (req , res) => {
    var notFound=false;
    var urlId = req.params.id;
    data.map((value , index) => {
        if(value.user_id == urlId){
            res.send(value);
        }else {
            notFound =true;
        }
    }); 

    if(notFound)
    {
        res.send("error no data found");
    }
}) 

router.delete('/user/:id',(req,res)=>{
    var notFound=false;
    var userID = req.params.id;
        data.map((value , index) => {
            if(value.user_id == userID){
                data.splice(index,1); 
                res.send(data);
            }
            else {
                notFound = true;
            }
        });
    if(notFound == true){
        res.send("error no record exists");
    }
})

router.put('/user/:id',(req,res)=>{
    var notFound=false;
    var userid = req.params.id;
    var  someData = req.body;
    for (i =0; i<data.length; i++){
        if(data[i].user_id == userid){
            data[i]=someData;
            res.send(data);
        }else {
            notFound = true;
        }
    } 
    if(notFound == true){
        res.send("error no record exists");
    }
 
})


module.exports = router;
