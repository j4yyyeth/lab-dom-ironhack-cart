// ITERATION 1
function updateSubtotal(product) {
  let price = product.querySelector('.price span').innerHTML;
  let quantity = product.querySelector('.quantity input').value;
  let subtotal = product.querySelector('.subtotal span')
  let finalPrice = price * quantity;
  subtotal.innerHTML = finalPrice;
  return finalPrice;
}

  // ITERATION 2
function calculateAll() {
  const allProducts = document.getElementsByClassName('product');
  let totalPrice = document.querySelector('#total-value span');
  let total = 0;
  for (let i = 0; i < allProducts.length; i++) {
    total += +(updateSubtotal(allProducts[i]));
  }
  totalPrice.innerHTML = total;
}
  


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});
