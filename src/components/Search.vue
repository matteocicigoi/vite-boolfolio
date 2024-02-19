<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        search(){
            this.$router.push({
                name : 'projects',
                query : {
                    page: 1,
                    key: this.store.searchKey
                }
            });
            this.$emit('searchProjects');
        },
        resetSearchInput(){
            this.store.searchKey = '';
        }
    }
};
</script>
<template>
    <div class="form-floating mb-3 col-6 mx-auto btn-group">
        <input type="email" class="form-control rounded-0 rounded-start-2 shadow-none" id="floatingInput" placeholder="search" v-model="store.searchKey" @keyup.enter="search">
        <label for="floatingInput">Search</label>
        <button type="button" class="btn btn-outline-danger z-2" v-if="store.searchKey.length > 0" @click="resetSearchInput"><font-awesome-icon :icon="['fas', 'trash']" /></button>
        <button type="button" class="btn btn-outline-primary" @click="search">Submit</button>
    </div>
</template>