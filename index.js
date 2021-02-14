// Selectors
const add1 = document.querySelector('#add-1')
const add2 = document.querySelector('#add-2')
const subtract1 = document.querySelector('#subtract-1')
const subtract2 = document.querySelector('#subtract-2')
const qty1 = document.querySelector('#qty-1')
const qty2 = document.querySelector('#qty-2')
const prod1PriceSel = document.querySelector('#prod-1-price')
const prod2PriceSel = document.querySelector('#prod-2-price')
const shippingCostsSel = document.querySelector('#shipping-costs')
const totalAmount = document.querySelector('#total-amount')

const operate = (operation, productId) => {
  const productSelector = document.querySelector(productId)
  let productUnits = parseInt(productSelector.innerText)
  if (operation === 'add') {
    productUnits++
    productSelector.innerText = productUnits
  }
  if (operation === 'subtract') {
    if (productUnits !== 0) {
      productUnits--
      productSelector.innerText = productUnits
    }
  }
}

const calculateTotal = () => {
  const prod1FinalPrice = parseFloat(prod1PriceSel.innerText.replace(/\$|,/g, ''))
  const prod2FinalPrice = parseFloat(prod2PriceSel.innerText.replace(/\$|,/g, ''))
  const shippingCosts = parseFloat(shippingCostsSel.innerText.replace(/\$|,/g, ''))
  const qtyProd1 = parseInt(qty1.innerText)
  const qtyProd2 = parseInt(qty2.innerText)

  const total = prod1FinalPrice * qtyProd1 + prod2FinalPrice * qtyProd2 + shippingCosts

  totalAmount.innerText = total
}

add1.addEventListener('click', () => {
  operate('add', '#qty-1')
  calculateTotal()
})
add2.addEventListener('click', () => {
  operate('add', '#qty-2')
  calculateTotal()
})
subtract1.addEventListener('click', () => {
  operate('subtract', '#qty-1')
  calculateTotal()
})
subtract2.addEventListener('click', () => {
  operate('subtract', '#qty-2')
  calculateTotal()
})
