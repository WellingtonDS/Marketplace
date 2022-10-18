import { api } from '@/service/service';
import { serialize } from '@/helpers/Helpers';

export default {
    name: "ProductList",
    data () {
        return {
            products: null,
            productsPerPage: 9
        }
    },

    computed: {
        url() {
            const query = serialize(this.$route.query);
            
            return `/product?_limit=${this.productsPerPage}${query}`;
        }
    },

    methods: {
        getProducts () {
            api.get(this.url).then(response => {
                this.products = response.data;
            })
        }
    },

    watch: {
        url() {
            this.getProducts();
        }
    },

    created() {
        this.getProducts();
    }
}