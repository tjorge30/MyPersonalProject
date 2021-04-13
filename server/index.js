require("dotenv").config(); 
const express = require("express"); 
const massive = require("massive"); 
const app = express();
const session = require('express-session');
//const bcrypt = require('bcryptjs');
const authCtrl = require ('./conrtollers/authCtrl');
const entriesCtrl = require ('./conrtollers/entriesCtrl');
const userCtrl = require ('./conrtollers/userCtrl');

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env; 

app.use(express.json());

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}));

//auth ctrl endpoints
app.post('/auth/register', authCtrl.register);
app.post('/auth/login', authCtrl.login);
app.delete('/auth/logout', authCtrl.logout);

//entries ctrl endpoints
app.get('/api/user_entry', entriesCtrl.pullEntry);
app.post('/api/user_entry', entriesCtrl.createUpdateEntry);
app.delete('/api/user_entry', entriesCtrl.deleteEntry);

//user ctrl endpoints
app.get('/api/user', userCtrl.pullUserData);
app.put('/api/user', userCtrl.updateUserData);

massive({ 
    connectionString: CONNECTION_STRING, 
    ssl: {rejectUnauthorized: false} 
})
.then(dbInstance => {     
    app.set("db", dbInstance);
    app.listen(SERVER_PORT, () => {
        console.log(`Server listening on port ${SERVER_PORT}.`);   
    })   
}).catch(err => console.log(err));