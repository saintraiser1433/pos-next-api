import { unifiedUpload } from '@config/multer';
import { fetchProductBrand, insertProductBrand, updateProductBrand, deleteProductBrand } from '@controller/product/brand';
import { Router } from 'express';

const route = Router();

route.get('/', fetchProductBrand);
route.post('/', unifiedUpload.single('file'), insertProductBrand);
route.put('/',unifiedUpload.single('file'), updateProductBrand);
route.delete('/:id', deleteProductBrand);

export default route;