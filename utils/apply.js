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
    })
    const result = obj[key](...arguements)
    return result;
}

Function.prototype.MyCall = function (obj, ...args) {
    const _this = obj || window;
    _this.fn = this; //默认的this是指向被调用的func的
    const result = _this.fn(...args)
    delete _this.fn;
    return result;
}

Function.prototype.Mybind = function (obj, args) {
    const _this = obj || window;
    _this.fn = this; //默认的this是指向被调用的func的
    const result = () => {
        return _this.fn(...args);
    }
    return result;
}

console.log(person.fullName());
console.log(person.fullName.MyApply2(person1, [18, 1000]))
console.log(person.fullName.MyCall(person1, 18, 1000))
console.log(person.fullName.Mybind(person1, [18, 1000])())