const routes = require('express').Router();
const employeeRoutes = require('./employee');
const employerRoutes = require('./employer');
const jobRoutes = require('./job');

routes.get('/', (req, res) => {
    res.render('index.ejs');
})

routes.use('/employers', employerRoutes);
routes.use('/employees', employeeRoutes);
routes.use('/jobs', jobRoutes);

module.exports = routes;