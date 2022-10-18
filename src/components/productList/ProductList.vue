<template>      
    <section class="product-container">
        <div v-for="product in products" :key="product.id" name="product">
            <img v-if="product.photos" src="produtct.photos[0].src" alt="product.photos[0].title">
            <p class="price">{{product.price}}</p>
            <h2 class="title">{{product.name}}</h2>
            <p class="description"> {{product.desciption}}</p>

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