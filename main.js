
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
