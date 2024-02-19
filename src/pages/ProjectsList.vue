<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
import PrevNext from '../components/PrevNext.vue';
import Search from '../components/Search.vue';
import { store } from '../store';
export default {
    name: 'ProjectsList',
    components: {
        ProjectCard,
        PrevNext,
        Search
    },
    data() {
        return {
            store,
            urlProjects: store.url + store.urlMethod.projects + '?page=' + store.currentPage + (store.searchKey !== '' ? '&key=' + store.searchKey : ''),
            data: {},
        };
    },
    created() {
        this.store.currentPage = this.$route.query.page;
        this.getProjects(this.urlProjects);

        this.$watch(
            () => this.$route.params, (toParams, previousParams) => {
                this.urlProjects = this.store.url + this.store.urlMethod.projects + '?page=' + this.store.currentPage + (this.store.searchKey !== '' ? '&key=' + this.store.searchKey : '')
                this.getProjects(this.urlProjects);
            }
        )

    },
    methods: {
        getProjects(url) {
            axios.get(url).then((response) => {
                this.data = response.data.results;
                this.store.currentPage = response.data.results.current_page;
                this.store.errors = [];
            }).catch((response) => {
                this.store.errors = response.response.data.errors.key;
            });
        },
        prev() {
            this.store.currentPage--;
            this.projectsRouterPush();
        },
        next() {
            this.store.currentPage++;
            this.projectsRouterPush();
        },
        search() {
            this.store.currentPage = 1;
            this.projectsRouterPush();
        },
        projectsRouterPush() {
            if (this.store.searchKey === '') {
                this.$router.push({
                    name: 'projects',
                    query: {
                        page: this.store.currentPage,
                    }
                });
            } else {
                this.$router.push({
                    name: 'projects',
                    query: {
                        page: this.store.currentPage,
                        key: this.store.searchKey
                    }
                });
            }
        }
    }
}
</script>

<template>
    <div class="overflow-auto">
        <main class="container pt-5 d-flex flex-column">
            <Search @searchProjects="search"></Search>
            <template v-if="store.errors.length > 0">
                <div class="alert alert-danger" role="alert" v-for="error in store.errors">
                    {{ error }}
                </div>
            </template>
            <div class="row">
                <ProjectCard v-for="project in data.data" :project="project" :urlImage="store.urlImage"></ProjectCard>
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