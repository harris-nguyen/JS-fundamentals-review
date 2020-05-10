function addFullNameProperty(obj) {
  return `${obj.firstName} ${obj.lastName}`
}
var person = {
  firstName: 'Jade',
  lastName: 'Smith'
};
console.log(addFullNameProperty(person))// --> 'Jade Smith'
//

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
//

function addArrayProperty(obj, key, arr) {
  return obj[key] = arr
}
var myObj = {};
var myArray = [1, 3];
addArrayProperty(myObj, 'myProperty', myArray);
console.log(addArrayProperty(myObj, 'myProperty', myArray)); // --> [1, 3]
//

function getNthElement(array, n) {
  return array[n]
}
var output = getNthElement([1, 3, 5], 1);
console.log(output); // --> 3
