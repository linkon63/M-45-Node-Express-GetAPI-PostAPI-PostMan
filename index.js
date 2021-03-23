const express = require('express');
const cors = require('cors')  //cors = require('cors')
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const users = ['Faysal','Rasel','Anthor','Suhan','Ik Anthor', 'Billal'];

app.get('/', function (req, res) {
    const furit = {
        Product : "Ada",
        price : 450
    }
    res.send(furit);
  })
app.get('/furit/banana', (req,res) => {
    res.send({fruit:'banana', price:10000,quantity:15000})
})

app.get('/users/:id',(req,res)=>{
    const id = req.params.id;
    console.log(req.query.sort);
    const name = users[id];
    res.send({id,name});
})
//POST 

app.post('/addUser', (req,res)=>{
    // save to database
    const user = req.body;
    user.id = 55;
    res.send(user);
})




  app.listen(3000, console.log('Listing Port 3000'));