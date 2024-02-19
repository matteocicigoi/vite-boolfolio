import { reactive } from "vue";

export const store = reactive ({
    url: 'http://127.0.0.1:8000',
    urlMethod: {
        projects: '/api/projects'
    },
    urlImage: 'http://127.0.0.1:8000/storage/',
    currentPage: 1,
    searchKey: '',
    errors: []
});