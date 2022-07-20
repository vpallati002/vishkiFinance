import { CategoryEntity } from './category.entity';
export declare class ProductEnity {
    id: number;
    name: string;
    isActive: boolean;
    description: string;
    imagePaths: string[];
    category: CategoryEntity;
}
