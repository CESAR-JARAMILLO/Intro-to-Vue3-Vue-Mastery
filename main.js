const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            description: 'A fuzzy pair of socks.',
            image: './assets/images/vmSocks-green-onWhite.jpg',
            inventory: 100,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/vmSocks-green-onWhite.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/vmSocks-blue-onWhite.jpg' }
            ],
            sizes: ['S', 'M', 'L', 'XL',
        'XLL']
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeFromCart() {
            this.cart -= 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})