//decleration
//npm init   save all the decleration files in a file called package.json
//npm i express --save
//shob ek shaathe update korboh kivabey "npm install"
//npm init -y shortcut e shob gula file niye nibey
//npm i cookie-parser
const express = require('express');
const bodyParser = require('body-parser');
const exSession = require('express-session');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const registration      = require('./controllers/registration');
const login             = require('./controllers/login');
const logout            = require('./controllers/logout');
const home              = require('./controllers/home');
const dashboard         = require('./controllers/dashboard');
const dashboardprofile  = require('./controllers/dashboardprofile');
const room         = require('./controllers/room');



const app = express();


//config
app.set('view engine', 'ejs');

//middleware
//middleware
//urlencoded maaney url er through tey data gula jaabey
//true means aami chailey json o nitey paarboh
//false maaney shudhu json o nitey paarboh
//secret e ja chai ditey paarboh eita encryption er jnnoh jatey hacker na pai
//saveUninitialized= prottekbar jeita deewa ache oita use korboh naaki notun
//true means overwrrite kora possible
//resave hocche prottekbar session e value create korar shomoy ki notun object create korboh?
//false maaney hocche bar bar create korboh nah
app.use('/assets', express.static('assets'));
app.use(fileUpload({useTempFiles: true,tempFileDir: '/tmp/'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(exSession({secret: 'my secret value',saveUninitialized: true,resave: false}));
app.use(cookieParser());
//app.use('/userdashboard', userdashboard);
app.use('/logout', logout);
app.use('/registration', registration);
app.use('/login', login);
app.use('/home', home);
app.use('/dashboard', dashboard);
app.use('/dashboardprofile', dashboardprofile);
app.use('/room', room);



// app.use('/user', user);

//route
app.get('/', (req, res) => {
    res.send('Hello from express server');
});

//server startup
app.listen(3000, (error) => {
    console.log('express server started at 3000...');
});
