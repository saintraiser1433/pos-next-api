import { unifiedUpload } from '@config/multer';
import { fetchProduct, fetchProductById, insertProduct, updateProduct, deleteProduct } from '@controller/product/product';
import { Router } from 'express';

const route = Router();

route.get('/', fetchProduct);
route.get('/:id', fetchProductById);
route.post('/', unifiedUpload.single('productImage'), insertProduct);
route.put('/', unifiedUpload.single('productImage'), updateProduct);
route.delete('/:id', deleteProduct);

export default route;