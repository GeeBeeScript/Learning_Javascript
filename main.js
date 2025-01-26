// Javascript extras

// "map" array method: It does not change the size of the array(unlike filter).
// It uses the values from the original array when making the new one.
// const workshopWorkers = [
//     {
//         name: "David",
//         age: 27,
//         specialty: "Electronics"
//     },
//     {
//         name: "Emma",
//         age: 38,
//         specialty: "Software"
//     }
// ]

// const futureAge = workshopWorkers.map(function (item) {
//     console.log(item.age + 5);
//     return "ok"
// })

// console.log(futureAge);

// This shows a method for getting unique values from an array.

// const workshopWorkers = [
//   {
//     name: "David",
//     specialty: "Electronics",
//   },
//   {
//     name: "Emma",
//     specialty: "Electronics",
//   },
//   {
//     name: "Moses",
//     specialty: "Mechanical components",
//   },
//   {
//     name: "Jacob",
//     specialty: "Welder",
//   },
//   {
//     name: "Pascal",
//     specialty: "Welder",
//   },
//   {
//     name: "Rabiu",
//     specialty: "Mechanical components",
//   },
//   {
//     name: "Hope",
//     specialty: "Electronics",
//   },
// ];

// const allSpecialties = ["all", ...new Set (workshopWorkers.map(item => item.specialty))]
// console.log(allSpecialties);

// const con = document.querySelector(".con")
// con.innerHTML = allSpecialties.map((item) => {
//     return `<button>${item}</button>`
// }).join("")

// Dynamic object keys

// const people = {
//     // You cannot name a key in objects using a dash "-" in between
//     // letters.
//     // first-batch: ["John", "David", "Mike"]
//     //An option could be to turn the the key into a string, but then the
//     // key name would not be accessible using dot notation. We can access
//     // this string key using square bracket notation
//     "first-batch": ["John", "David", "Mike"]
// }

// console.log(people["first-batch"]);

// // A way to set object keys to be dynamic is,
// let appState = "loading"
// appState = "error"
// const keyName = "food"

// const app = {
//     // We can decide to set an object item whose key changes, by using this
//     // syntax. This syntax denotes that the variable in the square bracket
//     // is allowed to change.
//     [appState]: true,
//     userName: "Rebecca"
// }

// console.log(app);
// // This will return an error
// // console.log(app[userName]);
// // This can be used for adding new items into the object. It can be used
// // to re-assign existing object values, when used the right way.
// app[keyName] = "rice"
// // This will return an error
// // app[userName] = "Hope"
// // This will work
// const x = "userName"
// app[x] = "Princess"

// console.log(app);
// // This will return the value of the dynamic "[appState]"
// // console.log(app[appState]);

// function updateObjects(key, value) {
//     app[key] = value
//     console.log(app);
// }

// updateObjects("userName", "DiMarco")
// updateObjects(appState, false)
// updateObjects("food", ["Eggs", "Milk", "Beef"])

// Filter and find methods
// Filter - returns a new array, can manipulate the size of the new array(unlike map),
// returns based on condition.
// find - returns a single instance(object), returns first match, if no match returns
// undefined
// With the filter method, you always get an empty array, if there are no items
// that match your condition, whereas in the find method, you get "undefined" if
// no item matches with your condition.

// const people = [
//     {name: "Hope", age: 27},
//     {name: "Majeem", age: 22},
//     {name: "Moses", age: 34},
//     {name: "Sanjay", age: 42}
// ]

// // const youngPeople = people.filter(person => {
// //     return person.age < 30
// // })

// // console.log(youngPeople);

// const daniella = people.filter(item => {
//     return item.name === "Daniella"
// })

// console.log(daniella);

// // find

// const youngPerson = people.find(person => {
//     return person.age <= 30
// })

// console.log(youngPerson);

// Reduce
// The reduce method reduces a set of values to a single value.

// const people = [
//     {name: "Hope", age: 27},
//     {name: "Majeem", age: 22},
//     {name: "Moses", age: 34},
//     {name: "Sanjay", age: 42}
// ]

// // const totalAges = people.reduce((acc, currItem) => {

// //     acc += currItem.age
// //     return acc
// // }, 0)

// // console.log(totalAges);

// let {totalPeople, totalAges} = people.reduce((acc, currItem) => {
//     const {name, age} = currItem
//     acc.totalAges += age
//     acc.totalPeople += 1
//     return acc
// }, {
//     totalPeople: 0,
//     totalAges: 0
// })

// // This is not needed
// totalAges = parseFloat(totalAges.toFixed(1))

// console.log(totalPeople, totalAges)

// Destructuring: It is a faster/easier way to unpack variables from
// arrays/objects.

// Destructuring(Arrays)

const persons = ["Jason", "Rielle", "Victoria", "Miranda", "Cooper"];

// const [jason, rielle, victoria, miranda, cooper] = persons
// console.log(jason, rielle, victoria, miranda, cooper);

// const [jason, rielle, victoria, miranda, cooper, brendan] = persons
// console.log(jason, rielle, victoria, miranda, cooper, brendan);

// const [jason, , , miranda, ] = persons
// console.log(jason, miranda);

// Destructuring(Objects)

// const footballPlayer = {
//     name: "Cristiano Ronaldo",
//     age: 40,
//     jerseyNumber: 7,
//     affiliations: {
//         club: "Al Nassr FC",
//         country: "Portugal national Football Team"
//     }
// }

// Here we named the variable names from the names of the key values in the
// object. This is unlike arrays, where the order matters
// const {name, age, jerseyNumber, stats} = footballPlayer
// console.log(name, age, jerseyNumber, stats);

// const {age, affiliations} = footballPlayer
// console.log(age, affiliations);

// You can rename the variable you want to assign to the value of the key.

// const {age: currentAge, affiliations: currentAff, affiliations: {club: currentClub}} = footballPlayer
// console.log(currentAge, currentAff, currentClub);

// Spread operator, "..." . It allows an iterable to spread/expand individually
// inside a reciever. It allows splitting into single items, and copying them.
// It doesn't reference the values, it copies them.

// const name = "Daniel"

// // "Spreads" the string into individual letters in the array
// const letters = [...name]
// console.log(letters);

// const footballPlayers = ["Ronaldo", "Messi", "Neymar", "Benzema"]
// const basketballPlayers = ["Curry", "Durant", "Davis"]

// Spreads items individually of each array
// const athletes = [...footballPlayers, ...basketballPlayers]
// console.log(athletes);

// Spread items are copied, not referenced

// const athletes = [...footballPlayers, ...basketballPlayers]
// const goodAthletes = [...athletes]
// goodAthletes[2] = "Suarez"
// console.log(athletes, goodAthletes);

// const footballPlayer = {
//     name: "Cristiano Ronaldo",
//     age: 40,
// }

// // You can add new properties, and overwrite properties as well
// const experiencedPlayer = {...footballPlayer, club: "Porto", name: "Pepe"}
// console.log(experiencedPlayer);

// Rest operator, "..." . The rest operator gathers/collects items.  The
// rest operator should always be placed as the last item.

// const vehicleComponents = ["Engine", "Tyres", "Brakes", "Steering wheel"]

// const [engine, ...restOfComponents] = vehicleComponents
// console.log(engine, restOfComponents);

// const footballPlayer = {
//     name: "Cristiano Ronaldo",
//     age: 40,
//     jerseyNumber: 7,
//     affiliations: {
//         club: "Al Nassr FC",
//         country: "Portugal national Football Team"
//     }
// }

// //
// const {jerseyNumber, ...restOfDetails} = footballPlayer
// console.log(jerseyNumber, restOfDetails);

// Array.from . Array.from is not on the Array object prototype(it is most
// likely on the array object). It returns an array object from any object
// with a length property or an iterable. You can also use this to turn a
// nodeList into an array.

// const name = "David"
// const arrayName = Array.from(name)
// console.log(arrayName);

// const items = Array.from({ length: 150 }, (_, index) => {
//     return index
// })

// console.log(items);

// Optional chaining - It can be used as a conditional for objects with multiple
// nested structures, whose degree of nesting are not the same amoung fellow
// key-value pairs. That is, used for objects that may be nested to different
// levels.

// const people = [
//   {
//     name: "Gabriel",
//     location: {
//       street: "456 main street",
//       timezone: {
//         offset: "+7:00",
//       },
//     },
//   },
//   {
//     name: "Declan",
//     location: {
//       street: "334 groove street",
//     },
//   },
//   {
//     name: "Thomas",
//     location: {
//       street: "123 mol street",
//       timezone: {
//         offset: "+4:00",
//       },
//     },
//   },
// ];

// console.log(people);

// people.forEach((person) => {
//   // console.log(person.location.timezone.offset);
//   // A solution could be
// //   console.log(
// //     person.location &&
// //       person.location.timezone &&
// //       person.location.timezone.offset
// //   );
//   //Optional chaining could also be used. This essentially says, "if person
//   // exists, access location, if it exists, access timezone etc". If the value
//   // is not available, it returns "undefined". Here, if the value does not exist,
//   // the "or" statement is called, an the value after the "or" statement acts
//   // as the default value.
//   console.log(person?.location?.timezone?.offset || "hi");
// });

