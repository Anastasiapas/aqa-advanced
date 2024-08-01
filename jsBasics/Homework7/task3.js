function divide(numerator, denominator) {
    let result;

    try {
        if (denominator === 0) {
            throw new Error("Denominator is 0");
        }
        if (typeof numerator !== 'number' || typeof denominator !== 'number') {
            throw new Error("Numerator or denominator or both are not numbers");
        }

        result = numerator / denominator;

    } catch (error) {
        console.error("Error: " + error.message);
    } finally {
        console.log("The Task is completed");
        return result;
    }
}

console.log(divide(50, 2));
console.log(divide(36, 0));
console.log(divide('f', 5));

