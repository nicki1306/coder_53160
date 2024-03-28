class Product {
    constructor(title, description, price, thumbnail, code, stock) {
        this.id = this.generateId();
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }

    generateId() {
        return '_' + Math.random().toString(36).substring(2, 9);
    }
}

class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        const isDuplicate = this.products.some(existingProduct => existingProduct.code === product.code);
        if (isDuplicate) {
            throw new Error('El código del producto ya existe.');
        }
        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    getProductById(productId) {
        const product = this.products.find(product => product.id === productId);
        if (!product) {
            throw new Error('Producto no encontrado.');
        }
        return product;
    }
}

const productManager = new ProductManager();

try {
    productManager.addProduct(new Product("Camisa", "Descripción de la camisa", 20, "imagen1.jpg", "ABC123", 10));
    productManager.addProduct(new Product("Pantalón", "Descripción del pantalón", 30, "imagen2.jpg", "DEF456", 15));

    console.log('Todos los productos:', productManager.getProducts());

    const productId = productManager.getProducts()[0].id;
    console.log('Producto con ID', productId, ':', productManager.getProductById(productId));
} catch (error) {
    console.error(error.message);
}
