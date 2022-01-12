const Skill = require("../models/skill");

module.exports = {
    index,
    show
};

function show(req, res) {
// we access the routes params on the req.params object
//the name of the property will match the :name used when defining the route
    const skill = Skill.getOne(req.params.id);
    res.render("skills/show", { skill });
}

function index(req, res) {
    res.render("skills/index", {
        skills: Skill.getAll()
    });
}    