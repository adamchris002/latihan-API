const employerRoutes = require('express').Router();
const EmployerController = require('../controllers/EmployerController');

employerRoutes.get("/", EmployerController.getEmployer);
employerRoutes.get("/create", EmployerController.createPage);
employerRoutes.post("/create", EmployerController.createEmployer);
employerRoutes.get('/delete/:id', EmployerController.deleteEmployer);
employerRoutes.get('/update/:id', EmployerController.updatePage);  
employerRoutes.post('/update/:id', EmployerController.updateEmployer);


module.exports = employerRoutes;