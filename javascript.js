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
//

function transformFirstAndLast(array) {
  const obj = {}
  const first = (array[0])
  const last = (array[array.length - 1])
  obj[first] = last
  return obj
}
const test = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce']
console.log(transformFirstAndLast(test)) // {Queen: 'Beyonce'}
//

function fromListToObject(array) {
  let obj = {}
  for(let i = 0; i < array.length; i++){
    obj[array[i][0]] = array[i][1]
  }
  return obj
}
const test = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]
console.log(fromListToObject(test))// { make: 'Ford', model : 'Mustang', year : 1964 }
//

function transformEmployeeData(employeeData) {
  const arr = []
  const obj = {}
  for(let i = 0; i < employeeData.length; i++){
    for (let j = 0; j < employeeData[i].length; j++){
      obj[employeeData[i][j][0]] = employeeData[i][j][1]
    }
    arr.push(obj)
  }
  return arr
}
const test = [
  [
    ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
  ],
  [
    ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
  ]
]
console.log(transformEmployeeData(test))
// [
//   { firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' },
//   { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' }
// ]
