const skills = [
    {id: 125223, skill: 'Get', has: true},
    {id: 127904, skill: 'Post',has: true},
    {id: 139608, skill: 'Put', has: true},
    {id: 123456, skill: 'Delete', has: false},
    {id: 123457, skill: 'Crud', has: false}
  ];

  module.exports = {
    getAll,
    getOne,
  };
  
  function getOne(id) {
    id = parseInt(id);
    return skills.find((skill) => skill.id === id);
  }
  
  function getAll() {
    return skills;
  }