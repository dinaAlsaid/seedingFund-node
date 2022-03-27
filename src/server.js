const express = require('express');
const app = express();
const cors = require('cors');
const authenticationRouter = require('./routes/authrouter.js');
const projectsRouter = require('./routes/projectsrouter.js');

const corsOptions = {
  origin: '*', //for demo purposes only
  credentials: true,
  optionSuccessStatus: 200,
};
// ----- middlewares-----
app.use(cors(corsOptions));
app.use(express.json());

// ----- routes-------
app.use('/', authenticationRouter);
app.use('/', projectsRouter);


module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`listening to port ${port}`);
    });
  },
};
