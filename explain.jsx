// 500 means backend api issue
// 400 end point does not exist
// 404 data no found
// 200 sucessfull
// 201 data created with success

// JSON.parse        => javascript method , string to object
// JSON.stringify => javascript , object to string
// json   => because of express
// json stands for JavaScript Object Notation

// frontend -> req -> backend (json)
// backend -> res -> frontend (json)

// array  =>  [{"class":1},{"class":2}]

//  or object => {"class":1}
// key -value - pair
// data type support
// 1.string
// 2.number
// 3.boolean
// 4.null
// 5.object
// 6.array

// ====================

// Json does not allow
// single qoutes does not allow ''=> ""
// functions
// undefined NaN infinity
// trailing commas

// ====================

let obj = {
  name: "huzaifa",
  age: undefined,
  isStudent: true,
  scores: [95, undefined, 88],
  address: {
    city: "lahore",
    pin: null,
  },
  greet: function () {
    return "Hello";
  },
};

console.log(obj, "here is object game");
let str = JSON.stringify(obj);
console.log(str);
