let skills = [
    {id: 125223, skill: 'Get', done: true},
    {id: 127904, skill: 'Post', done: true},
    {id: 139608, skill: 'Put', done: true},
    {id: 123456, skill: 'Delete', done: false},
    {id: 123457, skill: 'Crud', done: false}
  ];

  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };

  //update skill and uses .find to return the skill
  function update(id, newSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, newSkill);
  }

  //deletes skill and uses .filter to refresh the list of skils
  function deleteOne(id) {
    id = parseInt(id);
    skills = skills.filter(skill => skill.id !== id);
  }

  function create(skill) {
    //this creates a random 6 digit number for the new id number
    skill.id = Date.now() % 1000000;
    skills.push(skill);
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }
  
  function getAll() {
    return skills;
  }