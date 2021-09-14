const express = require('express');
const app = express();
const bodyParser = require("body-parser");//for req body
const checkAdmin = (req, res, next) => {
  console.log("in first",req.query);
  if(req.query.auth === 'kgfrijvcrhkk ') {
    //console.log('1')
    next()
  }else{
   // console.log('2')
    res.status(400).send("should be admin");
  }
};
//app.use(checkAdmin);//forall

const sendRes = (req, res) => {
  
  res.status(200)
 res.json(req.query)
  //console.log('inside')
};
app.use(express.urlencoded({ extended: true}));
app.use(express.json({ extended: true }));

app.get('/',  sendRes);

//security, performances, edge cases
//CRUD -> POST, GET, PUT ,DELETEHTTP response status codes indicate whether a specific HTTP request has been successfully completed. Responses are grouped in five classes:

//Informational responses (100–199)
//Successful responses (200–299)
//Redirects (300–399)
//Client errors (400–499)
//Server errors (500–599)



//app.get('/products', (req, res)=> {
   // req.query={
     //   limit:50,
      //  q:"something"
 //   }
    //res.send(req.query.q);
//})
app.post('/', (req, res) => {
  console.log('req.body -> ', req.body);
  res.json(req.body)
});
app.get('/ab(cd)?e', (req, res)=> {
    res.send('abcd');
   });
  
  app.get(/a/,(req, res)=> {
    res.send('abcd');
   });

app.get(/.*fly$/, (req, res)=> {
    res.send('abcd');
  }); 

//app.get('/user/:userId/books/:booksId', (req, res)=> {
    //console.log(req.query);
    //res.send(req.params);
  //}) 


   // res.sendStatus(500);//updated successfully
   // res.json({a:1});
  // if(emailValid(email)) {} else{
      // res.sendStatus(503);
      // res={
           //sendStatus: () =>null,
           //send: ()=> return
    
   // res.send = return ;


app.listen(5000);
