import mongoose from 'mongoose';
import { TProduct } from './product.interface';

const ExampleSchema = new mongoose.Schema<TProduct>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
});

const ProductModel = mongoose.model<TProduct>('Product', ExampleSchema);

export default ProductModel;
