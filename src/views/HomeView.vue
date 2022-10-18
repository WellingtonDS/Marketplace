<template>
  <section>
    <h1>🤑Compre ou venda🤑</h1>
    <Product/>
    <ProductList/>
  </section>
</template>

<script lang="js">
import ProductList from '@/components/productList/ProductList.vue';
import Product from '@/components/product/Product.vue';

export default {
  name: 'HomeView',
  components: {
    Product,
    ProductList
  }
}
</script>


<style lang="scss" scoped>
h1 {
  font-size: 2rem;
  color: #87f;
  margin-top: 40px;
  text-align: center;
}
  
</style>