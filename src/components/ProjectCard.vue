<script>
export default {
    props: [
        'project', 'urlImage'
    ],
    methods: {
        getIcon(technology){
            if(technology === 'html') return ['fab', 'html5'];
            if(technology === 'css') return ['fab', 'css3-alt'];
            if(technology === 'javascript') return ['fab', 'js'];
            if(technology === 'php') return ['fab', 'php'];
            if(technology === 'sql') return ['fas', 'database'];
            if(technology === 'bootstrap') return ['fab', 'bootstrap'];
            if(technology === 'vue') return ['fab', 'vuejs'];
            //if(technology === 'vite') return ['fab', 'vuejs'];
            if(technology === 'laravel') return ['fab', 'laravel'];
            return false;
        },
        getClass(type){
            if(type === 'Frontend')return 'text-bg-light';
            if(type === 'Backend')return 'text-bg-dark';
            if(type === 'Full Stack')return 'text-bg-secondary';
        }
    }
};
</script>
<template>
    <article class="col-3 p-2">
        <div class="card h-100">
            <img v-if="project.image" :src="urlImage + project.image" class="card-img-top" alt="...">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">{{ project.name }}</h5>
                    <h6 class="badge col-6 border border-primary" :class="getClass(project.type?.name)">{{ project.type?.name }}</h6>
                    <ul class="list-unstyled">
                        <li v-for="technology in project.technologies" class="d-inline px-2 h5" :class="technology.slug"><span v-if="(getIcon(technology.name) === false)">{{ technology.name }}</span><font-awesome-icon v-else :icon="getIcon(technology.name)" /></li>
                    </ul>
                <a :href="project.link" class="btn btn-primary mt-auto col-6 mx-auto" v-if="project.link">Link</a>
            </div>
        </div>
    </article>
</template>

<style scoped lang="scss">
ul {
    li {
        &.html{
            color: #F75421;
        }
        &.css{
            color: #2862E9;
        }
        &.javascript{
            color: #F7C427;
        }
        &.php{
            color: #848DB9;
        }
        &.sql{
            color: #ffffff;
        }
        &.bootstrap{
            color: #7010EF;
        }
        &.vue{
            color: #3FB27F;
        }
        &.vite{
            color: #ffffff;
        }
        &.laravel{
            color: #F72C1F;
        }

    }
}
</style>