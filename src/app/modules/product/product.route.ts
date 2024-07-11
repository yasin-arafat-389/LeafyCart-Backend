import express from 'express';
import { productControllers } from './product.controller';
import validateRequest from '../../middlewares/validateRequest/validateRequest';
import { validateProductSchema } from './product.validation';

const router = express.Router();

router.post(
  '/create-product',
  validateRequest(validateProductSchema.productValidation),
  productControllers.createProduct,
);

router.get('/', productControllers.getAllProduct);

router.get('/:id', productControllers.getSingleProduct);

router.delete('/delete-product', productControllers.deleteProduct);

router.put(
  '/update-product',
  validateRequest(validateProductSchema.productUpdateValidation),
  productControllers.updateProduct,
);

router.post(
  '/check-availability',
  productControllers.checkAvailabilityOfProduct,
);

router.post('/create-order', productControllers.createOrder);

export const ProductRoutes = router;
