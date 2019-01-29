
if (process.env.NODE_ENV !== 'production') {
	console.log('loading dev environments')
	require('dotenv').config()
}
require('dotenv').config()
const express = require("express");
const routes = require("./routes");
const app = express();
const morgan = require("morgan");
const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser");
const passport = require("./passport")
const dbConnection = require("./db")
const session = require("express-session");
const MongoStore = require('connect-mongo')(session)
// Configure body parsing for AJAX requests
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(bodyParser.json())
app.use(
	session({
		secret: process.env.APP_SECRET || 'this is the default passphrase',
    store: new MongoStore({ mongooseConnection: dbConnection,
    useNewUrlParser: true }),
		resave: false,
		saveUninitialized: false
	})
)
app.use("/auth", require("./routes/api/auth"));
// ===== Passport ====
app.use(passport.initialize())
app.use(passport.session())
// Add routes, both API and view
app.use(routes);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

module.exports = dotenv;
