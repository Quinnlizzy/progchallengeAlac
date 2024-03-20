// Each person in the set of people has 2 properties:
// A name, An age
// 4 hard coded users:
// Alice, age 20 // Bob, age 25 // Carol, age 30 // Dave, age 35

let users = [
    {Name: 'Alice', Age: 20},
    {Name: 'Bob', Age: 25},
    {Name: 'Carol', Age: 30},
    {Name: 'Dave', Age: 35},
    {Name: 'Richard', Age: 34},
    {Name: 'Eve', Age: 18},
    {Name: 'Frank', Age: 18}
]

// 1) Calculate and output the average age

//start w/ func for total age
let totalAge = 0;

function calculateTotalAge(users) {
    totalAge = 0;
    for (let i = 0; i < users.length; i++) {
        totalAge += users[i].Age;
    }
    return totalAge;
}

calculateTotalAge(users);
console.log(totalAge);

let averageAge = 0;
//then cal average age for users
function calculateAverageAge(users) {
    averageAge = calculateTotalAge(users) / users.length;
    return averageAge;
}

calculateAverageAge(users);
console.log(averageAge);


// The oldest person in the collection

let oldestPerson = users[0];

function calculateOldestPerson(users){
    for (let i = 0; i < users.length; i++) {
        if (users[i].Age > oldestPerson.Age) {
            oldestPerson = users[i];
        }
    }
    oldestPerson = oldestPerson.Name;
    return oldestPerson.Name;
}

calculateOldestPerson(users);
console.log(oldestPerson);

// The youngest person in the collection

let youngestPerson = users[0];

function calculateYoungestPerson(users){
    for (let i = 0; i < users.length; i++) {
        if (users[i].Age < youngestPerson.Age) {
            youngestPerson = users[i];
        }
    }
    youngestPerson = youngestPerson.Name;
    return youngestPerson;
}

calculateYoungestPerson(users);
console.log(youngestPerson);


let userList = document.getElementById('userList');
    users.forEach(user => {
        let userDiv = document.createElement('div');
        userDiv.textContent = `${user.Name}, ${user.Age}`;
        userList.appendChild(userDiv);}
    );



let renderAverageAge = document.getElementById('averageAge');
renderAverageAge.textContent = `The average age of our users is ${averageAge}`;

let renderOldestPerson = document.getElementById('oldestUser');
renderOldestPerson.textContent = `The oldest user is ${oldestPerson}`;

let renderYoungestPerson = document.getElementById('youngestUser');
renderYoungestPerson.textContent = `The youngest user is ${youngestPerson}`;
//

