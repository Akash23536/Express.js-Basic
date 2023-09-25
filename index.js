const express = require("express");  // npm i express 
const path = require("path"); // importing path to use sendFile() 
const bodyParser = require("body-parser") // npm i body-parser to use req.body

const app = express();  // express.   instead of calling express. 
const port = 4000; // defining port at which app.listen
app.use(bodyParser.urlencoded({ extended: false })); // using body-parser as a middleware=> always define it after the app 

//4 methods of http => GET - read; POST - create; PUT - update; DELETE  - delete

app.get("/", (req, res) => {                             // "/" is default page or landing page or home page
    res.sendFile(path.join(__dirname + "/login.html"))  // using sendFile("./login") is not a good practise use path
})

app.post("/login", (req, res) => {
    res.send(`<h1>Done Mr ${req.body.name}</h1> <h2> your Email is ${req.body.email}</h2>`) //send response in <h1> and <h2> tag
    console.log(req.body) // print body object with name,email,password with the help of body-parser
})

app.listen(port, () => {
    console.log(`server is working on port: ${port}`)
});

// node ./index.js  to run the server or file
// ctrl +c          to close the server

//nodemon index.js   to solve the above issue 
