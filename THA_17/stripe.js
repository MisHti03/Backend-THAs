var router = require('express').Router();
var path = require("path");
const stripe = require("stripe")("sk_test_51JfKR5SDYAOYeHF2tSYOtEBD255HRcOHCywfZjMJFPA2RNnMrLqeLmyToD28XO8fNHG3hE7KSc3w3LETQgDzape700KUxpFAsG");
   

router.get('/', function(req, res){

    res.sendFile(path.join(__dirname, "../public/html/payment.html"));
});

router.post('/payment', async(req, res) => {
    console.log(req.body);
    try{
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                amount: 1000,
                name: "Shopping",
                currency: "usd",
                quantity: 1
            },],
            payment_method_types: ["card"],
            success_url: "http://sitename.com/checkout-success",
            cancel_url: "http://sitename.com/checkout-cancel",

        });
        res.redirect(303, session.url);



    }
    catch(err){
        
        res.status(err.statusCode||500).json(err.message);
        
    }

});

module.exports = router;

