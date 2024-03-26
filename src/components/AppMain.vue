<script>
import AppProduct from '../components/AppProduct.vue';
//import { products } from '../data.js';
import axios from 'axios';

export default {
    name: 'AppMain',
    components:{
        AppProduct,
    },
    data() {
    return {
      products : []
    }
  },
  mounted(){
    axios.get('http://localhost:3000/products').then(response =>{
        console.log(response);
        this.products = response.data
    })
  }



}
</script>

<template>

    <main>
        <div class="container-sm m-5 p-0">
            <div class="row row-cols-1 row-cols-sm-3 row-cols-md-4 justify-content-center">

                <AppProduct v-for="(product, i) in products" :product="product" />

            </div>
        </div>
    </main>



</template>

<style lang="scss"></style>