// Callback functions

function upperCase(value) {
  console.log(value.toUpperCase());
}

function reverseString(value) {
  console.log(value.split("").reverse().join(""));
}

function manipulateString(name, cb) {
  const fullName = `${name} Davids`;
  cb(fullName);
}

manipulateString("Justin", upperCase);
manipulateString("Bree", reverseString);

// Callback hell is when you have a pyramid-like structure of nested callback
// functions. This isn't good convention, as it can make good difficult to
// manage. Promises fix this problem.

// Promises. The main purpose of using promises is to avoid callback hell.
// In javascript, a promise is an object that returns a value, which you
// hope to recieve in the future. Promises can be on either of 3 states:
// Pending, rejected, Fufilled. When a promise goes from pending to
// rejected, or from pending to fufilled, it cannot go back (by default)
// to fufilled or pending. Initially, the promise will be on "pending".
// "resolve" and "reject" are default parameter functions available to
// promises. "resolve" can be used to pass in some form of data to the
// application(data can be passed in as an argument to the function, resolve).
// ".then()" is for resolve(), and ".catch()" is for reject(). Another callback
// function is passed into ".then()", usually to use the values from resolve().

// const promise = new Promise ((resolve, reject) => {
//     // resolve("Hello")
//     reject("There was an error")
// })

// console.log(promise);

// promise.then((value) => console.log(value)).catch((error) => {console.log(error)})

const btn = document.querySelector("#random-btn");

btn.addEventListener("click", () => {
  setColor(1000, ".first", "purple")
    .then(
      setColor(3000, "#title", "red").then(() => {
        setColor(2000, "#random-btn", "yellow");
      })
    )
    .catch((err) => {
      console.log(err);
    });
});

function setColor(time, selector, color) {
  const element = document.querySelector(selector);
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(`Selector "${selector}", does not exist`);
    }
  });
}

// Async/await - it allows us to write asynchronous code in synchronous fashion.
// "async" must be present in order to use "await". "async" always returns a
// promise. "await" waits till the promise is settled. "async" can be
// declared using general function declaration or using arrow function.
// If the promise is not returning any data(for example, from resolve()), then
// you do not have to store the await statement in a variable. Async/await is
// a better alternative to chaining multiple ".then()" . A "try-catch" block
// can be used for error handling when using async/await .

// Here is an example:

// const randomExample = async () => {
//     return "Hi"
// }

// async function randFunc () {
//     const result = await randomExample()
//     console.log(result);
//     console.log("Yo");
// }

// randFunc()












// JavaScript functions (separate course)
// function evaluate(a, b, c) {
//     return a + b / c
// }

// console.log(evaluate(1, 2, 3));

// const evaluate = function (a, b, c) {
//     return a + b / c
// }

// console.log(evaluate(1, 2, 3));

// Rest parameter
// function restExample (x, ...y) {
//     console.log("x: " + x, typeof(x));
//     console.log("y: " + y, typeof(y));
// }

// restExample("a","b","c","d","e","f","g")

// const sum = function (x, y) {
//     return x + y
// }

// Arrow functions
// const sum = (x, y) => {
//     return x + y
// }

// const sum = (x, y) => x + y

// const restExample = (x, ...y) => {
//     console.log(x);
//     console.log(y);
// }

// Calling the function "logMe(a, b)" after inputting arguments will result in
// an undefined error of the name "logMe". This is because as far as this
// statement is concerned, "logMe" is now undefined. You should call the function
// using "value()"
// let value = function logMe (a, b) {
//     console.log(a, b);
// }

// logMe(2, 3)

// Nested functions

// function first () {
//     console.log("first function");
//     function second () {
//         console.log("second function");
//     }
//     second()
// }

// first()

// closures

// function outer(x) {
//     function inner(y) {
//         return x + y
//     }
//     return inner
// }

// const outerValue = outer(5)
// console.log(outerValue(4))
// console.log(outerValue(2))

// callback function

// function randomFunc(callback) {
//     callback()
// }

// randomFunc(function () {
//     return "hi"
// })

// function cb(fullName) {
//     return fullName
// }

// console.log(randomFunc(cb));

// Higher order functions are functions that take one or more functions as an
// argument, and or returns a function.

// function getValue(value) {
//     value()
// }

// getValue(function () {
//     return console.log("hi");
// })

// A pure function is a function that produces the same output for the same
// input

// function greetMe(name) {
//     console.log(`Welcome, ${name}`);
// }

// greetMe("Daniella")

// let greeting = "Welcome"

// function greet(name) {
//     return `${greeting} ${name}`
// }

// console.log(greet("Jesse"));
// console.log(greet("Jill"));

// greeting = "Hello"

// console.log(greet("Prince"));

// Immediately Invoked function expressions (IIFE). In IIFEs the code inside
// the function expression get executed immediately after the function is
// defined.

// (function () {
//     console.log("This is an IIFE");
// }) ()

// Recursion occurs when a function calls itself repeatedly. When using
// recursions, you should always have a base condition. A base condition is a
// specified condition to be satisfied in order for the recursion to stop.

// function x () {
//     console.log("hi");
//     x()
// }

// x()

// const x = function y () {
//     y()
// }

// x()

// This is a possible format for a base condition

// function recurse () {
//     if (baseCondition) {
//         // do something
//         return
//     }

//     recurse()
// }

// count = 5

// function setCount() {
//     if (count === 0) {
//         console.log("count is zero");
//         return
//     }
//     console.log("count is being set. Current value: " + count);
//     count--

//     setCount()
// }

// setCount()

// OBJECT ORIENTED PROGRAMMING (separate course)
// It is a style of programming or a programming paradigm. The 4 pillars of
// object oriented programming include, encapsulation, abstraction, inheritance
// and polymorphism. Before oop, procedural programming was mainly used - it
// essentially involved separating your code into functions. Procedural
// programming has the main disadvantage of changing code in various functions
// when a minor adjustment is made, since the functions are inter-dependent.
// OOP, solving this problem, combines a group of related variables into one
// unit - called an object. The variables in objects are called properties.
// and the functions in objects are called methods. For example, the
// localStorage object has a property called length, which gives the length
// of items in the localStorage. It has methods like getItem() and setItem().
// In OOPs we group related variables and functions that operate on them into
// objects(this is called Encapsulation).

// Below is procedural methodology in practice

// let salary = 40000
// let taxPercentage = 7

// function salaryToBePaid(salary, taxPercentage) {
//     return salary - (salary * (taxPercentage / 100))
// }

// console.log(salaryToBePaid(salary, taxPercentage));

// // Below is OOP methodology in practice. Notice how a javascript object
// // (dictionary in python) is used to keep the related variables and functions
// // together. Also in OOPs, your functions tend to have fewer parameters when
// // compared to their procedural counterparts.

// let employeeDetails = {
//     salary: 40000,
//     taxPercentage: 7,
//     salaryToBePaid: function () {
//         return this.salary - (this.salary * (this.taxPercentage / 100))
//     }
// }

// console.log(employeeDetails.salaryToBePaid())

// Abstraction is essentially hiding some of the properties and methods from
// the outside code. This has the advantage of making the code simpler, and
// reducing the impact of future changes on properties and functions.

// Inheritance allows you to eliminate redundant code from multiple objects.
// You can 'inherit' previously defined properties and methods(characteristics
// and functionality) from former objects.

// Polymorphism. "Poly" means "many", and "morph" means "forms". Polymorphism
// means "many forms". Polymorphism helps eliminate long "if-else" or "switch
// -case" statements.

// An object(dictionary equivalent in python) is a collection of key-value
// pairs, and is signified by this '{}' symbol - which is called an object
// literal syntax. In OOP, properties are used to hold values, while methods
// (functions) are used to define logic. Duplicating an object that has a
// method is not advisable(i.e creating multiple objects that have the same
// method), because if there is an error within the method, you'll have to
// fix the error in multiple places. That being said, if an object has at
// least one function, that means it is considered to have 'behaviour', it
// best practice to use a Constructor Function rather than duplicating the
// object. For example:

// This is an object with properties and methods
// const point = {
//     width: 2,
//     location: {
//         x: 0.23,
//         y: 0.79
//     },
//     plot: function () {
//         console.log("Plotted");
//     }
// }

// Duplicating objects with the same method is not advisable
// const point1 = {
//     width: 4,
//     location: {
//         x: 0.43,
//         y: 0.25
//     },
//     plot: function () {
//         console.log("Plotted");
//     }
// }

// Factory Function: We can use this method

// function createPoint (width) {
//     return {
//         // width: 2,
//         // width: width,
//         width,
//         //This is equivalent to width: width. This syntax is from ES6, and is used
//         // when the key and value have the same name. 'location' was removed to
//         // simplify code.
//         plot: function () {
//             console.log("Plotted");
//         }
//     }
// }

// const point1 = createPoint(1)
// console.log(point1);

