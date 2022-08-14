const employeeRoutes = require('express').Router();
const EmployeeController = require('../controllers/EmployeeController');

employeeRoutes.get("/", EmployeeController.getEmployees);
employeeRoutes.get("/create", EmployeeController.createPage);
employeeRoutes.post("/create", EmployeeController.createEmployees);
employeeRoutes.get('/delete/:id', EmployeeController.deleteEmployees);
employeeRoutes.get('/update/:id', EmployeeController.updatePage);
employeeRoutes.post('/update/:id', EmployeeController.updateEmployees);



module.exports = employeeRoutes;