import { api } from '@/service/service';

export default {
    name: "CreateProduct",
    data() {
        return {
            product: {
                name: "",
                price: "",
                description: "",
                photos: null
            }
        }
    },

    methods: {
        fotmatProduct() {
            this.product.user_id = this.$store.state.user.id;
        },

        adicionarProduto() {
            this.fotmatProduct();
            api.post("/product", this.product).then(() => {
                this.$store.dispatch("getProductUser");
            });
        }
    },
    
}