<script>
import {state} from '../state.js';
import AppModal from './AppModal.vue';
export default {
    name: 'AppProduct',
    components:{
        AppModal
    },

    props:{
        product : Object,
    },

    data(){
        return{
            state,
            
        }
    },
    methods:{
        createModal(){
            this.modalInactive= 'modalActive'
        }
            
        
    }
    

}
</script>

<template>
    <div class="card m-3 p-0" style="width: 18rem;">
        
        <img :src="'/img/'+product.frontImage" class="card-img-top front-image" alt="'image of' + product.name">

        <img :src="'/img/'+product.backImage" class="card-img-top back-image" alt="'image of'+ product.name">

        <div class="card-body top">
            <div class="like">
                <i class="fa-solid fa-heart"></i>
            </div>

            <div class="sales">
                50%
            </div>

            <div class="sustainable">
                Sostenibilità
            </div>

            <div>{{product.brand}}</div>
            <h5 class="card-title" @click="$emit(createModal)">{{product.name}}</h5>
            <div class="card-text"> 14,99
                <span class="price">
                    <del class="text-danger">{{product.price}}&euro;</del>
                </span>
            </div>

        </div>
    </div>
</template>

<style lang="scss"></style>