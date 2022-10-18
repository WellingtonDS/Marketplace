import { api } from '@/service/service';
import { serialize } from '@/helpers/Helpers';
import ProductsPaginate from '@/components/productspagination/ProductsPaginate.vue';

export default {
    name: "ProductList",
    components: {
        ProductsPaginate
    },

    data () {
        return {
            products: null,
            productsPerPage: 1,
            productsTotal: 0
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
                this.productsTotal = Number(response.headers["x-total-count"]);
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