<script>
import AppProduct from '../components/AppProduct.vue';
import AppModal from '../components/AppModal.vue';
//import { products } from '../data.js';
//import axios from 'axios';
import {state} from '../state.js';

export default {
    name: 'AppMain',
    components:{
        AppProduct,
        AppModal
    },
    data() {
    return {
      //products : [],
      state
    }
  },
  mounted(){
    this.state.getProducts(this.state.base_produtcs_api_url)
  }

}
</script>

<template>

    <main>
        <div class="container-sm m-5 p-0">
            <div class="row row-cols-1 row-cols-sm-3 row-cols-md-4 justify-content-center">
                
                <AppProduct v-for="(product, i) in state.products" :product="product" />

            </div>
            
        </div>
    </main>



</template>

<style lang="scss"></style>
