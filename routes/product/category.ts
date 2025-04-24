import { Router } from 'express';
import { fetchProductCategory, insertProductCategory, updateProductCategory } from '@controller/product/category';

const route = Router();

route.get('/', fetchProductCategory);
route.post('/', insertProductCategory);
route.put('/:id', updateProductCategory);
route.delete('/:id', fetchProductCategory);

export default route;