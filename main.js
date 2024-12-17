function add(a,b){
    console.log(a+b)
    document.getElementById("demo").innerHTML = a + b
}

function checkPrime(n) {
    if (n < 2) {
        console.log('not prime');
        return;
    }
    if (n === 2) {
        console.log('is prime');
        return;
    }
    if (n % 2 === 0) {
        console.log('not prime');
        return;
    }
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            console.log('not prime');
            return;
        }
    }
    console.log('is prime');
}

function createObj() {
    const person = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue",
        myCars: {
            car1:"Ford",
            car2:"BMW",
            car3:"Fiat"
          },
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }
      };
    
      person.nationality = "English"
      delete person.eyeColor
    
      
      let text = "";
      for (let x in person) {
          text += person[x] + " "
        }
    
        
    const myArray = Object.values(person);
    let myString = JSON.stringify(person);
    
    let attribute = "";
    for (let x in person) {
        attribute += person[x];
    }

    /*console.log(myString)
    console.log(myArray)
    console.log(text)
    console.log(person.fullName())*/

    document.getElementById("demo").innerHTML = attribute
}

function tempString(){
let header = "Template Strings";
let tags = ["template strings", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;

for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;

document.getElementById("demo").innerHTML = html
}

function sort(){
    const points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return a - b});
    //points.sort(function(a, b){return b - a});

    console.log(Math.max.apply(null,points))

    console.log(points)
    document.getElementById("demo").innerHTML = points
}

function getRndInteger(min, max) {
    document.getElementById("demo").innerHTML = Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function destructure(){
    // Create an Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
  };
  
  // Destructuring
  let {lastName, firstName} = person;

  //console.log(firstName + " " +lastName)

  // Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  // Destructing
  let html = `<ul>`
  let text = ""
  for (const [key, value] of fruits) {
    text += key + " is " + value + "\n"
    html +=`<li>${key} is ${value}</li>`;
  }
  html += `</ul>`;

  console.log(text)
  document.getElementById("demo").innerHTML = html
}

arrow = (a, b) => { 
    document.getElementById("demo").innerHTML = a - b;
}

class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      const date = new Date();
      return date.getFullYear() - this.year;
    }
}
  
  const myCar = new Car("Ford", 2014);
  //document.getElementById("demo").innerHTML =
  //"My car is " + myCar.age() + " years old.";


  async function myDisplay() {
    let myPromise = new Promise(function(resolve, reject) {
      resolve("I love You !!");
      reject("I hate this");
    });
    document.getElementById("demo").innerHTML = await myPromise;
  }


  function mOver(obj) {
    obj.innerHTML = "Thank You"
  }
  
  function mOut(obj) {
    obj.innerHTML = "Mouse Over Me"
  }

  function mDown(obj) {
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "Release Me";
  }
  
  function mUp(obj) {
    obj.style.backgroundColor="#D94A38";
    obj.innerHTML="Thank You";
  }

  document.getElementById("myBtn").addEventListener("click", tempString);
  document.getElementById("myBtn").addEventListener("click", myFunction);

  function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }
  function myFunction() {
    alert ("Hello World!");
  }