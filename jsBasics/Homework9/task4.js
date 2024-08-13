const person = {
    firstName: "John", lastName: "Scott", age: 56
}

person.email = "test@test.com";
delete person.age;

console.log(person);