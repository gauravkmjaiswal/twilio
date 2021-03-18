// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// and set the environment variables. See http://twil.io/secure
require('dotenv').config({});
const express=require('express')
const path=require('path')
const app=express()
var twilio = require('twilio');




const authToken=process.env.TWILIO_TOKEN
const accountSid=process.env.TWILIO_ACCOUNT_SID
const client = require('twilio')(accountSid, authToken);


const static_path=path.join(__dirname,"../public")
     
app.use(express.json())

app.use(express.urlencoded({extended:false}))
app.use(express.static(static_path));


app.set("views",static_path);
app.get('/', function (req, res) {

  res.render("index")
})
app.post('/',async (req,res)=>{
try{
  


    const client_msg =await client.messages.create({
             from: 'whatsapp:+14155238886',
             body: `${req.body.msg}`,
             to: `whatsapp:+91${req.body.numb}`
           })
       console.log(client_msg.body)



    res.render("msg.html")

}catch
{
    // res.status(400).send("Messege send")
}

 
})




 
app.listen(3000)









