//Example: Type Annotation in TypeScript
var age = 32; // number variable
var fullName = "John"; // string variable
var isUpdated = true; // Boolean variable
//Example: Type Annotation of Parameters
function display(id, fullName) {
    console.log("display:: Id = " + id + ", Name = " + fullName);
}
//Example: Type Annotation in Object
var employee;
function setEmployee(e) {
    console.log("setEmployee :: Id = " + e.id + ", Name = " + e.fullName);
    employee = e;
}
;
function getEmployee() {
    return employee;
}
setEmployee({
    id: 100,
    fullName: "Potannagari Ravikumar"
});
var emp = getEmployee();
console.log("getEmployee :: Id = " + employee.id + ", Name = " + employee.fullName);
display(100, 'Ravikumar');
