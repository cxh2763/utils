function f1() {
  console.log(1)
  console.log(this)
  return this;
}
f1.prototype.say = function () {
  console.log(2)
}

var say = function () {
  console.log(3)
}

function say() {
  console.log(4)
}

var ff = new f1()
ff.say()
console.log(ff)