// Constructor Function. We can also use a constructor function. When defining
// a constructor function, the function name is capitalized. This looks like a
// traditional class, but in javascript, the concept of classes do not exist.
// When instantiating a new object using the constructor function, add the
// keyword 'new' in front of the constructor function name. 'new' creates a
// new object ({}), and 'this' in the constructor function applies to that
// new object. If you don't apply new during instantiation, 'this' will apply
// to the default global object, and in javascript, the default global object
// is the DOMs 'window' object.

// You can decide to use either factory or constructor function syntax.

// function Point (width) {
//     this.width = width,
//     this.plot = function () {
//         console.log("plotted");
//     }
// }

// const point1 = new Point(3)

// Every object, datatype, item in javascript has a property called 'constructor',
// that references the function that was used to create the object.

// console.log(point1.constructor);

// let y = {}
// Behind the scenes, javascript translates it as, let y = new Object().
// Javascript also has other built-in constructors like:
// new String(), which we usually use string literals to represent - "", '', ``
// new Boolean(), we usually use boolean literals to represent - true, false
// new Number(), we use number literals to represent - 1, 2, 3, 4
// Functions are also objects(they are translated as objects by javascript, just
// like other data types).

// function Point (width) {
//     this.width = width,
//     this.plot = function () {
//         console.log("plotted");
//     }
// }

// This function is represented as this constructor function below by javascript
// behind the scenes.

// const point = new Function ("radius", `
//     this.width = width,
//     this.plot = function () {
//         console.log("plotted")
//     }`
// )

// Value types(or primitives) include: Number, String, Boolean, Symbol(ES6),
// undefined, null.
// Reference types include: Object, Function, Array.
// Since function and array are also objects, we have: primitives and objects.

// Primitives

// let x = 5
// let y = x

// x = 10
// console.log(x);
// console.log(y);
// x and y are independent, i.e they behave normally.

// Reference type

// let x = { value: 5 }
// let y = x

// x["value"] = 10

// console.log(x);
// console.log(y);

// They are dependent, as reference types are stored separately in memory,
// and any reassignment goes to the same value goes to that same memory address.
// As such, any change to the values from any variable that has access, will
// result to a change to the values in memory(only one reference). Once that
// is changed, all variables that have access will have their values modified
// (i.e, it does not behave normally).
// Basically, primitives are copied by their value, and objects are copied by
// their reference.

// Another example

// Behaves normally
// let number = 7

// function increase (number) {
//     number++
// }

// increase(number)
// console.log(number);

// obj parameter(not argument) points to 'obj' variable, and changes it(does
// not behave normally, because it is a reference type).
// let obj = {value: 7}

// function increase (obj) {
//     obj++
// }

// increase(obj)
// console.log(obj);

// function Point (width) {
//     this.width = width,
//     this.plot = function () {
//         console.log("plotted");
//     }
// }

// const point1 = new Point()

// // With this method, you can dynamically add new properties (since it return
// // an object).

// // point1.location = {x: 0.74, y: 2.5}
// // You can also use bracket notation
// point1["location"] = {x: 0.74, y: 2.5}

// console.log(point1);

// // To delete a property from an existing object, we can use:

// delete point1["location"]
// console.log(point1);

// Abstraction: To make some methods or properties inaccessible, i.e hide the
// details or complexity and show only the essentials or necessaries.

// The principles of abstraction have been implemented here, as "defaultLocation"
// and "computeOptimalLocation()" are not accessible outside the constructor
// function. They have now become local variables
// function Point (width) {
//     this.width = width

//     let defaultLocation = {x: 0}

//     let computeOptimalLocation = function (factor) {
//         return
//     }

//     this.plot = function () {

//         computeOptimalLocation(0.78)

//         console.log("plotted");
//     }
// }

// To be able to read and set abstracted properties, we can use getters and
// setters

// function Point (width) {
//     this.width = width

//     let defaultLocation = {x: 0}

//     let computeOptimalLocation = function (factor) {
//         return
//     }

//     this.plot = function () {

//         computeOptimalLocation(0.78)

//         console.log("plotted");
//     }

//     Object.defineProperty(this, "defaultLocation", {
//         get: function () {
//             return defaultLocation
//         },
//         set: function (value) {
//             // You can decide to add some error handling
//             if(!value.x || !value.y) {
//                 throw new Error("Invalid Location")
//             }
//             defaultLocation = value
//         }
//     })

// }

// const point1 = new Point(15)
// point1.defaultLocation = {x: 1.7, y: 2.5}
// console.log(point1.defaultLocation);

// point1.plot()

// console.log(point1);

// function StopWatch() {
//     let duration = 0
//     let hasStarted = false
//     let hasStopped = false
//     let getStartTime = 0

//     this.start = function () {
//         if (hasStarted) {
//             throw new Error("Stopwatch has already started")
//         }
//         hasStarted = true
//         hasStopped = false
//         getStartTime = new Date().getTime()
//         console.log(getStartTime / 1000);

//     }

//     this.stop = function () {
//         hasStarted = false
//         if (hasStopped) {
//             throw new Error("Stopwatch has already stopped")
//         }
//         hasStopped = true
//         toSeconds = 1000
//         getCurrTime = ((new Date().getTime()) - getStartTime) / toSeconds
//         duration += getCurrTime
//         console.log(new Date().getTime() / 1000);

//     }

//     this.reset = function () {
//         duration = 0
//         hasStarted = false
//         hasStopped = false
//         getStartTime = 0
//     }

//     Object.defineProperty(this, "duration", {
//         get: function () {
//             return duration
//         }
//     })
// }

// const sw = new StopWatch()

// OOP (separate course)
// OOP is a programming paradigm (style of writing code) that is based on
// the concept of objects. We can use objects to model real-world or abstract
// features, for example, user, to-do list item, html component or data
// structure. Objects can contain data (properties) and code (methods). Objects
// are building blocks of applications, and they interact with one another.
//  OOP was developed with the goal of organizing code, to make it more
// flexible and easier to maintain.
// The four fundamental principles that can guide us toward a good class
// implementation include: Abstraction, Encapsulation, Inheritance and
// Polymorphism.
// Abstraction involvs ignoring or hiding details that don't matter from the user.
// It allows users to get an overview of what we are implementing, without
// going into details that don't matter to them
// Encapsulation essentially involves keeping methods and properties private
// inside a class, so they are not accessible from outside the class.
// Inheritance makes all properties and methods of a certain class, available
// to a child class, forming a hierarchical relationship between classes. The
// child class can also have its own separate properties and methods.
// Polymorphism means that a child class can overwrite the method inherited
// from a parent class.
// The process of creating a new instance from a class or constructor function
// is called, "instantiation". The objects created from a class are called
// "instances".
// PROTOTYPES
// All objects in javascript are linked to a certain prototype object. So, we
// can say that each object has a prototype. The prototype object contains
// methods and properties that all the objects linked to that prototype can
// access and use(this behaviour is called prototypal inheritance). This is
// different from the inheritance pillar in OOP. Basically, objects inherit
// methods and properties from the prototype(this is why it is called
// prorotypal inheritance). This is basically an instance inheriting from a
// class. Objects delegate their behaviour(methods) to the linked prototype
// object. In classical oop(i.e, in normal classes), the methods are copied
// from the class to the object, which is different.
// The 3 ways of implementing prototypal inheritance in javascript include,
// Constructor functions, ES6 classes and the Object.create() method.
// Constructor functions are a technique to create objects from a function.
// This is how built-in methods like Array, map and set are implemented.
// ES6 classes are a modern alternative to the constructor function syntax.
// Behind the scenes, ES6 classes work exactly like constructor functions.
// They are essentially constructor functions with a different syntax.
// ES6 classes do not behave like the classes in normal OOPs.
// Object.create() method is the most straightforward way of linking an object
// to a prototype object. However, it is not as used as the other two methods.
// Arrow functions will not work as a constructor function, because arrow
// functions do not have their own "this" keyword.

// const Student = function (name, idNumber) {
//     console.log(this);
// }

// new Student("Mike", "ide5658")
// When constructor function is created:
// A new empty objected is created, then the function is called, and the "this"
// keyword is set to the newly created, empty object. The newly created object
// is then linked to a prototype. Finally, the object that was created is
// automatically returned from the constructor function.

// const Student = function (name, idNumber) {
//     // Instance properties
//     this.name = name
//     this.idNumber = idNumber

//     // Instance method: This is bad practice. You should never create a method
//     // inside of a constructor function. Instead, prototypes and prototypal
//     // inheritance should be used.
//     // this.calcGrade = function () {
//     //     return "calculated grade"
//     // }
// }

// const mike = new Student("Mike", "ide5658")
// console.log(mike);
// const jason = new Student("Jason", "fe6342")
// const deborah = new Student("Deborah", "td7243")

// const david = "David"

// console.log(jason instanceof Student);
// console.log(david instanceof Student);

// console.log(Student.prototype);

// Student.prototype.calcGrade = function () {
//     console.log("Grade");
// }

// console.log(jason.calcGrade());

// // To observe the content of the protype property of the constructor function,
// // we can get any instance, and add ".__proto__"

