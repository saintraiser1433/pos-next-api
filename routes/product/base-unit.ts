
import { deleteProductBaseUnit, fetchProductBaseUnit, insertProductBaseUnit, updateProductBaseUnit } from '@controller/product/base-unit';
import { Router } from 'express';

const route = Router();

route.get('/', fetchProductBaseUnit);
route.post('/', insertProductBaseUnit);
route.put('/', updateProductBaseUnit);
route.delete('/:id', deleteProductBaseUnit);

export default route;