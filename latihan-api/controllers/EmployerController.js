const {employer} = require('../models');

class EmployerController {
    static createPage(req, res) {
        res.render("employers/createPage.ejs");
    }
    static createEmployer(req, res) {
        const {name, type, total_employee, city} = req.body

        employer
            .create({
                name,
                type,
                total_employee,
                city,
            })
            .then((result) => {
                res.redirect("/employers");
            })
            .catch((err) => {
                res.send(err);
            })
    }
    static getEmployer(req, res) {
        employer
            .findAll({
                order: [
                    ['id', 'asc']
                ]
            })
            .then((result) => {
                res.render("employers/home.ejs", {employers : result})
                // res.send(result);
            })
            .catch((err) => res.send(err));
    }
    static deleteEmployer(req, res) {
        const id = Number(req.params.id);

        employer
            .destroy({
                where: {
                    id
                }
            })
            .then((result) => {
                
                if (result) {
                    res.redirect("/employers")
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

        employer
            .findByPk(id)
            .then((result) => {
                res.render("employers/updatePage.ejs", {employees: result})
            })
            .catch((err) => res.send(err));
    }
    static updateEmployer(req, res) {
        const id = Number(req.params.id)
        const {name, type, total_employee, city} = req.body;

        employer
            .update({
                name,
                type, 
                total_employee,
                city,
            },
            {
                where: {
                    id
                }
            })
            .then((result) => {
                res.redirect("/employers")
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

module.exports = EmployerController;