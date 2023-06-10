// Type
type Order = {
    productId: string;
    price: number;
}

type User = {
    firstName: string;
    age: number;
    email: string;
    password?: string;
    order: string[];
    orders: Order[];
};

const user: User = {
    firstName: 'Vinícius',
    age: 26,
    email: 'viniciuspecci@hotmail.com',
    order: ['first', 'second'],
    orders: [{
        productId: '6a64sd8a4d6',
        price: 100
    }]
};