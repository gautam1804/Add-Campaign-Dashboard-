const express= require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const bodyParser =require('body-parser');
const path=require('path');
const { dirname } = require('path');

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

const db = mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'mysql',
    database:'employeesystem'

})

app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'../client/build/index.html'));
})

db.connect(function(err){
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("connected");
    }
})
app.post('/create',(req,res)=>{
    const campaignName =req.body.campaignName
    const createdOn =req.body.createdOn
    const dateRange =req.body.dateRange
    const clicks =req.body.clicks
    const budget =req.body.budget
    const location = req.body.location
    const campaignStatus = req.body.campaignStatus
    db.query("INSERT INTO employees (campaignName,createdOn,dateRange,clicks,budget,location,campaignStatus) VALUES (?,?,?,?,?,?,?)",
    [campaignName,createdOn,dateRange,clicks,budget,location,"Live now"],(err,result)=>{
        if(err) {
            console.log(err)
        }
        else{
            res.send('value inserted')
        }
    }
    )
    
})
app.get("/employees",(req,res)=>{
    db.query('SELECT * FROM employees',(err,result)=>{
        if(err){
            console.log("error");
        }
        else{
            res.send(result);
        }
    })
})

app.delete('/delete/:id',(req,res)=>{
    const id = req.params.id
    db.query("DELETE FROM employees where id = ?",id,(err,result)=>{
        if(err) {
            console.log(err);
        }
        else{
            res.send(result)
        }
    })
})


app.listen(3001,()=>{
    console.log("listening on port 3001");
})