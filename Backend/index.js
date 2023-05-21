const express = require("express");

const app = express();

const PORT = process.env.port || 5000;



app.listen(PORT,()=>{
  console.log(`server runnig at http://localhost:${PORT}`);
})