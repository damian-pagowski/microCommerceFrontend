export const getCart = () => {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
  };
  
  export const addToCart = (product) => {
    const cart = getCart();
    const existingProduct = cart.find((item) => item.productId === product.productId);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  
  export const removeFromCart = (productId) => {
    const cart = getCart().filter((item) => item.productId !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  
  export const getTotalCartValue = () => {
    const cart = getCart();
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
  };