// console.log(deborah.__proto__);
// // Student.prototype is the prototype to be used by all the objects that
// // are created with the "Student" constructor function.
// console.log(deborah.__proto__ === Student.prototype);
// // Another way to check:
// console.log(Student.prototype.isPrototypeOf(deborah));
// console.log(Student.prototype.isPrototypeOf(jason));
// console.log(Student.prototype.isPrototypeOf(Student));

// // You can set properties on prototypes as well
// Student.prototype.yearOfEntry = 2022
// // console.log(jason, mike);
// // This property is not directly in the object(its in the prototype). So this
// // is not its "own" property. "Own" properties are the ones declared directly
// // on the object itself(excluding inherited properties).
// console.log(jason.yearOfEntry, mike.yearOfEntry);

// // To check whether the property is an "own" property:
// // console.log(jason.hasOwnProperty("name"));
// // console.log(jason.hasOwnProperty("yearOfEntry"));

// // Person.prototype is not the prototype of Person, but
// // Person.prototype.constructor, i.e, the constructor of Person.prototype is
// // Person()(i.e, the Person constructor function).
// // console.log(Student.prototype.constructor);
// // console.dir(Student.prototype.constructor)

// // Sidenote: "this" is set to the new empty object. "this.name = name" means
// // that particular new object variable of "name" should be assigned to the
// // "name" parameter, passed in the constructor function declaration.

// // This gives you the prototype of the prototype object of the constructor
// // function(This will give object.prototype, i.e the prototype of the "Object"
// // constructor itself, since every javascript object has a prototype).
// console.log(mike.__proto__.__proto__);
// // This will give 'null', as Object.prototype is the top of the scope chain (
// // or prototype chain)
// console.log(mike.__proto__.__proto__.__proto__);

// // This is equivalent to new Array()
// const arr = [1, 2, 3, 4, 3, 4, 3, 2, 4, 1]
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

// // Don't get too much in the habit of doing this because, javascript may
// // release an update with this same method name.
// Array.prototype.unique = function () {
//     return [...new Set(this)]
// }

// console.log(arr.unique());

// // Exercise

// function Car(make, speed) {
//     this.make = make
//     this.speed = speed
// }

// Car.prototype.accelerate = function () {
//     this.speed += 10
//     console.log(`${this.speed}km/hr`);
// }

// Car.prototype.brake = function () {
//     this.speed -= 5
//     console.log(`${this.speed}km/hr`);
// }

// car1 = new Car("BMW", 120)
// car2 = new Car("Mercedes", 95)

// car1.brake()
// car2.accelerate()

// car2.brake()
// car1.accelerate()

// car1.brake()
// car1.brake()

// car2.accelerate()
// car2.accelerate()

// ES6 CLASSES.
// ES6 classes are not like traditional classes in other programming languages.
// They still implement prototypal inheritance behind the scenes.
// These classes are just a special type of functions

// class expression
// const FootballerCl = class {}

// class declaration
// When we instantiate this class, the constructor will automatically be
// called
// class FootballerCl {
//     // This needs to be called "constructor()", that is the syntax
//     constructor(fullName, shirtNumber) {
//         this.fullName = fullName
//         this.shirtNumber = shirtNumber
//     }

//     // Method will automatically be added to prototype property of class.
//     // These are instance methods
//     calcContributions() {
//         console.log("800 goal contributions");
//     }

//     // This is a static method
//     static getFreekicks() {
//         console.log(`${this.name} has no freekicks`);
//     }
// }

// const haaland = new FootballerCl("Erling Haaland", 9)
// console.log(haaland);
// haaland.calcContributions()

// console.log(haaland.__proto__ === FootballerCl.prototype);

// FootballerCl.prototype.score = function () {
//     console.log(`${this.fullName} has scored`);
// }

// haaland.score()

// // classes are not hoisted. classes are first class citizens(they can be passed
// // into functions as argument, and they can be returned from functions) - this
// // is because in javascript, they are functions with a different syntax.
// // classes are executed in strict mode.

// // Static methods are methods that are applied to the constructor, and not the
// // prototype of the constructor. For example, "Array.from()" is a static method
// // applied only to the "Array()" constructor, it is not applied to the
// // prototype. That is why you can't use an array name, e.g: listItem.from().
// // You can only use "Array.from()". This shows that the "from()" method has
// // been passed only to the "Array()" constructor, and not its prototype, since
// // if it were passed to its prototype, all created arrays would have access to
// // it.

// FootballerCl.assist = function () {
//     console.log(`${this.fullName} has given an assist`);
//     console.log(this);
// }

// FootballerCl.assist()
// // This will return an error, since the "assist" method has been passed only
// // to the FootballerCl constructor, and not its prototype.
// // haaland.assist()

// // To add a static method into a class declaration, we add "static" in front
// // of the method name.
// FootballerCl.getFreekicks()

// Object.create() function. In object.create(), there is stiil the idea of
// prototypal inheritance. However, there are no prototype properties involved,
// and also no constructor functions. We can use object.create() to manually
// set the object of the prototype to any object we want.

// const coachProto = {
//     getTrophies () {
//         console.log(500);
//     },

//     // This "init" function is not like the one in python, this can have any
//     // name. It is just a function that renames the object's properties to
//     // the ones passed in this function's parameter
//     init (name, currentLeague) {
//         this.name = name
//         this.currentLeague = currentLeague
//     }
// }

// // This creates an object instance to variable name "mourinho", and sets it
// // prototype to coachProto
// const mourinho = Object.create(coachProto)
// console.log(mourinho.getTrophies);
// console.log(mourinho);
// mourinho.name = "Jose Mourinho"
// mourinho.currentLeague = "Dutch League"

// console.log(mourinho.__proto__);
// console.log(mourinho.__proto__ === coachProto);

// mourinho.init("Tuchel",  "German")
// console.log(mourinho);

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed}km/hr`);
//   }

//   brake() {
//     this.speed -= 10;
//     console.log(`${this.make} is going ar ${this.speed}km/hr`);
//   }

//   get speedUS() {
//     return `${this.speed * 1.6} mi/h`;
//   }

//   set speedUS(val) {
//     this.speed = val * 1.6;
//   }
// }

// const kia = new Car("Kia", 140);
// kia.accelerate();
// console.log(kia.speedUS);
// kia.accelerate();
// kia.accelerate();
// kia.brake();
// kia.brake();
// kia.speedUS = 2;

// console.log(kia);

// INHERITANCE BETWEEN CLASSES.

// class Athlete {
//     constructor(fullName, age) {
//         this.fullName = fullName
//         this.age = age
//     }

//     introduce () {
//         return `${this.fullName} is ${this.age} years old`
//     }
// }

// Inheritance in action
// Even without adding the constructor method in the child class, and no code
// in the child class, the Footballer class will still inherit from the
// Athlete class, as long as the statement "class Footballer extends
// Athlete" is present.
// class Footballer extends Athlete {
//     constructor (fullName, age, shirtNumber) {
//         // super() is basically the constructor function of the parent class
//         // Calling super() needs to happen first because it is responsible for
//         // creating the "this" keyword in the subclass
//         super(fullName, age)
//         this.shirtNumber = shirtNumber
//     }

//     details () {
//         console.log(`I am ${this.fullName}, my number is ${this.shirtNumber}`);
//     }

//     introduce () {
//         return `Hi, I'm ${this.fullName}`
//     }
// }

// const mbappe = new Footballer("Kylian Mbappe", 26, 9)
// console.log(mbappe.details());
// console.log(mbappe);
// console.log(mbappe.introduce());

// const federer = new Athlete("Roger Federer", 45, 2)
// console.log(federer.introduce());

// Inheritance between "Classes" using Object.create().

// const AthleteProto = {
//     getAge () {
//         console.log(`I am ${this.age} years old`);
//     },

//     init (fullName, age) {
//         this.fullName = fullName
//         this.age = age
//     }
// }

// const hill = Object.create(AthleteProto)
// console.log(hill);

// const FootballerProto = Object.create(AthleteProto)
// const vanDijk = Object.create(FootballerProto)
// console.log(vanDijk);

// FootballerProto.init = function (fullName, age, shirtNumber) {
//     // This will set the objects passed in parameter to constructor function's
//     // parameter
//     AthleteProto.init.call(this, fullName, age)
//     this.shirtNumber = shirtNumber
// }

// FootballerProto.introduce = function () {
//     console.log(`I am ${this.fullName}, and my Number is ${this.shirtNumber}`);
// }

// const jadon = Object.create(FootballerProto)
// jadon.init("Jadon Sancho", 24, 17)
// console.log(jadon);
// jadon.introduce()

// Encapsulation basically means keeping some properties private. You can
// protect some properties and methods by adding an underscore before the
// name of the property or method.

// Encapsulation: Private class fields and methods. We have:
// Public fields, Private fields, Public methods and Private methods. The idea
// of private and public fields and methods implemented with the syntax below
// is a proposed update, established javascript syntax.

// class Account {
//     // Below is a public field. The variable name does not need to be declared,
//     // only assigned. Public fields will be present on all class intances, but
//     // they will not be present on the class' prototype.
//     locale = navigator.language

