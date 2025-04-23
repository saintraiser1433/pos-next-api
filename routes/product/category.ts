import { Router } from 'express';
import { fetchProductCategory } from '../../controller/product/category';

const route = Router();

route.get('/', fetchProductCategory);

export default route;