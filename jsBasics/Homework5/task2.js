const averageGrade = 90;

switch (true) {
    case averageGrade < 60:
        console.log("Average grade is 'Unsatisfactory'");
        break;
    case averageGrade <= 70:
        console.log("Average grade is 'Satisfactory'");
        break;
    case averageGrade <= 80:
        console.log("Average grade is 'Good'");
        break;
    case averageGrade <= 90:
        console.log("Average grade is 'Very Good'");
        break;
    default:
        console.log("Average grade is 'Excellent'");
}