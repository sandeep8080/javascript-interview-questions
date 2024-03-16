# javascript-interview-questions

## CURRYING, INFINITE CURRYING & PARTIAL APPLICATION

Its a technique in which fn(a,b) is converted to fn(a)(b).

### Why do we need currying?

-To avoid passing the same variable again & again
-To create higher order func
-to make your function pure and less prone to error.
It is a checking method that checks if you have all the things before you proceed.
It divides one function into multiple functions so that one handles one set of responsibility.

```
// Implement Sum(1)(2)
function Sum(a) {
  return function (b) {
   return a+b;
  };
}

console.log(Sum(1)(2));

```

```
function Sum(a) {
  return function (b) {
    if (b) {
      return Sum(a + b);
    } else {
      return a;
    }
  };
}

console.log(Sum(1)(2)(3)(4)(5)());
```