//     // private field. Denoted by starting variable or method name with "#".
//     // private fields cannot be accessed outside the class.
//     #chargeHistory = [70, -50]
//     // Since the pin is passed in the constructor function, and we want to make
//     // it private (which can only be done outside the constructor function),
//     // we can define the variable without assigning it
//     #pin

//     constructor(fullName, currency, pin) {
//         this.fullName = fullName
//         this.currency = currency
//         // pin here is now a protected property, that is, you or others working
//         // with this code later know not to access it outside the class
//         // this._pin = pin
//         // To make the pin private,
//         this.#pin = pin
//     }

//     // _approveLoan is now a protected property. Note that adding an underscore
//     // to denote a protected property is not javascript syntax. It is a convention
//     // to physically deonte protected properties, and not syntax.
//     _approveLoan(val) {
//         return true
//     }

//     // This is a public method. We can say that this method is part of the public
//     // interface of the class.
//     getCurrency () {
//         console.log(`This account's currency is ${this.currency}`);
//     }
// }

// const acc1 = new Account("David Daniel", "USD", 4347 )

// This will return an error message, because it is a private field, and should
// not be accessed outside the class.
// console.log(acc1.#chargeHistory);

// Method chaining. We can chain methods using the following syntax.

// class Account {
//     // Below is a public field. The variable name does not need to be declared,
//     // only assigned. Public fields will be present on all class intances, but
//     // they will not be present on the class' prototype.
//     locale = navigator.language

//     // private field. Denoted by starting variable or method name with "#".
//     // private fields cannot be accessed outside the class.
//     #chargeHistory = [70, -50]
//     // Since the pin is passed in the constructor function, and we want to make
//     // it private (which can only be done outside the constructor function),
//     // we can define the variable without assigning it
//     #pin

//     constructor(fullName, currency, balance, pin) {
//         this.fullName = fullName
//         this.currency = currency
//         this.balance = balance
//         // pin here is now a protected property, that is, you or others working
//         // with this code later know not to access it outside the class
//         // this._pin = pin
//         // To make the pin private,
//         this.#pin = pin
//     }

//     // _approveLoan is now a protected property. Note that adding an underscore
//     // to denote a protected property is not javascript syntax. It is a convention
//     // to physically deonte protected properties, and not syntax.
//     _approveLoan(val) {
//         return true
//     }

//     // This is a public method. We can say that this method is part of the public
//     // interface of the class.
//     getCurrency () {
//         console.log(`This account's currency is ${this.currency}`);
//     }

//     deposit (amount) {
//         this.balance += amount
//         // returning "this" makes the object chainable.
//         return this
//     }

//     withdraw (amount) {
//         if (this.balance > amount) {
//             this.balance -= amount
//             console.log(`${amount} ${this.currency} has been withdrawn`);
//         }
//         return this
//     }

//     requestLoan (amount) {
//         console.log(this.balance);
//         if (this.balance < amount) {
//             console.log("You request for a loan has been granted successfully");
//         }
//         return this
//     }
// }

// const acc1 = new Account("David Daniel", "USD", 400000, 4347)

// console.log(acc1.getCurrency());

// // Chaining
// acc1.deposit(7000).deposit(8000).withdraw(300).requestLoan(500);

// Exercise
// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   brake() {
//     this.speed -= 5;
//   }

//   accelerate(val) {
//     this.speed += val;
//   }
// }

// class EvCl extends CarCl {
//   #charge;
//   constructor(make, speed, charge) {
//     super(make, speed);
//     this.#charge = charge;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`You are moving at ${this.speed}km/hr`);
//     return this;
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`Your speed is now ${this.speed}km/hr`);
//     return this;
//   }

//   chargeBattery(chargeTo) {
//     let chargeVal = this.#charge;
//     chargeVal += chargeTo;
//     if (chargeVal <= 100) {
//       this.#charge += chargeTo;
//       console.log(
//         `${chargeTo}% has been added to your battery percentage. New Percentage is ${
//           this.#charge
//         }%`
//       );
//     } else {
//       throw new Error(`Charge value is ${this.#charge}%. Add a lower amount`);
//     }
//     return this;
//   }
// }

// const rivian = new EvCl("Rivian", 160, 70);

// console.log(
//   rivian.accelerate().accelerate().brake().accelerate().chargeBattery(30)
// );

// Web Storage API - they are methods of storage provided by the browser.
// Some examples include localStorage and sessionStorage. There are default
// methods for these web storage API (localStorage and sessionStorage). Some
// of which include: setItem, getItem, removeItem, clear.
// sessionStorage keeps the info only while the tab is still open, while
// localStorage keeps the info even when you open and close the browser.
// When you set itemss with the same variable names for local storage, the
// old variable name will be overwritten.

// local storage by defualt saves our values in JSON string. Naturally to save
// items in local storage we should convert to JSON string (we can use
// JSON.stringify()) for this. To convert items from JSON string to the data
// type with which they were originally stored, we can use JSON.parse().

// localStorage.setItem("name", "David")
// sessionStorage.setItem("name", "Blessing")

// localStorage.setItem("name", "Bianca")
// localStorage.setItem("name", "Austin")

// localStorage.setItem("age", 42)
// localStorage.setItem("job", "Digital Marketer")

// const random = localStorage.getItem("job")
// const age = localStorage.getItem("age")
// console.log(random);
// console.log("age:", age);

// localStorage.removeItem("age")
// console.log(localStorage.getItem("age"));
// console.log(localStorage.getItem("name"));

// localStorage.clear()
// console.log(localStorage.getItem("name"));

// const kitchenEquipment = ["spoon", "spatula", "frying pan"]
// // localStorage.setItem("kitchenEquipment", kitchenEquipment)
// localStorage.setItem("kitchenEquipment", JSON.stringify(kitchenEquipment))

// // const values = localStorage.getItem("kitchenEquipment")
// // console.log(values[0])

// const values = JSON.parse(localStorage.getItem("kitchenEquipment"))
// console.log(values[0]);

// localStorage.clear()

// let fruits

// if (localStorage.getItem("fruits")) {
//     console.log("Hi");
//     fruits = JSON.parse(localStorage.getItem("fruits"))
// }else {
//     fruits = []
// }

// console.log(fruits);
// // fruits.push("orange")
// // console.log(fruits);
// fruits.push("pineapple")
// localStorage.setItem("fruits", JSON.stringify(fruits))

// localStorage.clear()

// Events
// addEventListener(typeOfEvent, callbackFunction)

// const button = document.querySelector("#random-btn")
// const h1 = document.querySelector("h1")

// // button.addEventListener('click', function () {
// //     console.log('click')
// //     h1.style.backgroundColor = "purple"
// //     h1.style.color = "white"
// // })

// function addStyling () {
//     let isStyled = h1.classList.contains("purple")
//     if (isStyled) {
//         h1.classList.remove("purple")
//     } else {
//         h1.classList.add("purple")
//     }
// }

// // This is wrong if you call the function, it will run on page load
// // button.addEventListener('click', addStyling())

// // You should make a reference to the function instead
// button.addEventListener('click', addStyling)

// click - fires after full action occurs. 'mousedown' - fires when button
// is pressed. 'mouseup' fires when button is released. 'mouseenter' fires
// when we move onto the area of the element. 'mouseleave' fires when we
// moved out of the area of the element.

// const button = document.querySelector("#random-btn")
// const h1 = document.querySelector("h1")

// button.addEventListener('click', function () {
//     console.log("clicked")
// })

// button.addEventListener("mousedown", function () {
//     console.log("mousedown");
// })

// button.addEventListener("mouseup", function () {
//     console.log("mouseup");
// })

// button.addEventListener("mouseenter", function () {
//     console.log("mouseenter");
// })

// button.addEventListener("mouseleave", function () {
//     console.log("mouseleave");
// })

// // 'keypress' fires when key is pressed. 'keydown' fires while key is pressed
// //  down(held). 'keyup' fires when key is released.

// const input = document.getElementById("name")

// // input.addEventListener("keypress", function () {
// //     console.log("You pressed a key");

// // })

// // input.addEventListener("keydown", function () {
// //     console.log("You pressed a key");

// // })

// input.addEventListener("keyup", function () {
//     console.log("You pressed a key");
//     console.log(input.value);

// })

// The event object argument can be represented as just "e"(if you wish, but
// it is relatively general usage). You can use this event object arguemnt to
// get information about the triggered event. You can use event.type,
// event.currentTarget etc.
// preventDefault() - prevents the default behaviour of the html element from
// occuring.
// A replacement to event, "e", for selecting elements, is 'this' keyword.
// A disadvantage to using 'this' keyword is that you can't use it with
// arrow functions.

// const btn = document.querySelector("button")

// // btn.addEventListener('click', function (e) {
// //     console.log(e);
// // } )

// // btn.addEventListener('click', function (e) {
// //     console.log(e.currentTarget);
// // } )

// btn.addEventListener('click', function (e) {
//     e.currentTarget.classList.add("purple")
//     console.log(e.type);
//     console.log(e.currentTarget);
//     console.log(this);
// } )

