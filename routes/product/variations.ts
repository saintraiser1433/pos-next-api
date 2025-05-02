import { deleteProductVariants, fetchProductVariants, insertProductVariants, updateProductVariants } from '@controller/product/variations';
import { Router } from 'express';

const route = Router();

route.get('/', fetchProductVariants);
route.post('/', insertProductVariants);
route.put('/', updateProductVariants);
route.delete('/:id', deleteProductVariants);

export default route;