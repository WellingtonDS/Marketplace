<template>
    <section>
        <h2>Adicionar Produto</h2>
        <CreateProduct/>
        <h2>Seus Produtos</h2>
        <transition-group v-if="product_user" name="list" tag="ul">
            <li v-for="(product, index ) in product_user" :key="index">
                <ProductItem :product="product">
                    <p>{{product.description}}</p>
                </ProductItem>    
            </li>
        </transition-group>
    </section>

</template>

<script lang="js">

import ProductItem from "@/components/productItem/ProductItem.vue"
import {mapState, mapActions } from 'vuex';
import CreateProduct from '@/components/createProduct/CreateProduct.vue';
export default {
    name: "ProductUser",
    components: {
        CreateProduct,
        ProductItem
    },

    computed: {
        ...mapState(["login","user","product_user"])
    },
    methods: {
        ...mapActions(["getProductUser"])
    },

    watch: {
        login() {
            this.getProductUser();
        }
    },

    created() {
        if(this.login) {
            this.getProductUser();
        }
    }
}

</script>

<style lang="scss" scoped>

h2 {
    margin-bottom: 20px;   
}

.list-enter, .list-leave-to {
    opacity: 0;
    transform: translate3d(20px, 0, 0);
}
.list-enter-active, .list-enter-active {
    transition: all .3s;
}
</style>