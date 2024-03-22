<script>
export default {
    name: 'AppProduct'
}
</script>

<template>
    <div class="card m-3 p-0" style="width: 18rem;">

        <img src="/img/1.webp" class="card-img-top front-image" alt="...">

        <img src="/img/1b.webp" class="card-img-top back-image" alt="">

        <div class="card-body top">
            <div class="like">
                <i class="fa-solid fa-heart"></i>
            </div>

            <div class="sales">
                -50%
            </div>

            <div class="sustainable">
                Sostenibilità
            </div>

            <div>Levi's</div>
            <h5 class="card-title">RELAXED FIT TEE UNISEX</h5>
            <div class="card-text"> 14,99
                <span class="price">
                    <del class="text-danger">29,99&euro;</del>
                </span>
            </div>

        </div>
    </div>
</template>

<style lang="scss"></style>