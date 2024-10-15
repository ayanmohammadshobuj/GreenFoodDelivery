export interface Carts {
    cartId:   number;
    userId:   number;
    products: [productId: number, quantity: number];
    total:   number;
}