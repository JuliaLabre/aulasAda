import { Request, Response } from 'express';
import { ProductService } from '../services/ProductService';

export class ProductController {
    static async getAllProducts(req: Request, res: Response): Promise<void> {
        try {
            const products = await ProductService.getAllProducts();
            res.json(products);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: 'Internal Server Error'
            });
        }
    }

    static async getProductById(req: Request, res: Response): Promise<void> {
        const productId = Number(req.params.id);
        try {
            const product = await ProductService.getProductById(productId);
            if (product) {
                res.json(product);
            } else {
                res.status(404).json({
                    error: 'Product not found'
                });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: 'Internal Server Error'
            });
        }
    }
    static async createProduct(req: Request, res: Response): Promise<void> {
        const { name, price } = req.body;
        try {
            console.log("Criei o produto")
            const newProduct = await ProductService.createProduct(name, price);
            res.status(201).json(newProduct);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: 'Internal Server Error'
            });
        }
    }
    static async deleteProduct(req: Request, res: Response): Promise<void> {
        const productId = Number(req.params.id);
        try {
            await ProductService.deleteProduct(productId);
            res.json({
                message: 'Product deleted successfully'
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({
                error: 'Internal Server Error'
            });
        }
    }
    static async updateProduct(req: Request, res: Response): Promise<void> {
        const { name, price } = req.body;
        const productId = Number(req.params.id);
        console.log("Entrei")
        try {
            const newProduct = await ProductService.updateProduct(name, productId, price);
            res.status(201).json(newProduct);
            console.log("Estou no Try")
        } catch (error) {
            console.log("Estou no Catch")
            console.error(error);
            res.status(500).json({
                error: 'Internal Server Error'
            });
        }
    }
}