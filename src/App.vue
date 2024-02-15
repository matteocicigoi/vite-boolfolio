<script>
import axios from 'axios';
import Header from './components/Header.vue';
import Main from './components/Main.vue';
export default {
    components: {
        Header,
        Main
    },
    data() {
        return {
            'url' : 'http://127.0.0.1:8000',
            'urlMethod' : {
                'projects' : '/api/projects'
            },
            'data' : ''
        };
    },
    created() {
        axios.get(this.url + this.urlMethod.projects).then((response) => {
            this.data = response.data.results;
            console.log(response.data.results.data);
        });

    }
};
</script>

<template>
    <!-- Header -->
    <Header></Header>
    <!-- Fine Header -->
    <!-- Main -->
    <Main></Main>
    <!-- Fine Main -->
</template>