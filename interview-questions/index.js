// function Person(name) {
//     this.name = name 
// }
// let p = new Person('wn')
// 1. p._proto_等于什么   Person.prototype  实例的隐式原型链等于构造函数的显示原型链
// 2. Person._proto_   == Function.prototype 
// 3. Function._proto_ == Object.prototype

// var foo = {},
//     F = function(){};
    
// Object.prototype.a = 'valA'
// Function.prototype.b = 'valB'
// console.log(foo.a)    //valA  
// console.log(foo.b)    //undefined
// console.log(F.a)      //valA 
// console.log(F.b)      //valB

// function Person(name) {
//     this.name = name 
//     return {}
// }
// let o = new Person('wn')
// console.log(o)

// ------ 构造函数是不需要返回值的 使用new来创建对象时， 如果return 的是非对象类型，会忽略返回值，如果return的是对象
// 则返回该对象 (若 return null也会忽略返回值)


// function Person(name) {
//     this.name = name 
// }
// function Student() {

// }
// Student.prototype = Person.prototype
// Student.prototype.constructor = Student

// let s = new Student('wn')
// let w = new Person('wn')
// console.log(s instanceof Person)

// for (let i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 0);
// }
// -------let 每次循环会生成一个封闭的作用域和setTimeout绑定， var每次循环会覆盖掉上一次的作用域
// for (var i = 0; i < 10; i++) {
//    (function(i) {            //----使用闭包
//     setTimeout(() => {
//         console.log(i)
//     }, 0);
//    })(i)
// }   

//-----------------------
Array.prototype.method = function() {
    console.log('wn')
}
var myArry = [1, 2, 3, 4, 5, 6, 7]
myArry.name = 'wn'
for (let index of myArry) {
    console.log(index)
}
// for in
// 1. index 索引为字符串型的数字（即下标），不能直接进行几何运算 得先转换为number
// 2. 遍历顺序有可能不是按照实际数组的内部顺序进行的
// 3. 使用for in 会遍历数组所有可枚举属性，包括原型链，所以for in更适合遍历对象

// for of 
// for in 遍历数组遍历的是数组的索引， for of遍历的数组的元素
// for of 遍历的只是数组内的元素，而不包括数组原型属性和索引

let gArr = [1, 2, [3, 4], 5, [2, 7, [3, 9]]]
// 输出 [1, 2, 3, 4, 5, 2, 7, 3, 9]
// function outputArr(arr) {
//     let res = []
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             res = res.concat(outputArr(arr[i]))
//         } else {
//             res.push(arr[i])
//         }
//     }
//     return res
// }
function outputArr(arr) {
    return arr.reduce(function(pre, item) {
        return pre.concat(Array.isArray(item) ? outputArr(item) : item)
    }, [])
}
console.log(outputArr(gArr))