import { Router } from 'express';
import productCategory from './product/category';
import productBrand from './product/brand';
import productVariations from './product/variations';
import productUnit from './product/unit';
import baseUnit from './product/base-unit';
import product from './product/product';
const route = Router();

//product module
route.use('/product/category', productCategory);
route.use('/product/brand', productBrand);
route.use('/product/variant', productVariations);
route.use('/product/unit', productUnit);
route.use('/product/base-unit', baseUnit);
route.use('/product', product);



//end


export default route;