// currentTarget - always refers to the element which the event handleer has
// been attached to.
// target - identifies the element on which the event occured.

// Event bubbling and event capturing.
// event bubbling - click element first, then bubbles up - default.
// event capturing - fires at the root, then fires untill reaches target.

// const con = document.querySelector(".con")
// const listItems = document.querySelector("#li-items-con")

// function showBubbling (e) {
//     // console.log("Hi")
//     console.log(`current target - ${e.currentTarget}`)
//     console.log(`target - ${e.target}`)
// }

// function stopPropagation(e) {
//     console.log("click")
//     e.stopPropagation()
// }

// // listItems.addEventListener('click', showBubbling)
// listItems.addEventListener('click', stopPropagation, {"capture": true})
// con.addEventListener('click', showBubbling, {"capture": true})
// document.addEventListener('click', showBubbling, {"capture": true})
// window.addEventListener('click', showBubbling, {"capture": true})

// Form submission(preventing default behaviour, and getting values)

// const form = document.getElementById("form")
// const name = document.getElementById("namevalue")
// const password = document.getElementById("password")

// form.addEventListener('submit', function (e) {
//     console.log("form submitted");
//     e.preventDefault()
//     console.log(name.value);
//     console.log(password.value);

// })

// Traversing the DOM Tree
// childnodes - returns all child nodes, including whitespace which is treated
// as a text node. We have children, firstChild, lastChild etc.

// const result = document.querySelector("#li-items-con")
// const children = result.childNodes
// console.log(children);

// console.log(result.firstChild.textContent);
// console.log(result.lastChild);

// Parent element

// const listItems = document.querySelector(".li-items")
// console.log(listItems.parentElement)

// console.log(listItems.parentElement.parentElement)

// previousSibling, nextSibling both return whitespace

// const first = document.querySelector(".first");
// // This returns whitespace
// // const second = first.nextSibling
// // const second = first.nextSibling.nextSibling;
// const second = (first.nextSibling.nextSibling.style.color = "violet");

// console.log(second);

// const last = document.querySelector(".second-to-last")
// // console.log(last.previousSibling.previousSibling);
// const third = last.previousSibling.previousSibling
// console.log(third);
// console.log(last.nextSibling.nextSibling);

// previousElementSibling, nextElementSibling
// const first = document.querySelector(".first")
// const last = document.querySelector(".second-to-last")

// console.log(first.nextElementSibling);
// first.nextElementSibling.style.color = 'gold'
// console.log(first.previousElementSibling)

// We can use nodeValue or textContent to get the text in an HTML element
// elementIdentifier.nodeValue returns a node list with a value of text and
// length.

// const h1 = document.getElementById("title")
// const item = h1.nodeValue
// // console.log(item);
// console.log(h1.childNodes[0].nodeValue);

// // using textConetnt
// console.log(h1.textContent)

// getAttribute(), setAttribute(). getAttribute() can be used to retrieve any
// attribute such as class, id, href
// const first = document.querySelector(".first")
// // const classValue = first.getAttribute("class")
// const idValue = first.getAttribute("id")
// // console.log(classValue)
// console.log(idValue);
// first.setAttribute('class', 'newly-attributed-class')
// console.log(first)

// className, classList. One of the ways to add a class to an element without
// overwritting the classes present in the element is by using classList.

// const first = document.getElementById("random")
// const classValue = first.className
// // console.log(classValue)

// // re-assigning the class like this overwrites previous class value.
// // first.className = "random-class"
// // console.log(first.className)

// first.classList.add("random-class")
// console.log(first.classList.contains("random-class"))
// console.log(first.className)
// first.classList.remove("random-class")
// console.log(first.className);
// console.log(first.classList.contains("random-class"))

// createElement('element')
// createTextNode('text content')
// element.appendChild(childElement)

// const title = document.querySelector("#title")

// // create empty div
// const randomDiv = document.createElement('div')
// // create text node
// const text = document.createTextNode("random text")
// randomDiv.appendChild(text)
// document.body.appendChild(randomDiv)

// const container = document.querySelector(".con")
// const randomHeading = document.createElement("h1")
// // randomHeading.createTextNode("Hi")
// const textValue = document.createTextNode("Hello")
// randomHeading.appendChild(textValue)

// container.appendChild(randomHeading)
// document.body.appendChild(container)

// // insertBefore('element', 'location')
// document.body.insertBefore(randomDiv, container)

// replaceChild(newElement, oldElement)
// const header = document.querySelector("#title")

// const link = document.createElement("a")
// const text = document.createTextNode("link")

// link.appendChild(text)
// document.body.replaceChild(link, header)

// prepend, innerText

// const h3 = document.createElement("h3")
// h3.innerHTML = `This is a new heading`
// document.body.prepend(h3)

// For removing elements from the DOM, we can use the remove or removeChild
// methods.

// const heading = document.querySelector("h1")

// heading.remove()

// const emptyCon = document.querySelector(".con")
// const italicText = emptyCon.querySelector("i")
// console.log(italicText)

// emptyCon.removeChild(italicText)

// const h1 = document.querySelector("h1")
// const ul = document.querySelector("#li-items-con")

// console.log(h1.textContent)
// console.log(ul.innerHTML)

// const randomSection = document.createElement("section")
// const text = "Text"
// // randomSection.textContent = `<p>${text}</p>`
// randomSection.innerHTML = `<p>${text}</p>`
// document.body.appendChild(randomSection)

// The DOM - Document object Model.

// The window object gives us some browser apis to work with.
// To check the methods and properties available to us on the node object, we
// can use console.dir(objectName)
// There are default methods that we can use to select elements from the DOM.
// Some of which include: .getElementById(), .getElementByClassName(),
// getElememntByTagName, .querySelector() etc.

// const h1 = document.getElementById("title")

// h1.style.color = "red"

// document.getElementById("random-btn").style.backgroundColor = "purple"
// document.getElementById("random-btn").style.fontWeight = "bold"

// getElementsByTagName() returns elements in a node-list, which is an
// array-like format. So we can access individual objects using array index.
// For this node-list, the index and length properties apply, but array-
// methods do not apply.
// const listItems = document.getElementsByTagName("li")
// listItems[2].style.color = "orange"

// getElementsByClassName() returns elements in a node-list, which is an
// array-like format. For this node-list, the index and length properties
// apply, but array-methods do not apply.

// const liItems = document.getElementsByClassName("li-items")
// liItems[0].style.fontSize = "2rem"

// querySelector() can be used to select elements by class, ids and tagnames.
// querySelector() selects only a single element, while querySelectorAll()
// selects all elements with that tagname, id or class.
// This would select only one element with the specified class name, despite
// the fact that there are many. If you plan on selecting all elements
// with the same identifier(classname, id, tagname), you use querySelectorAll().
// listItem = document.querySelector(".li-items")
// console.log(listItem)

// lastListItem = document.querySelector("li:last-child")
// console.log(lastListItem)

// // querySelectorAll() also returns a nodelist, that can be traversed using
// // array methods, such as: forEach, map, filter etc.
// listItems = document.querySelectorAll(".li-items")
// console.log(listItems)

// listItems[3].style.color = "green"
// listItems[3].style.fontWeight = "bold"

// listItems.forEach(function (item) {
//   item.style.fontSize = "2rem"
// })

// console.log(window)
// console.log(document)

// console.dir(document)

// Date object is also part of the built-in objects in javascript

// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December"
// ]

// const days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ]

// const date = new Date('7/2/1996')
// // const date = new Date()
// console.log(date)

// const month = date.getMonth()
// console.log(month)
// console.log(months[month])

// const day = date.getDay()
// console.log(day)
// console.log(days[day])

// const dateSentence = `${days[day]}, ${date.getDate()} ${months[month]} ${date.getFullYear()}`
// console.log(dateSentence)

// document.body.innerHTML = dateSentence

// Math object (or class). It's part of the built-in objects in javascript.
// You don't have to import it before use.

// const number = 7.5012478
// const number = 64
// // const evaluated = Math.floor(number)
// // const evaluated = Math.ceil(number)
// // const result = Math.PI

// // const evaluated = Math.sqrt(number)
// // const evaluated = Math.min(7, 2, 345, 4849)
// const evaluated = Math.min(7, 2, 345, 4849)

// // console.log(result)
// console.log(evaluated)

// Powerful Array methods - they include: forEach, map, filter, find, reduce
// etc. They are used to iterate over arrays. These array methods accept a
// callback function as an argument, and calls callback function against
// each item in the array.

// forEach - does not return a new array.

// const workers = [
//     {name: "Jacob", age: 24, department: "Maintenance"},
//     {name: "Helena", age: 28, department: "Audit"},
//     {name: "Mike", age: 29, department: "HR"}
// ]

// function showRoles (person) {
//     console.log(person.department.toUpperCase())
// }

// workers.forEach(showRoles)

// Passing the function as an anonymous function
// workers.forEach(function (person) {
//     console.log(person.department.toUpperCase())
// })

// map - returns a new array. It does not change the size of the original
// array. It uses the values from the original array, when making the new
// one.

