// [npm i express]  in terminal to install express 
const express = require("express");  // importing express.js 
const path = require("path"); // importing path to use  sendFile() method

const app = express();  // express.   instead of calling express. 
const port = 4000; // defining port at which app.listen

//4 methods of http => GET - read; POST - create; PUT - update; DELETE  - delete

app.get("/", (req, res) => { // by default home page
    res.sendFile(path.join(__dirname+"/login.html"))  // using sendFile("./login") is not a good practise use path
})

app.post("/login",(req,res)=>{
    res.send("<h1>done</h1>")
    console.log("name")
    console.log(req.body)
})


app.listen(port, () => {
    console.log(`server is working on port: ${port}`)
});

// node ./index.js  to run the server every time
// ctrl +c          to close the server

//nodemon index.js   to solve the above issue 
