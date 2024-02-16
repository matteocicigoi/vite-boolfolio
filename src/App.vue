<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { RouterView } from 'vue-router';
export default {
    components: {
    Header,
    Footer,
    RouterView
},
};
</script>

<template>
    <!-- Header -->
    <Header></Header>
    <!-- Fine Header -->
    <!-- Main -->
    <RouterView />
    <!-- Fine Main -->
    <!-- Footer -->
    <Footer></Footer>
    <!-- Fine Footer -->
</template>