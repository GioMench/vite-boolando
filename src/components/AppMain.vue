<script>
import AppProduct from '../components/AppProduct.vue'
export default {
    name: 'AppMain',
    components:{
        AppProduct,
    }
}
</script>

<template>

    <main>
        <div class="container m-5 p-0">
            <div class="row row-cols-1 row-cols-sm-3 row-cols-md-4">

                <AppProduct />

            </div>
        </div>
    </main>



</template>

<style lang="scss"></style>
