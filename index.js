// [npm i express]  in terminal to install express 
const express = require("express");  // importing express 

const app = express();  // express.   instead of calling express. 
const port = 4000; // defining port at which app.listen

//4 methods of http => GET - read; POST - create; PUT - update; DELETE  - delete


app.get("/", (req, res) => { // by default home page
    res.send("<h1> hello world response</h1>")
})
app.get("/about", (req, res) => {
    res.send("<h1>about page response</h1>")
})
app.get("/contact", (req, res) => {
    res.send("<h1> contact page response</h1>")
})

app.listen(port, () => {
    console.log(`server is working on port: ${port}`)
});
// node ./index.js  to run the server every time
// ctrl +c          to close the server

//nodemon index.js   to solve the above issue 
