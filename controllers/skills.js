const Skill = require("../models/skill");

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
};

function update(req, res) {
    req.body.done = !!req.body.done;
    Skill.update(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`);
}

function edit(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render("skills/edit", { skill });
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}

//create functionality added here
function create(req, res) {
    console.log(req.body);
    req.body.done = false;
    Skill.create(req.body);
    res.redirect("/skills");
}

//new skill added hee
function newSkill(req, res) {
    res.render("skills/new");
}

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