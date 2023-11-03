const Product = require('../models/productModel');

const { getPostData } = require('../utils');

// @desc Gets All Products
// @route GET /api/products
async function getProducts(req, res) {
  try {
    const products = await Product.findAll();

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.log(error);
  }
}

// @desc Gets Single Product
// @route GET /api/products/:id
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

// @desc Creates A New Product
// @route POST /api/products
async function createProduct(req, res) {
  try {
    const body = await getPostData(req); // Much cleaner

    const { title, description, price } = JSON.parse(body);
    const product = {
      title,
      description,
      price,
    };

    const newProduct = await Product.create(product); // always remember to await
    res.writeHead(201, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(newProduct));
  } catch (error) {
    console.log(error);
  }
}

// @desc Update A Product
// @route PUT /api/product/:id
async function updateProduct(req, res, id) {
  try {
    const product = await Product.findById(id);

    if (!product) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Product Not Found' }));
    } else {
      const body = await getPostData(req); // Much cleaner

      const { title, description, price } = JSON.parse(body);
      const productData = {
        title: title || product.title,
        description: description || product.description,
        price: price || product.price,
      };

      const updProduct = await Product.update(id, productData); // always remember to await
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(updProduct));
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
};
