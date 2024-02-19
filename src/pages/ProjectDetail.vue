<script>
import axios from 'axios';
import { store } from '../store';
import ProjectCard from '../components/ProjectCard.vue';
export default {
    name: 'ProjectsDetail',
    data() {
        return {
            store,
            data: {},
        };
    },
    created() {
        this.getProject(this.store.url + this.store.urlMethod.projects + '/' + this.$route.params.slug);

    },
    methods: {
        getProject(url) {
            axios.get(url).then((response) => {
                this.data = response.data;
            });
        },
        linkProjects(){
            if(this.store.searchKey === ''){
                return {name : 'projects', query : { page : this.store.currentPage }};
            }else{
                return {name : 'projects', query : { page : this.store.currentPage, 'key' : this.store.searchKey }};
            }
        }
    }

};
</script>

<template>
    <main class="container d-flex flex-wrap align-content-start">
        <h1 class="mt-4 mb-4 col-12 text-center">{{ data.name }}</h1>
        <div v-if="data.image" class="image col-12 col-xl-6"><img :src="store.urlImage + data.image" class="w-100" alt="image"></div>
        <div class="right-box ps-4 d-flex flex-column flex-wrap">
            <h3 v-if="data.type">{{ data.type.name }}</h3>
            <ul  v-if="data.technologies" class="list-unstyled">
                <li class="d-inline">Technologies:</li>
                <li v-for="technology in data.technologies" class="d-inline px-1">{{ technology.name }}</li>
            </ul>
            <a class="btn btn-outline-primary px-4" :href="data.link" target="_blank" role="button" v-if="data.link">Project Link</a>
            <RouterLink :to="linkProjects()" class="btn btn-outline-primary d-block mt-auto w-50" role="button"><font-awesome-icon :icon="['fas', 'arrow-left']" /></RouterLink>
        </div>
    </main>
</template>
<style scoped lang="scss">
main {
    height: calc(100vh - 72px - 72px);
}
</style>