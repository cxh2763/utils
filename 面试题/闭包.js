for (var i = 0; i < 6; i++) {
  setTimeout((function (i) {
    return function () {
      console.log(i)
    }
  })(i), 1000);
}