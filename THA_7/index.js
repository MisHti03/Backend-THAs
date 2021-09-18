const express = require('express');
const app = express();

//CRUD in rest api => POST GET PUT DELETE
const slash = (req,res) => {
      res.sendStatus(200);//successful response 
      
      res.send("Hello Slash detected");
      
      
};

app.get('/',slash);
// app.post('/',slash);
// app.put('/',slash);
// app.delete('/',slash); 

//For localhost:5000/products
app.get('/products',(req,res) => {
      // res.send("Products Displayed");
      res.send(req.query);
});

app.get('/ab?cd',(req,res) => {
      res.send('abcd');
})

app.get('/user/:userId/books/:bookId',(req,res) => {
      console.log(req.query);//it prints on backend console i.e. terminal
      res.send(req.params);//since there's userId variables so we use params which gives js objects
})


app.listen(5000);
 