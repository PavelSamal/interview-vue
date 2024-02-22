// Вопрос на this Настя
//
// const userService = {
//   activeFilter: 'admin',
//   users: [
//     {name: 'Hanna', age: 20, status: 'admin'},
//     {name: 'Steve', age: 23},
//     {name: 'Jack', age: 22},
//     {name: 'Tony', age: 26, status: 'admin'},
//   ],
//   getFilteredUsers: function() {
//     return this.users.filter(function(user) {
//       return user.status === this.activeFilter;
//     })
//   }
// }
//
// console.log(userService.getFilteredUsers()); // Что будет?

// Event loop Настя +
// console.log(1)
//
// setTimeout(() => console.log(2))
//
// setTimeout(() => console.log(3), 0)
//
// Promise.resolve().then().then(() => console.log(4))
//
// Promise.resolve().then().then().then(() => console.log(5))
//
// console.log(6)
//
// console.log(7)

// Какой код заблокирует браузер, а какой нет? Настя -
// const timeout = () => setTimeout(() => timeout());
// const promise = () => Promise.resolve().then(() => promise())

// Unique array Настя
//
// function unique(arr) {
//   return [...new Set(arr)];
// }
//
// console.log(unique([1, 1, 2, 2, 4, 2, 3, 7, 3])); // => [1, 2, 4, 3, 7]

// Filter Настя +-
// const filter = (source, filterObject) => {
//   return source.filter((item) => {
//     let isMatch = true;
//
//     Object.entries(filterObject).forEach(([key, value]) => {
//       if (item[key] !== value) {
//         isMatch = false
//       }
//     })
//
//     return isMatch
//   })
// }
//
// console.log(filter([{ a: 1, b: 2, c: 3 }, { a: 2, b: 2, c: 3 }, { b: 3, a: 2, c: 3 }], { a: 2 }))

// Реализовать методы, которые в процессе выполнения строки (2).plus(3).minus(1) дали бы на выходе 4. Настя
// Number.prototype.plus = function (value) {
//   return this + value;
// }
//
// Number.prototype.minus = function (value) {
//   return this - value;
// }
//
// console.log((2).plus(3).minus(1));

// Замыкания Настя
// function canGetCount(n) {
//   let count = 0;
//
//   return () => {
//     count++;
//     return count <= n ? 'yes': 'no';
//   }
// }
//
// const getOne = canGetCount(2);
//
// console.log(getOne() === 'yes')
// console.log(getOne() === 'yes')
// console.log(getOne() === 'no')
// console.log(getOne() === 'yes')

// Если подумаю, что смогут решить Настя
// function add(num) {
//   return function(x) {
//     return num + x;
//   }
// }
//
// function multiply(num) {
//   return function(x) {
//     return num * x;
//   }
// }
//
// function divide(num) {
//   return function(x) {
//     return x / num;
//   }
// }
//
// function calculate(...fns) {
//   return (initial) => {
//     let result = initial;
//
//     fns.forEach((fn) => {
//       result = fn(result);
//     });
//
//     return result;
//   }
// }
//
// console.log(calculate(add(10), multiply(2), divide(3))(2)) // 8
