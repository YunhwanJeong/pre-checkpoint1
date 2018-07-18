# getFullName

Write a function called 'getFullName' that takes in an object which has this structure:

```javascript
var person = {
  name : {
    first : "Alyssa",
    middle: "P.",
    last: "Hacker"
  },
  age : 26
};
```

and returns the person's full name.

```javascript
getFullName(person); //"Alyssa P. Hacker"
```

Note: some person objects passed in may be missing a middle name. In such cases, the function should return the first and last name separated by 1 space.

Example:
```javascript
var personB = {
  name: {
    first: "Ben",
    last: "Bitdiddle"
  },
  age: 34
};

getFullName(person); //"Ben Bitdiddle"
```

- input: object with name object with first, middle and last properties. Middle may be omitted, and age property
- output: a string with the full name, which may or may not contain the middle name (or initial), with space separating names
