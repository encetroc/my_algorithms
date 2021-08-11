## Javascript, must know

### What is a closure
A closure is the fact that a function has access to variables available in the outer function where she was created.  
Variables in the outer function are available even after it has returned.  
using closures and IIFE you can make variables inside a function private.  
```javascript
function f2() {
    for (var i=0; i<3; i++) {
        setTimeout(function() {console.log(i)}, 1000)
    }
}
// print out 3 3 3
// solution we can use let instead of var or bind
```
<hr>

### What is hoisting
Hosting is when javascript moves function declarations and variable declarations to the top of the file.  
Arrow functions, variable initialization and `const`/`let` are not hoisted.  
<hr>

### Callback vs promise
`Callback` is when you pass a function as an argument to another function in order to make it possible for the second function to call the first function whenever necessary.  
`Promise` a data structure that makes it possible to continue executing your code while your variable is being retrieved, as soon as your variable is resolved or rejected your code can continue executing everything that depends on the promise.
<hr>

### How does "this" work / context
`this` key word can be used inside a function and it refers to the object by which the function has bee called, you can make the `this` key word always refer to a certain object by using `bind`, or you can use `call` or `apply` to determine the referred object only once.
```javascript
var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function(){
        console.log(this.registrationNumber + " " + this.brand);
    }
}
var myCarDetails = car.displayDetails.bind(car)
var myCarDetails = car.displayDetails.bind(car, "Vivian")

// call and apply
var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota"
}
function displayDetails(ownerName) {
    console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
}
displayDetails.apply(car, ["Vivian"])
displayDetails.call(car, "Vivian")
```
<hr>

### What is prototype / inheritance
Prototype is an inheritance system for javascript, you can use it to make an new object inherit from an other object.  
You can use `prototype` to add new methods to an object.  
You can also use `Object.create` to create a new object with the prototype set to the object passed to `Object.create`.  
In ES6 you can use `extends`.
<hr>

### What is a scope
A scope is how variables are accessed in javascript, each function create its own new scope, there is no block level scopes in javascript.  
inner scopes have access to outer scopes but not the opposite.
<hr>

### IIFE
An immediately invoked function expression is when you declare a function and call it right away. most of the time it is used to make variables inside the function private and inaccessible from outside the function.  
Used also in the Modules design pattern.
<hr>

### Module pattern
Module pattern is organizing related functionalities into modules, each module can be in it's own file. Functionalities are the encapsulated inside a class or a function and are made private. Finally you expose methods that makes it possible for other modules to use functionalities from your module.
<hr>

### Constructor functions vs factory functions
Constructor functions are normal function but used in conjuction with `this` key word and the `new` key word to create new objects.  
Factory function are normal functions that return new objects without using `new` nor `this` key words.
<hr>

### Functional programming
It is about using pure functions whenever it is possible, it make your code clean, you will have less code, more abstraction and a reduction of errors. 
We can talk about side effects.
<hr>

### Function composition / Function currying
Function composition is when the output of a function is the input of another function.  
Function currying is when a function doesn't take all it's arguments at once, it starts by the first argument, returns a function that accepts a second argument, that returns a function that receives the third argument ... until the last function that returns the final value.
<hr>

### Popular patterns
- Singleton: when have a functionality that should be instantiated only once
- Facade: when hide all the complicated functionalities from the user and only expose to them what they need in a simple way
- Bridge: when you make parts of your functionalities interchangeable
- Strategy: when you have functionalities that are a bit complicated to use and you make them easier to use by exposing them in different forms
- Observer: or pub/sub is when you have a subject, and observers that subscribe to the subject, those observers are gonna be able to receive data from the subject whenever it changes

### Some ES6 features
let, const, arrow functions, this, template literals, default params, object literals, rest, spread, destructuring

## React, must know
Unidirectional data flow, props vs state, Lift state up, Controlled vs uncontrolled, Importance of keys, useEffect hook, What are hooks, Context, Higher order component, Render props.

### Custom hooks
To use if you wanna encapsulate reusable functionalities.  
```javascript
function useHover() {
    const [value, setValue] = useState(false)
    const ref = useRef(null)
    const handleMouseOver = () => setValue(true)
    const handleMouseOut = () => setValue(false)

    useEffect(() => {
        const node = ref.current
        if (node) {
            node.addEventListener('mouseover', handleMouseOver)
            node.addEventListener('mouseout', handleMouseOut)
            return () => {
                node.removeEventListener('mouseover', handleMouseOver)
                node.removeEventListener('mouseout', handleMouseOut)
            }
        }
    }, [])

    return [ref, value]
}
function App() {
    const [hoverRef, hovered] = useHover()
    const style = {
        backgroundColor: hovered? "red" : ""
    }
    return <div ref={hoverRef} style={style}></div>
}
```
<hr>

### refs / useRef
Makes it possible to directly access DOM elements. contrary to `useState`, `useRef` doesn't produce a rerender, because it is separate from the render cycle.
```javascript
const inputRef = useRef()
useEffect(() => {
    inputRef.current.focus()
}, [])
return <input ref={inputRef}/>
```
<hr>

### React.memo
Makes a component rerender only if its props are changing.  
```javascript
const MyComponent = React.memo(function() => {
    // some logic
    return
})
```
<hr>

### useCallback
When you want a function to stay the same in memory even if the component rerenders. When used in conjunction with `React.memo` your child component wont rerender if he is receiving a function from the parent a prop.
```javascript
function someFunction() {}
const memoizedFunction = useCallback(someFunction, [])

return <MyChildComponent func={memoizedFunction} />
```
<hr>

### useMemo
Momoizes the value of a function so that your function doesn't have to actually run to return a value.  
```javascript
const arr = [1,2,3,4,5,6,7,8,9]
function largestNumber(array) {
    return Math.max(...array)
}
const memoizedValue = useMemo(() => largestNumber(arr), [arr])

return <>
    <h1>Largest number: {{memoizedValue}}<h1/>
</>
```