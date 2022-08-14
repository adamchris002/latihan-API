const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes');

//harus ada di atas app.use(routes);
app.use(express.urlencoded({extended : true}));
app.use(routes);


app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
})