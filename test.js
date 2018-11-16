var age=30
var name='Cristina'
var ismom=true
var numbers=[1,2,3,4,5]
var person={
    name:"Ana",
    age:30,
    childs:[{name:"andrei", age:10},"simona"]
}
var person1={
    name:"Mia",
    age:30,
    childs:[{name:"andrei", age:10},person]
}
var persons=[person,person1]
person.name="andreea"
person.city="bucuresti"
console.log(name+" "+"is"+" "+age+" and is "+ismom+" that she is a mom.")
console.log("ani" + (age+5))
console.log(person.name, person.city)

function getBirthYear(age){
     return 2018-age
}

var by=getBirthYear(28)
console.log("anul nasterii e " + by)

by="1990"

if(by>1990){
    console.log("esti milenial")

} else if (by===1990){ // sunt acelasi numar si acelasi tip de date ; egalitate in java script
    console.log("nu castigi premiu")
} else {
    console.log("esti batran rau")
}

for (i=0;i<numbers.length;i=i+1){
    console.log(numbers[i])
if (numbers[i]===2){
    numbers[i]++
}
}

for (var number of numbers) {
    console.log(number)
}

console.log("\n")
var i=0
do {
    console.log(numbers[i])
    i++
} while (i<numbers.length)

console.log("\n")

  i=0
var shouldPrint=false
while (i<numbers.length && shouldPrint!==true){
    console.log(numbers[i])
    i++
}
