function addShipping(price: number, shipping: number) : number | boolean {
  if (price && shipping) 
    return price + shipping
  else
    return false;
}

addShipping(10, 5);

export {};