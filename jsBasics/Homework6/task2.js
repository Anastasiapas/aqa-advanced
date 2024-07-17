function ageCheck(age) {
    if (age >= 18) {
        console.log("The person of " + age + " is adult");
        return true;
    } else {
        console.log("The person of " + age + " is minor");
        return false;
    }
}
console.log(ageCheck(25));
console.log(ageCheck(15));