const http = require('http');
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('./controllers/productController');

/**
 * Creates an HTTP server and listens on a specified port.
 * The server handles API routes for CRUD operations on products.
 */
const server = http.createServer((req, res) => {
  // Handles the GET request to retrieve all products.
  if (req.url === '/api/products' && req.method === 'GET') {
    getProducts(req, res);
  }
  // Handles the GET request to retrieve a single product by its ID.
  else if (
    req.url.match(
      /^\/api\/products\/(([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})|(\d+))/
    ) &&
    req.method === 'GET'
  ) {
    const id = req.url.split('/')[3];
    getProduct(req, res, id);
  }
  // Handles the POST request to create a new product.
  else if (req.url === '/api/products' && req.method === 'POST') {
    createProduct(req, res);
  }
  // Handles the PUT request to update an existing product by its ID.
  else if (
    req.url.match(
      /^\/api\/products\/(([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})|(\d+))/
    ) &&
    req.method === 'PUT'
  ) {
    const id = req.url.split('/')[3];
    updateProduct(req, res, id);
  }
  // Handles the DELETE request to remove a product by its ID.
  else if (
    req.url.match(
      /^\/api\/products\/(([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})|(\d+))/
    ) &&
    req.method === 'DELETE'
  ) {
    const id = req.url.split('/')[3];
    deleteProduct(req, res, id);
  }
  // Handles any undefined routes and sends a 404 response.
  else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
});

const PORT = process.env.PORT || 5000;

// Starts the server and logs the port it is running on.
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
