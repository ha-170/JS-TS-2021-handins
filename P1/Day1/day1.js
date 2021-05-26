// Exercise 2.a)

const names = ["Lars", "Peter", "Jan", "Bo"];
const char = 'a';

function sortByCharA(n){
    if(n.includes('a')){
        return n;
    }
}

//Filter returns a new array for all elements passing a test/evaluation
function myFilter(array, callback){
    const filteredArray = [];
    for(let i = 0; i < array.length; i++){
        const result = callback(array[i]);
        if(result != null){
        filteredArray.push(result);
        };
    }
    return filteredArray;
};

console.log("2.a) myFilter method: ");
console.log("Unfiltered array: " + names);
console.log("The names containing the letter 'a' are: ");
const newArray = myFilter(names, sortByCharA);
console.log(newArray);

// Exercise 2.b)
function myMap(array, callback){
    return callback(array);
}

function cbForMap(tempArray){
    const resultArray = [];
    tempArray.forEach(element => {
        if (element.includes(char)){
            resultArray.push(element);
        }
    })
    return resultArray;
}
console.log("2.b) myMap method: ");
console.log(myMap(names, cbForMap));

// Exercise 3)
console.log("3) ");
console.log(names)

const newArray1 = names.filter(function(element) {
    const filteredArray = [];
    if (element.includes(char)){
        filteredArray.push(element)
    }
});

Array.prototype.myFilter = function(callback){
    const filteredArray = [];
    for(let i = 0; i < this.length; i++){
        filteredArray.push(callback(this[i]));
    }
    return filteredArray;
}

// 4.a) 
console.log("4.a) ")
console.log(names.join())
console.log(names.join(" "))
console.log(names.join("#"))

// 4.b) 
const numbers = [2, 3, 67, 33];

function sum(accumulator, current){
    return accumulator + current;
}

let result = numbers.reduce(sum);
console.log("4.b)");
console.log("Sum of all numbers: ");
console.log(result);

// 4.c)
const members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22}]

function averageAgeFunc (accumulator, member, index) {
    if (index === members.length - 1) {
        return (accumulator + member.age) / members.length;
    }
    return accumulator + member.age;
}

let averageAge = members.reduce(averageAgeFunc, 0);
console.log("4.c)");
console.log("The average age of the members is: ");
console.log(averageAge);

// d)
const votes = [ "Clinton","Trump","Clinton","Clinton","Trump","Trump","Trump","None", "Hassanain", "Hassanain", "Hassanain", "Hassanain", "Hassanain"];

// Løsning 1.
const a = {}
function numberOfVotes(a, vote){
    if(vote in a){
        a[vote]++;
    } else{
        a[vote] = 1;
    }
    return a;
}

const voteResult = votes.reduce(numberOfVotes, a);
console.log("4.d) ");
console.log("The election results are: ");
console.log(voteResult); 

// Løsning 2
const election = votes.reduce(function (a, vote) {
    if (vote in a) {
      a[vote]++
    }
    else {
      a[vote] = 1
    }
    return a
  }, {})
console.log(election)

// Løsning 3 med arrow function
const arrow = votes.reduce((a, vote) => {
    if (vote in a) {
        a[vote]++
      }
      else {
        a[vote] = 1
      }
      return a
    }, {})
console.log(arrow)

// 5 Closure:
console.log("CLOSURE: ")
console.log("5.b ")

const makePerson = function (){
    const person = {
        name : '',
        age : ''
    };
    function changeName(p){
        person.name = p;
    };
    function changeAge(p){
        person.age = p;
    };
    return{
        setName : (p) => {changeName(p)},
        setAge : (p) => {changeAge(p)},
        getInfo : () => {return person},
    }
};

const person1 = makePerson();
person1.setName("Hans");
person1.setAge(39);
console.log("Person 1 is: ")
console.log(person1.getInfo());

let person2 = makePerson();
person2.setName("Peter");
person2.setAge(44);
console.log("Person 2 is: ")
console.log(person2.getInfo());

person2.setAge(45);
console.log("Now person 2 is 45 years old: ")
console.log(person2.getInfo());