const Order = require("../models/Order");
const Product = require("../models/Product");

exports.addProductToCart = async (cart, productId, quantity) => {
  const product = await Product.findById(productId);
  if (!product) {
    throw new Error("Product not found");
  }

  const existingProduct = cart.find((item) => item.productId === productId);
  if (existingProduct) {
    existingProduct.quantity += parseInt(quantity);
  } else {
    cart.push({
      productId: product._id,
      name: product.name,
      price: product.price,
      quantity: parseInt(quantity),
    });
  }

  return cart;
};

exports.processCheckout = async (userId, cart) => {
  if (cart.length === 0) {
    throw new Error("Cart is empty");
  }

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const order = new Order({
    userId,
    products: cart.map((item) => ({
      productId: item.productId,
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    })),
    totalPrice,
  });

  await order.save();
  return order;
};

exports.createOrder = async (orderData) => {
  const newOrder = new Order(orderData);
  await newOrder.save();
  return newOrder;
};

exports.getAllOrders = async () => {
  const orders = await Order.find();
  return orders;
};

exports.getOrderById = async (id) => {
  const order = await Order.findById(id);
  return order;
};

exports.updateOrderById = async (id, orderData) => {
  const order = await Order.findByIdAndUpdate(id, orderData, {
    new: true,
    runValidators: true,
  });
  return order;
};
exports.deleteOrderById = async (id) => {
  const order = await Order.findByIdAndDelete(id);
  return order;
};
