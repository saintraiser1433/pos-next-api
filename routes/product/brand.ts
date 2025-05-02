import { fetchProductBrand, insertProductBrand, updateProductBrand, deleteProductBrand } from '@controller/product/brand';
import { Router } from 'express';

const route = Router();

route.get('/', fetchProductBrand);
route.post('/', insertProductBrand);
route.put('/', updateProductBrand);
route.delete('/:id', deleteProductBrand);

export default route;