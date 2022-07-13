function delay(duration) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, duration)
  })
}

delay(2000).then(() => {
  console.log(1)
})

console.log(222)