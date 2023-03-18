if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const StripeSecretKey = process.env.STRIPE_SECRET_KEY
const StripePublicKey = process.env.STRIPE_PUBLIC_KEY
console.log(StripeSecretKey, StripePublicKey)

const express = require('express');
const fs = require('fs')
//const stripe = require('stripe')(stripeSecretKey)
const app = express();

app.set('view engine', 'ejs')
app.use(express.static('public'))


app.get('/store', function(req, res) {
    fs.readFile('items.json', function(error, data) {
      if (error) {
        res.status(500).end()
      } else {
        res.render('store.ejs', {
        //   stripePublicKey: stripePublicKey,
          items: JSON.parse(data)
        })
      }
    })
  })

app.get('/', function(req,res){
    res.render('index.ejs')
})

app.listen(3000)
    
