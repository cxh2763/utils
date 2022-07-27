const num = 123123123123000000;

const result = num.toString().replace(/(?=\B(\d{3})+$)/g, ($) => {
  return $ = ','
})
console.log(result)