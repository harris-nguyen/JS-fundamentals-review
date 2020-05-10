function addFullNameProperty(obj) {
  return `${obj.firstName} ${obj.lastName}`;
}
var person = {
  firstName: "Jade",
  lastName: "Smith",
};

console.log(addFullNameProperty(person)); // --> 'Jade Smith'
