# PROTOTYPAL INHERITANCE IN JAVASCRIPT

To understand Prototype we need to first understand what is prototypal inheritance & how it works.

- JavaScript implements inheritance by using **Objects**.
- Whenever we create any objects, arrays, variables, or functions some inbuilt properties and methods are attached to our declaration at runtime.
- Under the hood, the JS engine assigns these hidden properties via the **Prototype Object called Prototype or \_\_proto\_\_**
- Basically via prototype one object is able to access the methods and properties of another object.
- **Both prototype and **proto** are same**

## Difference between prototype Vs \***\*proto\*\***

- For Constructor function (inbuilt or declared Explicitly) or any normal function → **prototype works**
- For any variable/instance ⇒ \***\*proto\*\***
- Note: For Array functions: **does not have a default prototype property**

```js
// For declared variables
const someArray = [];
someArray.__proto__; // prototype object
someArray.prototype; // undefined

Array.prototype; // prototype object
Array.__proto__; // undefined

// Arrow function
const someArrowFunction = () => {}; //
someArrowFunction.prototype; // undefined
```

[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
