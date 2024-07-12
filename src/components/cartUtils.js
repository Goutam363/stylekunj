// Function to add a product to the cart with a specified quantity
export const addToCart = (productId, quantity, setCrtQty) => {
  setCrtQty((prevCrtQty) => ({
    ...prevCrtQty,
    [productId]: (prevCrtQty[productId] || 0) + quantity,
  }));
};

// Function to remove a product from the cart
export const removeFromCart = (productId, setCrtQty) => {
  setCrtQty((prevCrtQty) => {
    const updatedCrtQty = { ...prevCrtQty };
    delete updatedCrtQty[productId];
    return updatedCrtQty;
  });
};

// Function to update the quantity of a product in the cart
export const updateQuantity = (productId, newQuantity, setCrtQty) => {
  setCrtQty((prevCrtQty) => ({
    ...prevCrtQty,
    [productId]: newQuantity,
  }));
};

// Function to clear the entire cart
export const clearCart = (setCrtQty) => {
  setCrtQty({});
};