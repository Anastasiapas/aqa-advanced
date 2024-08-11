const users = [
    {name: "Mike", age: 45, country: "UK", married: false},
    {name: "Helen", age: 34, country: "Austria", married: true},
    {name: "Tom", age: 61, country: "Kenia", married: false},
]
for (const personalInfo of users){
    const{name, age, country} = personalInfo;
    console.log(personalInfo);
}


