import { Router } from 'express';
import productCategory from './product/category';
import productBrand from './product/brand';
import productVariations from './product/variations';
import productUnit from './product/unit';
const route = Router();

route.use('/product/category', productCategory);
route.use('/product/brand', productBrand);
route.use('/product/variant', productVariations);
route.use('/product/unit', productUnit);
export default route;