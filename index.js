const add1 = document.querySelector('#add-1')
const add2 = document.querySelector('#add-2')
const subtract1 = document.querySelector('#subtract-1')
const subtract2 = document.querySelector('#subtract-2')
const qty1 = document.querySelector('#qty-1')
const qty2 = document.querySelector('#qty-2')
const totalAmount = document.querySelector('#total-amount')

const operate = (operation, product) => {
  const productUnits = 
  if (operation === 'add') {
  }
}

const calculateTotal = () => {
  console.log('calculating total!!!')
}

add1.addEventListener('click', () => {
  operate('add', qty1)
  calculateTotal()
})
add2.addEventListener('click', () => {
  operate('add', qty2)
  calculateTotal()
})
subtract1.addEventListener('click', () => {
  operate('subtract', qty1)
  calculateTotal()
})
subtract2.addEventListener('click', () => {
  operate('subtract', qty2)
  calculateTotal()
})
