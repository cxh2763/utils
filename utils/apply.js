var person = {
    firstName: "c",
    lastName: "xh",
    fullName: function (age = 20, money = 100) {
        return `${this.firstName}${this.lastName} ${age} ${money}`;
    }
}
var person1 = {
    firstName: "Bill",
    lastName: "Gates",
}

function SayName() {
    console.log(this.firstName + this.lastName);
}

Function.prototype.MyApply = function (obj, arguements) {
    const _this = obj || window;
    _this.func = this;
    const result = _this.func(...arguements)
    delete _this.func;
    return result;
}

Function.prototype.MyApply2 = function (obj, arguements) {
    obj = (obj === undefined || obj === null) ? globalThis : Object(obj);
    const key = Symbol('key');
    Object.defineProperty(obj, key, {
        value: this,
        enumerable: false,
        configurable: true,
    })
    // obj[key] = this; this就是fn
    const result = obj[key](...arguements)
    delete obj[key];
    return result;
}

Function.prototype.MyCall = function (obj, ...args) {
    obj = (obj === undefined || obj === null) ? globalThis : Object(obj);
    const key = Symbol('key');
    Object.defineProperty(obj, key, {
        value: this,
        enumerable: false,
        configurable: true,
    })
    const result = obj[key](...args)
    delete obj[key];
    return result;
}

Function.prototype.Mybind = function (obj, ...arg1) {
    obj = (obj === undefined || obj === null) ? globalThis : Object(obj);
    const fn = Object(this); //默认的this是指向被调用的func的
    // const temp = function () { };
    const result = function (...arg2) {
        const arg = [...arg1, ...arg2];
        return fn.apply(obj, arg);
    }
    // temp.prototype = fn.prototype;
    // result.prototype = new temp;

    return result;
}

SayName.bind(person).bind(person1)();

// console.log(person.fullName());
// console.log(person.fullName.MyApply2(person1, [18, 1000]))
// console.log(person1)
// console.log(Object.getOwnPropertySymbols(person1))
// console.log(person.fullName.MyCall(person1, 18, 1000))
// console.log(person.fullName.Mybind(person1, 1, 2, 3, 4)(5, 6))
// const result = person.fullName.Mybind(person1, 1, 2, 3, 4)
// const result1 = person.fullName.bind(person1, 1, 2, 3, 4)
// console.log(result.prototype.__proto__ === person.fullName.prototype)