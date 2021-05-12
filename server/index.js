require("dotenv").config(); 
const express = require("express"); 
const massive = require("massive"); 
const app = express();
const session = require('express-session');
const moonSignCtrl = require('./conrtollers/moonSignCtrl');
const authCtrl = require ('./conrtollers/authCtrl');
const emailerCtrl = require ('./conrtollers/emailerCtrl');
const entriesCtrl = require ('./conrtollers/entriesCtrl');
const userCtrl = require ('./conrtollers/userCtrl');
const path = require('path')
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

app.use(express.static(__dirname + '/../build'));

//auth ctrl endpoints
app.get('/auth/getSession', authCtrl.getSession);//req.body
app.post('/auth/register', authCtrl.register);//req.body
app.post('/auth/login', authCtrl.login);//req.body
app.delete('/auth/logout', authCtrl.logout);//recieve no data

//entries ctrl endpoints
app.get('/api/user_entry', entriesCtrl.pullEntry);
app.post('/api/user_entry', entriesCtrl.updateEntry);
app.delete('/api/user_entry', entriesCtrl.deleteEntry);

//user ctrl endpoints
app.get('/api/user', userCtrl.pullUserData);
app.put('/api/user', userCtrl.updateUserData);

// moonSigns ctrl endpoints
app.get('/api/sign', moonSignCtrl.pullSignData);
app.post('/api/sign', moonSignCtrl.updateSignReading);
// emailer ctrl endpoint
app.post('/api/email', emailerCtrl.email);

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



// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../build/index.html'))
// });