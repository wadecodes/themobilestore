import asyncHandler from 'express-async-handler';

import Product from '../models/productModel.js';

//* @description    :     Fetch All Products
//* @route          :     GET /api/products
//* @access         :     Public
export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

//* @description    :     Fetch Product by ID
//* @route          :     GET /api/products/:id
//* @access         :     Public
export const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product Not Found');
  }
});
