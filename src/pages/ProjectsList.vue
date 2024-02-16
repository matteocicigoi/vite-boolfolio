<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
import PrevNext from '../components/PrevNext.vue';
export default {
    name: 'ProjectsList',
    components: {
        ProjectCard,
        PrevNext
    },
    data() {
        return {
            'url': 'http://127.0.0.1:8000',
            'urlMethod': {
                'projects': '/api/projects'
            },
            'data': {},
            'urlImage': 'http://127.0.0.1:8000/storage/'
        };
    },
    created() {
        this.getProjects(this.url + this.urlMethod.projects);

    },
    methods: {
        getProjects(url) {
            axios.get(url).then((response) => {
                this.data = response.data.results;
            });
        },
        prev() {
            this.getProjects(this.data.prev_page_url);
        },
        next() {
            this.getProjects(this.data.next_page_url);
        }
    }
}
</script>

<template>
    <div class="overflow-auto">
        <main class="container pt-5 d-flex flex-column">
            <div class="row">
                <ProjectCard v-for="project in data.data" :project="project" :urlImage="urlImage"></ProjectCard>
            </div>
            <!-- Paginazione -->
            <PrevNext :prev="data.prev_page_url" :next="data.next_page_url" @prev="prev" @next="next" class="mt-auto">
            </PrevNext>
            <!-- Fine Paginazione -->
        </main>
    </div>
</template>

<style scoped lang="scss">
main {
    height: calc(100vh - 72px - 72px);
}
</style>