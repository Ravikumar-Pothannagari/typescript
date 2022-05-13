//Example: Type Annotation in TypeScript

var age: number = 32; // number variable
var fullName: string = "John";// string variable
var isUpdated: boolean = true;// Boolean variable


//Example: Type Annotation of Parameters
function display(id: number, fullName: string) {
    console.log("display:: Id = " + id + ", Name = " + fullName);
}

//Example: Type Annotation in Object
var employee: {
    id: number;
    fullName: string;
};

function setEmployee(e: any) {
    console.log("setEmployee :: Id = " + e.id + ", Name = " + e.fullName);
    employee = e;
};

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