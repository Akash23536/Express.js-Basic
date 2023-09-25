// const express = require("express");  // npm i express 
// const path = require("path"); // importing path to use sendFile() 
// const bodyParser = require("body-parser") // npm i body-parser to use req.body

// const app = express();  // express.   instead of calling express. 
// const port = 4000; // defining port at which app.listen
// app.use(bodyParser.urlencoded({ extended: false })); // using body-parser as a middleware=> always define it after the app 

// //4 methods of http => GET - read; POST - create; PUT - update; DELETE  - delete

// app.get("/", (req, res) => {                             // "/" is default page or landing page or home page
//     res.sendFile(path.join(__dirname + "/login.html"))  // using sendFile("./login") is not a good practise use path
// })

// app.post("/login", (req, res) => {
//     res.send(`<h1>Done Mr ${req.body.name}</h1> <h2> your Email is ${req.body.email}</h2>`) //send response in <h1> and <h2> tag
//     console.log(req.body) // print body object with name,email,password with the help of body-parser
// })

// app.listen(port, () => {
//     console.log(`server is working on port: ${port}`)
// });

// // node ./index.js  to run the server or file
// // ctrl +c          to close the server

// //nodemon index.js   to solve the above issue 


// ------------------------- Rest Api ---------------


const express = require("express");  // npm i express 

const app = express();  // express.   instead of calling express. 
const port = 4000; // defining port at which app.listen
app.use(express.json()); // using this we get res.json value of name,email,password

//4 methods of http => GET - read; POST - create; PUT - update; DELETE  - delete

app.get("/api/v1/", (req, res) => {                             // "/" is default page or landing page or home page
   res.json({ name: "akash", email: "akash@gmail.com" }) // at "/" it show { name: "akash", email: "akash@gmail.com" }
})

app.post("/api/v1/register",(req,res)=>{ //Add In res.body using Json { "name": "akash", "email": "akash@gmail.com", "password": "123456"}
const Uname=req.body.name;
const Uemail=req.body.email;
const Upassword =req.body.password;
res.json({        // without using app.use(express.json()); it will only send in {success : true} 
    success: true, // after using app.use(express.json()); it will show all name,email,password
    name: Uname,
    email: Uemail,
    password: Upassword,
})
});

app.listen(port, () => {
    console.log(`server is working on port: ${port}`)
});


