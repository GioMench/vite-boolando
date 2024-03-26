<script>
import AppProduct from '../components/AppProduct.vue';
import { products } from '../data.js';
export default {
    name: 'AppMain',
    components:{
        AppProduct,
    },
    data() {
    return {
      products
    }
  }

}
</script>

<template>

    <main>
        <div class="container m-5 p-0">
            <div class="row row-cols-1 row-cols-sm-3 row-cols-md-4">

                <AppProduct v-for="(product, i) in products" :product="product" />

            </div>
        </div>
    </main>



</template>

<style lang="scss"></style>
