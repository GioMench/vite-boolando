<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'
import AppModal from './components/AppModal.vue'
import {state} from './state.js';

export default {
    name: 'App',
    components: {
        AppHeader,
        AppMain,
        AppFooter,
        AppModal,
        state
    }
}

</script>

<template>
    <AppHeader />
    <AppModal />
    <AppMain />
    <AppFooter />
</template>

<style lang="scss"></style>
