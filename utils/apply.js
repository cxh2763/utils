var person = {
    fullName: function(age) {
        return this.firstName + " " + this.lastName + " " + age;
    }
}
var person1 = {
    firstName: "Bill",
    lastName: "Gates",
}
console.log(person.fullName.apply(person1,[18]))

Function.prototype.MyApply = function(obj,arguements){
    const _this = obj || window;
    _this.func = this;
    const result = _this.func(...arguements)
    delete  _this.func;
    return result;
}

console.log(person.fullName.MyApply(person1,[18]))