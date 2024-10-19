const orderService = require('../services/orderService');
const Order = require('../models/Order');
const Product = require('../models/Product');

// Controlador para añadir producto al carrito
exports.addToCart = async (req, res) => {
  const { productId, quantity, price} = req.body;
  const userId = req.session.user._id;

  try {
      let cart = req.session.cart || [];
      cart = await orderService.addProductToCart(cart, productId, quantity, price);
      req.session.cart = cart;
      res.redirect('/cart');
  } catch (error) {
      res.status(500).send('Error adding product to cart: ' + error.message);
  }
};

// Controlador para procesar el checkout
exports.checkout = async (req, res) => {
  const userId = req.session.user._id;
  const cart = req.session.cart || [];

  try {
      const order = await orderService.processCheckout(userId, cart);
      req.session.cart = []; // Limpiar carrito después del checkout
      // Redirigir a la vista de confirmación de pedido
      res.redirect(`/orders/confirmation/${order._id}`);
  } catch (error) {
      res.status(500).send('Error processing order: ' + error.message);
  }
};

//Controlador para confirmacion de carrito
exports.orderConfirmation = async (req, res) => {
  const { orderId } = req.params;

  console.log('Order ID:', orderId);  // Agrega esto para ver si el ID se está pasando

  try {
    // Buscar la orden por ID
    const order = await orderService.getOrderById(orderId);

    if (!order) {
      return res.status(404).send('Order not found');
    }

    // Renderizar la vista de confirmación
    res.render('confirmation', { order });
  } catch (error) {
    res.status(500).send('Error fetching order details: ' + error.message);
  }
};

// Crear una orden
exports.createOrder = async (req, res) => {
  try {
    const newOrder = await orderService.createOrder(req.body);
    res.status(201).json(newOrder);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Obtener todas las órdenes
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await orderService.getAllOrders();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener una orden por ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await orderService.getOrderById(req.params.id);
    if (!order) return res.status(404).json({ message: 'Orden no encontrada' });
    res.status(200).json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Actualizar una orden por ID
exports.updateOrderById = async (req, res) => {
  try {
    const order = await orderService.updateOrderById(req.params.id, req.body);
    if (!order) return res.status(404).json({ message: 'Orden no encontrada' });
    res.status(200).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Eliminar una orden por ID
exports.deleteOrderById = async (req, res) => {
  try {
    const order = await orderService.deleteOrderById(req.params.id);
    if (!order) return res.status(404).json({ message: 'Orden no encontrada' });
    res.status(200).json({ message: 'Orden eliminada correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
