const express = require('express');
const app = express();
const cors = require('cors');

// ----- middlewares-----
app.use(cors());
app.use(express.json());

// ----- routes-------
app.get('/', ()=>{})


module.exports = {
    server: app,
    start: (port) => {
      app.listen(port, () => {
        console.log(`listening to port ${port}`);
      });
    },
  };