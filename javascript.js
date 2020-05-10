function addFullNameProperty(obj) {
  return `${obj.firstName} ${obj.lastName}`
}
var person = {
  firstName: 'Jade',
  lastName: 'Smith'
};

console.log(addFullNameProperty(person))// --> 'Jade Smith'

function addObjectProperty(obj1, key, obj2) {
  return obj1[key] = obj2
}

var person1 = {
  name: "Joe Blow",
  role: "schlub",
};
var person2 = {
  name: "Mr. Burns",
  role: "supervisor",
};

console.log(addObjectProperty(person1, "manager", person2)); // --> { name: 'Mr. Burns', role: 'supervisor' }
