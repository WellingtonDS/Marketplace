import { api } from '@/service/service';

export default {
    name: "ProductList",
    data () {
        return {
            products: null
        }
    },

    methods: {
        getProducts () {
            api.get('/product').then(response => {
                this.products = response.data;
                console.log("aqui", this.products);
            })
        }
    },

    created() {
        this.getProducts();
    },
}