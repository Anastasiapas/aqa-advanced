let age;
age = 54;
let isNowAdult= age>=18;
let isAdult = true;
let isMinor = false;

if (age >= 18) {
    isAdult = true;
    isMinor = false;
    console.log("It's adult - " + isAdult);
} else {
    isAdult = false;
    isMinor = true;
    console.log("It's minor - " + isMinor);
}