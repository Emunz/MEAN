//  --------------- 1 ------------
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function printStudents(arr){
    for(var i = 0; i < arr.length; i++){
        console.log("Name: " + arr[i].name + ", Cohort: " + arr[i].cohort)
    }
}

printStudents(students)

// ------------- 2 ----------------

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 function printUsers(object){
     for(var person in object){
         console.log(person.toUpperCase())
         for(var i = 0; i < users[person].length; i++){
             var nameLength = users[person][i].first_name.length + users[person][i].last_name.length
             console.log((i + 1) + " - " + users[person][i].first_name + ", " + users[person][i].last_name + " - " + nameLength)
         }
     }
 }

 printUsers(users)