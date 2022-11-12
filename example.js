"use strict";
exports.__esModule = true;
function addShipping(price, shipping) {
    if (price && shipping)
        return price + shipping;
    else
        return false;
}
addShipping(10, 5);
