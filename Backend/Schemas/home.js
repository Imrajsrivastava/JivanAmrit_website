const mongoose = require("mongoose")

const homeSchema = new mongoose.Schema({
  title:{
    type:[{type:String}]
    
  },
  images:{
    type:[]
  }
   
})

const home = mongoose.model("Home",homeSchema);