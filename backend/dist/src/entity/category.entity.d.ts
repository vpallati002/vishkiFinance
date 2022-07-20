import { ProductEnity } from './product.entity';
export declare class CategoryEntity {
    id: number;
    name: string;
    isActive: boolean;
    description: string;
    imagePath: string;
    products: ProductEnity[];
}
