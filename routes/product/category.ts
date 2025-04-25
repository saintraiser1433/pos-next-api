import { Router } from 'express';
import { deleteProductCategory, fetchProductCategory, insertProductCategory, updateProductCategory } from '@controller/product/category';

const route = Router();

route.get('/', fetchProductCategory);
route.post('/', insertProductCategory);
route.put('/', updateProductCategory);
route.delete('/:id', deleteProductCategory);

export default route;