// const workers = [
//   { name: "Jacob", age: 24, department: "Maintenance" },
//   { name: "Helena", age: 28, department: "Audit" },
//   { name: "Mike", age: 29, department: "HR" },
// ];

// const ages = workers.map(function (worker) {
//   console.log(worker);
//   return worker.age;
// });

// const retiredWorkers = workers.map(function (worker) {
//   return {
//     firstName: worker.name,
//     retiredAge: worker.age + 20,
//     department: worker.department,
//   };
// });

// console.log(ages);
// console.log(retiredWorkers);

// const worker = workers.map(function (worker) {
//   return `<h1>${worker.name}</h1>`;
// });

// // displays mapped list to the DOM
// document.body.innerHTML = worker.join("")

// console.log(worker)
// console.log(worker.join(""))

// filter: filter method returns a new array. It can manipulate the size of the
// new array. It returns values based on condition

// const workers = [
//   { name: "Jacob", age: 24, department: "Maintenance" },
//   { name: "Helena", age: 28, department: "Audit" },
//   { name: "Mike", age: 29, department: "HR" },
// ];

// const youngWorkers = workers.filter(function (worker) {
//   return worker.age <= 25
// })

// const checksWorkers = workers.filter(function (worker) {
//   return worker.department === "Audit" || worker.department === "HR"
// })

// console.log(youngWorkers)
// console.log(checksWorkers)

// find - find returns a single instance, on a predefined condition. It
// returns only the first match, if no match, it returns undefined. It is
// useful for getting unique values.

// const workers = [
//   { name: "Jacob", age: 24, department: "Maintenance", id: 1 },
//   { name: "Helena", age: 28, department: "Audit", id: 2 },
//   { name: "Mike", age: 29, department: "HR", id: 3 },
// ];

// const experiencedWorker = workers.find(function (worker) {
//   return worker.age >= 27
// })

// const experiencedWorker = workers.find(function (worker) {
//   return worker.age === 29
// })

// const experiencedWorker = workers.find(function (worker) {
//   return worker.id === 2
// })

// console.log(experiencedWorker)

// reduce - reduce is a very powerful array method. It can actually replace
// find and filter. It reduces the value in the array to a single value. This
// value could be number, array, object etc. It takes in two parameters, the
// first is typically denoted as 'acc' - accumulator(total of all calculations)
// and the second is typically denoted as 'curr' - current(the current iteration
// or value).

// const workers = [
//   { name: "Jacob", age: 24, department: "Maintenance", id: 1, salary: 40000 },
//   { name: "Helena", age: 28, department: "Audit", id: 2, salary: 70000 },
//   { name: "Mike", age: 29, department: "HR", id: 3, salary: 100000 },
// ];

// The value after the comma, determines the data type of the value the reduce
// method wil return at the end of the function. It also determines the initial
// value of the accumulator. The syntax of the reduce method is to return
// the accumulator. The current item represents each iteration of the list.

// const totalSalaries = workers.reduce(function (acc, curr) {
//   console.log(acc)
//   console.log(curr)

//   acc += curr.salary
//   console.log(acc)
//   return acc
// }, 0)

// console.log(totalSalaries)

// Functions are first class objects - They are first class objects mainly
// because they can return a function from a function(closure). Functions can
// be stored in a variable, and they can be passed as an argument to another
// function.

// A Higher Order function accepts another function as an argument or returns
// another function as a result.

// A Callback function is passed into another function as an argument, and
// is executed inside that function. For callback functions, you only want
// to pass the reference to that function, and not invoke it during function
// invocation.

// function morning (name) {
//     console.log(`Good morning ${name}`)
//     return `Good morning ${name}`
// }

// function afternoon (name) {
//     console.log(`Good afternoon ${name}`)
//     return `Good afternoon ${name}`
// }

// function evening (name) {
//     console.log(`Good evening ${name}`)
//     return `Good evening ${name}`
// }

// function sayHi (name, callback) {
//     const personalName = "Blessing"
//     console.log(`Hi ${callback(name)}, my name is ${personalName} `)
//     // callback(personalName)
// }

// sayHi("Success", evening)

// Global scope and local scope.
// Any variable name in the outside code block is said to be in Global scope.
//  Global scope variables can be accessed anywhere in the program.
// Local scope variables names cannot be accessed by outside code block.
// They can only be accessed within the block of code - locality within
// which they are set(for example, variables defined only within functions).
// Note(!very important): if you set a variable in local scope(e.g function),
// without declaring it(with let or const), Javascript just assumes that you
// forgot to declare it, and declares it for you behind the scenes in Global
// scope. So, "age = 75", in the example below would be displayed after
// invoking the function because of this reason. However, if you declare and
// assign the variable in local scope (e.g let age = 75, in a function), and
// try to access it in global scope, even after declaring the function, it
// won't work.

// let name = "Michael"

// function changeName() {
//     name = "Daniel"
//     // age = 75
//     const age = 75
// }

// changeName()

// console.log(age)
// console.log(name)

// const firstValue = 5

// function displayValue () {
//     const firstValue = 14
//     console.log(firstValue)
// }

// console.log(firstValue)
// displayValue()
// console.log(firstValue)

// unary, binary and ternary operators. unary operators have just one operand,
// for example: typeof variableName. 'variableName' here is the operand.
// binary operators have just two operands. for example: name = "Jesse".
// The operands are 'name' and 'Jesse'.
// The ternary operator gives us an option to shorten our logic.

// const value = 2 > 1

// if (value) {
//     console.log("value is true")
// }else {
//     console.log("value is false")
// }

// // The ternary operator equivalent would be

// value ? console.log("value is true") : console.log("value is false")

// // Truthy and Falsy values. Essentially, javascript evaluates and categorizes
// // majority of statements(especially if there are not boolean or conditional
// // statements), are evaluated as either Truthy or Falsy.
// // "", ``, 0, -0, NaN, false, null, undefined are all falsy values. Everything
// // else is Truthy

// const name = "Daniella"
// const value = ""

// if (name) {
//     console.log("Truthy")
// } else {
//     console.log("Falsy")
// }

// // null and undefined both represent, "no value".
// // undefined is basically, 'javascript cannot find a value for this' or
// // * 'the value of this has not been previously defined'. Popular examples:
// // variables without values, missing function arguments, missing object
// // properties.

// // null is usually set by the developer, and represents "no value".
// // null is set by us, but undefined is set by javascript

// // interpreted as 15 + 0
// let num = 15 + null
// console.log(num)

// // This will give a result of NaN(Not a Number)
// let num1 = 15 + undefined
// console.log(num1)

// // When assigning primitive data type values to a variable, any changes are
// // made directly to that value, without affecting the original value.

// // When assigning non-primitive data type values to a variable, it is done
// // by reference, so any changes will affect all the references

// // changes are made only to the value, without affecting original value
// const num1 = 5
// let num2 = num1
// num2 = 7
// console.log(num1)
// console.log(num2)

// // changes made to the value affect all references. Using the spread operator
// // solves this({...variableName})
// const person1 = {age: 27}
// const person2 = person1
// console.log(person1.age)
// console.log(person2.age)
// person2.age = 35
// console.log(person1.age)
// console.log(person2.age)

// Arrays and for loops

// const names = ["David", "Daniel", "Joseph", "Samuel", "Kelvin"]
// const newName = "Victor"
// const newArr = []

// // for loop
// for (let i = 0; i < names.length; i++) {
//     console.log(i)
//     console.log(names[i])
//     newArr.push(names[i])
// }

// console.log(names)
// console.log(newArr)

// const fuel = [4000, 8000, 7000, 12350];
// const food = [1400, 6000, 18000, 22450];

// function calculateExpenses(fuel, food) {
//   let total = 0;
//   for (let x = 0; x < fuel.length; x++) {
//     total += fuel[x];
//   }
//   for (let y = 0; y < food.length; y++) {
//     total += food[y];
//   }

//   if (total > 50000) {
//     console.log("You have spent a lot");
//     return total;
//   }
//   console.log("You're good");
//   return total;
// }

// console.log(calculateExpenses(fuel, food));

// let values = [1, 2, 3]
// let newVal = "random"
// values.concat(newVal)
// console.log(values)

// // Array properties and methods

// let firstNames = ["Daniel", "David", "Henry", "John", "Gideon"];

// // length
// console.log(firstNames.length);
// console.log(firstNames.length - 1)

// // concatenation
// moreNames = ["Richard", "Samantha", "Daniella"]
// allNames = firstNames.concat(moreNames)
// console.log(allNames)

// // Wrong syntax for array concatenation. This will give a data type of string
// anArr = firstNames + moreNames
// console.log(typeof anArr)

// // reverse
// console.log(allNames.reverse())

// // unshift: unshift adds a value as the first item of an array.
// firstNames.unshift("Christian")
// firstNames.unshift("Peter")
// console.log(firstNames)

// // shift is used to remove items from the beginning of the array.
// firstNames.shift()
// firstNames.shift()
// firstNames.shift()
// console.log(firstNames)

// // push() is used to add items to the end of the array
// firstNames.push(4, 76.5, 8)
// firstNames.push(9)
// console.log(firstNames)

