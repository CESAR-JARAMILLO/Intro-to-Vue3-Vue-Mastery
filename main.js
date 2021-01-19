const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'A fuzzy pair of socks.',
            image: './assets/images/vmSocks-green-onWhite.jpg',
            inventory: 100,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue' }
            ],
            sizes: ['S', 'M', 'L', 'XL',
        'XLL']
        }
    }
})