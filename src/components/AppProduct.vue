<script>
import { state } from '../state.js';

export default {
    name: 'AppProduct',
    props: {
        product: Object
        
    },

    data() {
        return {
            state
        }
    }



}
</script>

<template>
    <div class="card m-3 p-0" style="width: 18rem;">

        <img :src="'/img/' + product.frontImage" class="card-img-top front-image" alt="'image of' + product.name">

        <img :src="'/img/' + product.backImage" class="card-img-top back-image" alt="'image of'+ product.name">

        <div class="card-body top">
            <div class="like">
                <i class="fa-solid fa-heart"></i>
            </div>

            <div v-for="badge in product.badges">
            <div class="sales" v-if="badge.type == 'discount'">
                {{badge.value}}
            </div>

            <div class="sustainable" v-if="badge.type == 'tag'">
                {{badge.value}}
            </div>
        </div>

            <div>{{ product.brand }}</div>
            <h5 class="card-title" @click="activeTheModal">{{ product.name }}</h5>
            <div class="card-text"> 14,99
                <span class="price">
                    <del class="text-danger">{{ product.price }}&euro;</del>
                </span>
            </div>

        </div>
    </div>

    
</template>

<style lang="scss"></style>