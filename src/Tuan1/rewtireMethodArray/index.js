let newArray = [];
Array.prototype.myMap = function (cb) {
  var arr = [];
  for (var i = 0; i < this.length; ++i) {
    var c = cb(this[i], i);
    arr.push(c);
  }
  return arr;
};
console.log("**********Test method myMap() ****************");
console.log("My array:", [1, 2, 3, 5, 6]);
newArray = [1, 2, 3, 5, 6].myMap((e) => (e / 2) * 10);
console.log("result:", newArray);

Array.prototype.myFilter = function (cb) {
  var arr = [];
  for (var i in this) {
    //check value each array valid
    if (this.hasOwnProperty(i)) {
      var c = cb(this[i], i, this);
      if (c === true) {
        arr.push(this[i]);
      }
    }
  }
  return arr;
};
console.log("**********Test method myFilter() ****************");
console.log("My array:", [1, 2, 3, 5, 6]);
newArray = [1, 2, 3, 5, 6].myFilter((e) => e % 2 == 1);
console.log("result:", newArray);

Array.prototype.mySome = function (cb) {
  for (var i in this) {
    if (this.hasOwnProperty(i)) {
      var c = cb(this[i], i, this);
      if (c === true) {
        return true;
      }
    }
  }
  return false;
};

console.log("**********Test method mySome() ****************");

newArray = [1, 2, 3, 4, 5, 6].mySome((e) => e % 2 == 1);
console.log("result:", newArray);

Array.prototype.myEvery = function (cb) {
  for (var i in this) {
    if (this.hasOwnProperty(i)) {
      var c = cb(this[i], i, this);
      if (c === false) {
        return false;
      }
    }
  }
  return true;
};
console.log("**********Test method myEvery() ****************");

newArray = [1, 2, 3, 4, 5, 6].myEvery((e) => e % 2 == 1);
console.log(newArray);

Array.prototype.myFind = function (cb) {
  var arr = [];
  for (var i in this) {
    //check value each array valid
    if (this.hasOwnProperty(i)) {
      var c = cb(this[i], i);
      if (c === true) {
        return this[i];
      }
    }
  }
  return null;
};
console.log("**********Test method myFind() ****************");

newArray = [1, 2, 3, 4, 5, 6].myFind((e) => e % 2 == 1);
console.log("result:", newArray);

Array.prototype.myFlatMap = function (cb) {
  var arr = [];
  for (var i = 0; i < this.length; ++i) {
    var c = cb(this[i], i);
    if (c) {
      for (let j = 0; j < c.length; ++j) {
        arr.push(c[j]);
      }
    }
  }

  return arr;
};
console.log("**********Test method myFind() ****************");
console.log("My array:", [1, 2, 3]);
console.log(
  "Result after using my FlatMap:",
  [1, 2, 3].myFlatMap((e, index) => [e, e * 2])
);

Array.prototype.myReduce = function (callback, initialValue) {
  if (this == null) {
    throw new TypeError("Array.prototype.myReduce called on null or undefined");
  }
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  let array = this;
  let accumulator = initialValue;
  let startIndex = 0;

  if (accumulator === undefined) {
    if (array.length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = array[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
};
console.log("************************ test reduce ************************");
console.log("My array:", [1, 2, 3, 4, 5]);
newArray = [1, 2, 3, 4, 5].myReduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log("Result:", newArray);
console.log(newArray);
