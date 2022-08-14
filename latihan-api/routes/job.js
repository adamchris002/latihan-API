const jobRoutes = require('express').Router();
const JobController = require('../controllers/JobController');

jobRoutes.get("/", JobController.getJob);
jobRoutes.get("/create", JobController.createPage);
jobRoutes.post("/create", JobController.createJob);
jobRoutes.get('/delete/:id', JobController.deleteJob);
jobRoutes.get('/update/:id', JobController.updatePage);
jobRoutes.post('/update/:id', JobController.updateJob);


module.exports = jobRoutes;