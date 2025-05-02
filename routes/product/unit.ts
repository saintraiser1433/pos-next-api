import { deleteProductUnit, fetchProductUnit, insertProductUnit, updateProductUnit } from '@controller/product/unit';
import { Router } from 'express';

const route = Router();

route.get('/', fetchProductUnit);
route.post('/', insertProductUnit);
route.put('/', updateProductUnit);
route.delete('/:id', deleteProductUnit);

export default route;