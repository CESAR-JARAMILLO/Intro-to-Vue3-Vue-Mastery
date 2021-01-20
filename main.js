const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: 'Socks',
            brand: 'Vue Mastery',
            description: 'A fuzzy pair of socks.',
            selectedVariant: 0,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/vmSocks-green-onWhite.jpg', quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/vmSocks-blue-onWhite.jpg', quantity: 0 }
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
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inventory() {
            return this.variants[this.selectedVariant].quantity
        },
        sale() {
            return this.brand + ' ' + this.product + ' are on sale'
        }
    }
})