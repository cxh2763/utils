async function func() {
  for (let i = 0; i < 6; i++) {
    setTimeout(function () {
      console.log(i)
    }, 1000);
  }
}

func();