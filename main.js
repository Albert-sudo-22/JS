function add(a,b){
    console.log(a+b)
    return a + b
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


    console.log(myString)
    console.log(myArray)
    console.log(text)
    console.log(person.fullName())

    return myString
}