<template>      
    <section class="products-container">
        <div v-if="products && products.length" class="products">
            <div class="product" v-for="product in products" :key="product.id" name="product">
                <router-link to="/">
                    <img v-if="product.photos" src="produtct.photos[0].src" alt="product.photos[0].title">
                    <p class="price">{{product.price}}</p>
                    <h2 class="title">{{product.name}}</h2>
                    <p class="description"> {{product.desciption}}</p>
                </router-link>
            </div>
        </div>
        <div v-else-if="products && products.length === 0">
            <p class="no-result">Busca sem resultado. Tente buscar por outro termo.</p>
        </div>
    </section>
</template>

<script lang="js">
import ProductListComponent from "./ProductListComponents"

export default ProductListComponent
</script>

<style lang="scss" scoped>
    @import './ProductList.scss';
</style>