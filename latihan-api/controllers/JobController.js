const {job} = require('../models');

class JobController {
    static createPage(req, res) {
        res.render("jobs/createPage.ejs");
    }
    static createJob(req, res) {
        const {name, category, max_salary, min_salary} = req.body

        job
            .create({
                name,
                category,
                max_salary,
                min_salary,
            })
            .then((result) => {
                res.redirect("/jobs");
            })
            .catch((err) => {
                res.send(err);
            })
    }
    static getJob(req, res) {
        job
            .findAll({
                order: [
                    ['id', 'asc']
                ]
            })
            .then((result) => {
                res.render("jobs/home.ejs", {jobs: result})
                // res.send(result);
            })
            .catch((err) => res.send(err));
    }
    static deleteJob(req, res) {
        const id = Number(req.params.id);

        job
            .destroy({
                where: {
                    id
                }
            })
            .then((result) => {
                if (result) {
                    res.redirect("/jobs")
                    // res.send(`id of ${id} has been deleted`);
                }
                else {
                    res.send(`id of ${id} has not been deleted`);
                }
            })
            .catch((err) => res.send(err));
    }
    static updatePage(req, res) {
        const id = Number(req.params.id);

        job
            .findByPk(id)
            .then((result) => {
                res.render("jobs/updatePage.ejs", {jobs: result})
            })
            .catch((err) => res.send(err));
    }
    static updateJob(req, res) {
        const id = Number(req.params.id)
        const {name, category, max_salary, min_salary} = req.body;

        job
            .update({
                name,
                category, 
                max_salary,
                min_salary,
            },
            {
                where: {
                    id
                }
            })
            .then((result) => {
                res.redirect("/jobs")
                // if (result[0] === 1) {
                //     res.send(`id of ${id} has been updated`);
                // }
                // else {
                //     res.send(`id of ${id} cannot be found`);
                // }
            })
            .catch((err) => {
                res.send(err);
            })
    }
}

module.exports = JobController;