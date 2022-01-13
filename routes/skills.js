var express = require('express');
var router = express.Router();


var skillsCtrl = require("../controllers/skills");

// ALL routes start with the path of "/todos"

//POST /skills create the new skill button
router.post('/', skillsCtrl.create);
//Get /skills/new, NEW route must be moved to the show route
router.get("/new", skillsCtrl.new);
//GET /skills (index functionality -list all skills)
router.get('/', skillsCtrl.index);
// GET /skills/:id (show functionality - show a single skill)
router.get("/:id", skillsCtrl.show);
//DELETE /skills/:id
router.delete("/:id", skillsCtrl.delete);
//GET /skills/:id/edit
router.get('/:id/edit', skillsCtrl.edit);
//PUT /skills/:id (update functionality)
router.put("/:id", skillsCtrl.update);

module.exports = router;
