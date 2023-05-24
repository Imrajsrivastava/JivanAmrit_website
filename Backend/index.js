const express = require("express");
const mongoose = require("mongoose");
require("./Schemas/home")

const Home = mongoose.model("Home");

const app = express();
app.use(express.json());

const PORT = process.env.port || 5000;




app.post("/homeApdate",(req,res)=>{

  const {title,images} = req.body;

  const homeUpdate = new Home({
    title:title,
    images:images
  })

  homeUpdate.save().then((result)=>{
    console.log("data stored ",result)
    return res.send(result)
  }).catch((err)=>{
    console.log(err);
  })

})




mongoose.connect("mongodb+srv://rajsri4485:dEROqYz1DMl3YhdW@jivanamritcluster.frs4foc.mongodb.net/?retryWrites=true&w=majority").then((res)=>{
  console.log("mongodb connected ...")
}).catch((error)=>{
  console.log(error);
})

app.listen(PORT,()=>{
  console.log(`server runnig at http://localhost:${PORT}`);
})