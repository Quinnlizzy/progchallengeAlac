// Each person in the set of people has 2 properties:
// A name, An age
// 4 hard coded users:
// Alice, age 20
// Bob, age 25
// Carol, age 30
// Dave, age 35

let users = [
    {Name: 'Alice',
     Age: 20},
    {Name: 'Bob',
     Age: 25},
    {Name: 'Carol',
     Age: 30},
    {Name: 'Dave',
     Age: 35}
]

// Calculate and output:
// The average age
let totalAge = 0;
for (let i = 0; i < users.length; i++) {
    totalAge += users[i].Age;
}
let averageAge = totalAge / users.length;
console.log(averageAge);

// The oldest person in the collection
// The youngest person in the collection