const Product = require('../models/productModel');
const { getPostData } = require('../utils');

/**
 * @desc Gets All Products
 * @route GET /api/products
 * @access Public
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the products are sent in the response.
 */
async function getProducts(req, res) {
  try {
    const products = await Product.findAll();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
}

/**
 * @desc Gets Single Product by ID
 * @route GET /api/products/:id
 * @access Public
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {String} id - The ID of the product to retrieve.
 * @returns {Promise<void>} - A promise that resolves when the product is sent in the response or an error message if not found.
 */
async function getProduct(req, res, id) {
  try {
    const product = await Product.findById(id);
    if (!product) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Product Not Found' }));
    } else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(product));
    }
  } catch (error) {
    console.log(error);
  }
}

/**
 * @desc Creates A New Product
 * @route POST /api/products
 * @access Public
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Promise<void>} - A promise that resolves when the new product is sent in the response after creation.
 */
async function createProduct(req, res) {
  try {
    const body = await getPostData(req);
    const { title, description, price } = JSON.parse(body);
    const product = { title, description, price };
    const newProduct = await Product.create(product);
    res.writeHead(201, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(newProduct));
  } catch (error) {
    console.log(error);
  }
}

/**
 * @desc Update A Product
 * @route PUT /api/products/:id
 * @access Public
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {String} id - The ID of the product to update.
 * @returns {Promise<void>} - A promise that resolves when the product is updated and sent in the response.
 */
async function updateProduct(req, res, id) {
  try {
    const product = await Product.findById(id);
    if (!product) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Product Not Found' }));
    } else {
      const body = await getPostData(req);
      const { title, description, price } = JSON.parse(body);
      const productData = {
        title: title || product.title,
        description: description || product.description,
        price: price || product.price,
      };
      const updProduct = await Product.update(id, productData);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(updProduct));
    }
  } catch (error) {
    console.log(error);
  }
}

/**
 * @desc Delete A Product
 * @route DELETE /api/products/:id
 * @access Public
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @param {String} id - The ID of the product to delete.
 * @returns {Promise<void>} - A promise that resolves when the product is deleted and a confirmation message is sent in the response.
 */
async function deleteProduct(req, res, id) {
  try {
    const product = await Product.findById(id);
    if (!product) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Product Not Found' }));
    } else {
      await Product.remove(id);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(
        JSON.stringify({
          message: `Product ${id} has been deleted successfully`,
        })
      );
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
