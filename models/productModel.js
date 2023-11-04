const products = require('../data/products.json');
const { v4: uuidv4 } = require('uuid');
const { writeDataToFile } = require('../utils');

/**
 * Find all products.
 * @returns {Promise<Array>} The promise that resolves with the array of all products.
 */
function findAll() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

/**
 * Find a product by its ID.
 * @param {string} id - The unique identifier for the product.
 * @returns {Promise<Object>} The promise that resolves with the product if found, otherwise undefined.
 */
function findById(id) {
  return new Promise((resolve, reject) => {
    const product = products.find((p) => p.id === id);
    resolve(product);
  });
}

/**
 * Create a new product.
 * @param {Object} product - The product to create.
 * @returns {Promise<Object>} The promise that resolves with the newly created product.
 */
function create(product) {
  return new Promise((resolve, reject) => {
    const newProduct = { id: uuidv4(), ...product };
    products.push(newProduct);
    writeDataToFile('./data/products.json', products);
    resolve(newProduct);
  });
}

/**
 * Update an existing product.
 * @param {string} id - The unique identifier for the product to update.
 * @param {Object} product - The product data to update.
 * @returns {Promise<Object>} The promise that resolves with the updated product.
 */
function update(id, product) {
  return new Promise((resolve, reject) => {
    const index = products.findIndex((p) => p.id === id);
    products[index] = { id, ...product };
    writeDataToFile('./data/products.json', products);
    resolve(products[index]);
  });
}

/**
 * Remove a product by its ID.
 * @param {string} id - The unique identifier for the product to be removed.
 * @returns {Promise<void>} The promise that resolves when the product is removed.
 */
function remove(id) {
  return new Promise((resolve, reject) => {
    const newProducts = products.filter((p) => p.id !== id);
    writeDataToFile('./data/products.json', newProducts);
    resolve();
  });
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
};
