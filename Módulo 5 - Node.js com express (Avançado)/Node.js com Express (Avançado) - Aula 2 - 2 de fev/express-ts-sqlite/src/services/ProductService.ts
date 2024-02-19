import db from '../infra/db/index';
import { Product } from '../models/Product';

export class ProductService {
    static async getAllProducts(): Promise<Product[]> {
        return new Promise((resolve, reject) => {
            db.all('SELECT * FROM products', (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows as Product[]);
                }
            });
        });
    }
    static async getProductById(id: number): Promise<Product | undefined> {
        return new Promise((resolve, reject) => {
            db.get('SELECT * FROM products WHERE id = ?', [id],
                (err, row) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(row as Product);
                    }
                });
        });
    }
    static async createProduct(name: string, price: number): Promise<Product> {
        return new Promise((resolve, reject) => {
            db.run('INSERT INTO products (name, price) VALUES(?, ?)', [name, price], function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve({ id: this.lastID, name, price });
                }
            });
        });
    }
    static async deleteProduct(id: number): Promise<void> {

        return new Promise((resolve, reject) => {
            db.run('DELETE FROM products WHERE id = ?', [id], (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    static async updateProduct(name: string, productId: number, price: number): Promise<void> {
        return new Promise((resolve, reject) => {
            db.run('UPDATE products set name = ?, price = ? WHERE id = ?', [name, price, productId], function (err) {
                if (err) {
                    reject(err);
                } else {
                    resolve(console.log("Atualizou"));
                }
            });
        });
    }

    // static async updateProduct(name:string, productId:number, price:number, res:Response): Promise < void>{
    //     return new Promise((resolve, reject) => {
    //         db.run('UPDATE products set name = ?, price = ? WHERE id = ?', [name, price, productId], function (err) {
    // if (err) {
    //             reject(err);
    //         } else {
    //             resolve(res.json({ id: productId, nome: name, preco: price }));
    //         }
    //     });
    // });
    // }
}