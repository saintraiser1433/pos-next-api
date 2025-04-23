import { Router } from 'express';
import productCategory from './product/category';

const route = Router();

route.use('/product/category', productCategory);


export default route;