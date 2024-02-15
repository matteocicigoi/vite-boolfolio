<script>
import axios from 'axios';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';
export default {
    components: {
        Header,
        Main,
        Footer
    },
    data() {
        return {
            'url' : 'http://127.0.0.1:8000',
            'urlMethod' : {
                'projects' : '/api/projects'
            },
            'data' : {},
            'urlImage' : 'http://127.0.0.1:8000/storage/'
        };
    },
    created() {
        this.getProjects(this.url + this.urlMethod.projects);

    },
    methods: {
        getProjects(url){
            axios.get(url).then((response) => {
            this.data = response.data.results;
        });
        },
        prev(){
            this.getProjects(this.data.prev_page_url);
        },
        next(){
            this.getProjects(this.data.next_page_url);
        }
    }
};
</script>

<template>
    <!-- Header -->
    <Header></Header>
    <!-- Fine Header -->
    <!-- Main -->
    <Main :projects="data.data" :urlImage="urlImage" :prev="data.prev_page_url" :next="data.next_page_url" @prev="prev" @next="next"></Main>
    <!-- Fine Main -->
    <!-- Footer -->
    <Footer></Footer>
    <!-- Fine Footer -->
</template>