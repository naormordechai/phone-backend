const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const phoneService = require('./services/phone-service')

// const userService = require('./services/user-service')

// const addParkingRoutes = require('./routes/parking-route')
// const addUserRoutes = require('./routes/user-route')
const addBookRoutes = require('./routes/phone-routes');
const addUserRoutes = require('./routes/user-routes');

// const baba = require('./services/test-service')


const app = express()
app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true // enable set cookie
}));
app.use(bodyParser.json())
app.use(cookieParser());
app.use(express.static('dist'));
app.use(session({
  secret: 'puki muki',  
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.get('/', (req, res) => {
  res.send(req.session)
})



addBookRoutes(app)
addUserRoutes(app)

// addParkingRoutes(app);
// addUserRoutes(app);





const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))