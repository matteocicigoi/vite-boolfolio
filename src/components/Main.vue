<script>
import ProjectCard from './ProjectCard.vue';
import PrevNext from './PrevNext.vue';
export default{
    components : {
        ProjectCard,
        PrevNext
    },
    props: [
        'projects', 'urlImage', 'prev', 'next'
    ],
}
</script>
<template>
    <div class="overflow-auto">
    <main class="container pt-5 d-flex flex-column">
        <div class="row">
            <ProjectCard v-for="project in projects" :project="project" :urlImage="urlImage"></ProjectCard>
        </div>
        <!-- Paginazione -->
        <PrevNext :prev="prev" :next="next" @prev="$emit('prev')" @next="$emit('next')" class="mt-auto"></PrevNext>
        <!-- Fine Paginazione -->
    </main>
</div>
</template>

<style scoped lang="scss">
main {
    height: calc(100vh - 72px - 72px);
}
</style>