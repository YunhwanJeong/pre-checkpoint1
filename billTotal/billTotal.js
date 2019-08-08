function billTotal(subtotal) {
  let tip = subtotal * 0.15;
  let tax = subtotal * 0.095;
  
  return subtotal + tip + tax;
}


billTotal(10.00); // => 12.45