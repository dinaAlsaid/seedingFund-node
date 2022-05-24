const express = require('express');
const app = express();
const cors = require('cors');
const authenticationRouter = require('./services/authentication/routes/authrouter');
const projectsRouter = require('./services/seedfund/routes/projectsrouter');
const journalRouter = require('./services/journal/routes/journalrouter');



const corsOptions = {
  origin: '*', //for demo purposes only
  credentials: true,
  optionSuccessStatus: 200,
};
// ----- middlewares-----
app.use(cors(corsOptions));
app.use(express.json());

// ----- routes-------
app.use('/users', authenticationRouter);
app.use('/seedfund', projectsRouter);
app.use('/journal', journalRouter);


module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`listening to port ${port}`);
    });
  },
};
