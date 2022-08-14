const {employee} = require('../models');

class EmployeeController {
    static createEmployees(req, res) {
        const {name, job, age, city} = req.body

        employee
            .create({
                name,
                job,
                age,
                city,
            })
            .then((result) => {
                res.redirect("/employees")
                // res.send(result);
            })
            .catch((err) => {
                res.send(err);
            })
    }
    static createPage(req, res) {
        res.render("employees/createPage.ejs")
    }
    static getEmployees(req, res) {
        employee
            .findAll({
                order: [
                    ['id', 'asc']
                ]
            })
            .then((result) => {
                res.render("employees/home.ejs", {employees : result})
                // res.send(result);
            })
            .catch((err) => res.send(err));
    }
    static deleteEmployees(req, res) {
        const id = Number(req.params.id);

        employee
            .destroy({
                where: {
                    id
                }
            })
            .then((result) => {
                if (result) {
                    res.redirect("/employees");
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

        employee
            .findByPk(id)
            .then((result) => {
                res.render("employees/updatePage.ejs", {employees: result})
            })
            .catch((err) => res.send(err));
    }
    static updateEmployees(req, res) {
        const id = Number(req.params.id)
        const {name, job, age, city} = req.body;

        employee
            .update({
                name,
                job, 
                age,
                city,
            },
            {
                where: {id}
            })
            .then((result) => {
                res.redirect("/employees");
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

module.exports = EmployeeController;