// // pop() is used to delete items from the end of the array
// firstNames.pop()
// firstNames.pop()
// firstNames.pop()
// firstNames.pop()
// console.log(firstNames)

// // splice() mutates the original array
// const specificNames = allNames.splice(0, 3)
// console.log(specificNames)
// console.log(allNames)

// String properties and methods
// const value = " Mr David  ";

// This is a string property
// console.log(value.length);

// These string methods
// console.log(value.toLowerCase());
// console.log(value.toUpperCase());
// console.log(value.charAt(2));
// console.log(value.charAt(value.length));
// console.log(value.indexOf("D"));
// console.log(value.trim());
// console.log(value.trim().length);
// console.log(value.startsWith(" M"));
// // Mthod chaining
// console.log(value.trim().startsWith("Mr"));
// console.log(value.includes("vid"))

// // 'slicing' can be used to get specific parts of the string
// console.log(value.slice(0, 5))
// console.log(value.slice(-6))

// Loops allow you to repeatedly run a block of code while a condition has
// been met
// While loop: runs a block of code repeatedly when a condition has been
// satisfied
// For loop
// let i;
// for (i = 0; i < 7; i++) {
//   console.log(i);
// }

// for (let i = 15; i >= 0; i--) {
//   console.log(i);
// }

// let randomVal = 12;

// while (randomVal > 5) {
//   console.log(`Value is ${randomVal}`);
//   randomVal--;
// }

// do while loop runs the code first, and the condition second. This means
// that the condition will run at least once.

// do {
//   console.log(`Value is ${randomVal}`);
//   randomVal--;
// } while (randomVal > 8);

// Switch statements: They can be alternative to "if" statements. You should
// put a break after each case to ensure it "breaks out" of the switch
// statement(to ensure it behaves like an if statement), otherwise all
// conditions below the already satisfied condition will run regardless.
// const value = "Random"
// const value = "";
// switch (value) {
//   case 1:
//     console.log("This is 1");
//     break;
//   case 2:
//     console.log("This is 2");
//     break;
//   case "Random":
//     console.log("This is a separate value");
//     break;
//   default:
//     console.log("Not among options");
// }

// Logical operators: (|| - OR), (&& - AND), !
// const name = "Jude"
// const age = 21

// if (name === "Jude" || age === 21) {
//     console.log("Hell0")
// } else {
//     console.log("okay")
// }

// if (name === "Jude" && age === 21) {
//     console.log("Hell0")
// } else {
//     console.log("okay")
// }

// Conditional statements define conditions to be satisfied in order for an
// operation to be carried out.
// >, <, >=, <=, ==, ===, !=, !===
// "==" checks whether the values are same. "===" checks whether values and
// data type are the same.

// const value = 1 > 2

// if(false) {
//     console.log("Hi")
// }

// const age = 18

// if (age > 18) {
//     console.log("Person is an adult")
// } else if (age === 18) {
//     console.log("Person just became an adult")
// } else {
//     console.log("Person is not an adult")
// }

// const val1 = "4"
// const val2 = 4

// console.log(val1 != val2)
// console.log(val1 !== val2)

// Objects are a collection of properties. They are a collection of properties
// as key/value pairs. We access properties in objects using the dot notation

// const footballer = {
//     fullName: "Lionel Messi",
//     age: 37,
//     married: true,
//     muscular: false,
//     clubsPlayedFor: ["FC Barcelona", "PSG", "Inter Miami"],
//     // You can do this
//     // play: function() {
//     //     console.log("Play Football")
//     // }
//     // You can also do this. This was introduced in ES6
//     play() {
//         console.log("Play Football")
//     }
// }

// console.log(footballer.fullName)
// console.log(footballer.muscular)
// footballer.play()

// footballer.age = 38
// console.log(footballer.age)

// Functions: functions are declared and invoked

// function declaration
// function random() {
//     console.log("random function")
// }

// invoking a function
// random()

// Parameters are placeholders or local variables used in a function
// definition and within the function, to be eventually replaced by actual
// values (arguments), during function invocation.
// All functions without a 'return' by default have a value of 'undefined',
// since the function does not have a * result or a value.
// All code after the 'return' statement in a function will not be run.

// function footballClub(club) {
//   console.log(`My favorite football club is ${club}`);
// }

// You can set up a function with a parameter, and not pass an argument
// during function invocation. It's your choice
// footballCLub()

// footballCLub("Barcelona");
// favClub = footballClub("Barcelona");
// This will return a value of undefined, since the function does not have
// a * value
// console.log(favClub);

// This function has a value.
// function footballCLub(club) {
//   return `My favorite football club is ${club}`;
// }

// favClub_ = footballCLub("Barcelona");
// console.log(favClub_);

// You can assign a function to a variable. In doing so, you can leave the
// name of the function, or you can decide to omit the name. Either way, the
// function will now be recognized and referenced by the name of the variable.

// You can do this
// const multiply = function multiplyValues(val1, val2) {
//   return val1 * val2;
// };

// You can also do this. This is called an anonymous function.
// const multiply = function (val1, val2) {
//     return val1 * val2;
// };

// Right syntax
// console.log(multiply(2, 3));

// This will result in an error of 'not defined'
// console.log(multiplyValues(2, 3));

// You can also store functions in arrays
// const values = ["random", multiply(17.5, 4.28)]
// console.log(values)

// Arrowfunction
// const multiply = (val1, val2) => val1 * val2
// console.log(multiply(1, 2))

// Arrays - [], they are 0 index based. You can store functions and objects
// in an array.

// const kitchenEquipment = ["Spoon", "Pot", "Frying pan", 40, null, undefined]
// console.log(kitchenEquipment)
// console.log(kitchenEquipment[8])
// const favoriteEquipment = kitchenEquipment[2]
// console.log(favoriteEquipment)

// There are 7 total data types in javascript in total. They are divided into
// two broad classes: Primitive and object. The 7 data types are:
// Primitive: String, Number, Boolean, Null, Undefined, Symbol,
// Object: Arrays, Functions, Objects.
// The 'typeof' operator is used to check for the data type.

// let name
// console.log(typeof name)
// console.log(typeof 23.4543)
// console.log(typeof(23.4543))

// Implicit type conversion
//This has to do with javascript converting strings(whose values are numbers)
//to numbers in some cases, where evaluating the numerical operation would
//result in an error, if the values are left as strings. Javascript instead
//converts those string values(which are numbers in strings), to actual
//numbers(implicit type conversion). Even if only one of the values is a
// strings, and the other is a number, Javascript would still convert the
// string to a number. This doesn't work for operations that
//  can be handled both numerically, and in string format(such as '+).
// This also applies vice versa, if a number is added to a string, it would
//become a string.

// const number1 = "20"
// const number2 = "15"
// const number3 = number1 + number2

// console.log(number3)

// let number1 = 24.5679
// let  number2 = 14.435681

// number1 += 5
// number2 -= 4

// console.log(number1)
// console.log(number2)

// number1 /= 3
// number2 *= 4

// console.log(number1)
// console.log(number2)

// number1++
// number2--
// console.log(number1)
// console.log(number2)

// console.log(number1 % 3)

// const number1 = 24.5679
// const number2 = 14.435681

// const add = number1 + number2
// const subtract = number1 - number2
// const divide = number1 / number2
// const multiply = number1 * number2

// console.log(add)
// console.log(subtract)
// console.log(divide)
// console.log(multiply)

//Javascript is a loosely typed language, i.e, we don't have to
//declare the datatype of the variable during variable declaration.

//String concatenation
// const firstName = "Daniel"
// const lastName = "David"

//This is an option
// console.log(firstName + " " + lastName)

//This is another option. It is called using 'template strings'
// console.log(`${firstName} ${lastName}`)

// const values = 'David\'s values'
// console.log(values)

//The difference between 'let' and 'const' for variable declaration is
//that you cannot re-assign 'const', but you can re-assign 'let'
//variables can contain digits, letters, underscore, $
//variables must start with letters, $ or _
//variables cannot start with a number. variables cannot be named with
//default javascript keywords. You can name variables using camelcase or
//underscore syntax

// let $firstValue = "one"
// let _secondValue = "two"
// console.log($firstValue)
// console.log(_secondValue)

//You cannot start with a number
// let 34firstValue = "one"

//This is a declaration, without assignment
// let firstName

// The variable 'firstName' has now been assigned, using assignment
//operator '='
// firstName = "Mitchel"

// Using this is both declaration and assignment
// firstName = "Mitchel"
// console.log(firstName)

// let address, zipCode, state
// address = "ikorodu"
// zipCode = "112434"
// state = "Lagos"
// firstName = "Daniel"
// console.log(address, zipCode, state)
// console.log(firstName)

/* document.write({name: "Daniel"})
alert({name: "Daniel"})
console.log("Hey")
*/

// For single line comments, you use the "//" syntax
// For multi-line comments, you use the "/* */" syntax

/* document.querySelectorAll('.btn').forEach((item) => {
    item.addEventListener('click', function() {
        alert("This is an alert")
    })
})

*/
