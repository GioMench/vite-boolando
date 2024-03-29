<script>
export default {
    name: 'AppModal',

    data(){
        return {
            modalInactive : 'modalInactive'
        }
    },

    methods:{
        createModal(){
            modalInactive= 'modalActive'
        }
            
        
    }
}
</script>

<template>
<p :class="[modalInactive]">my modal</p>
</template>

<style>
</style>