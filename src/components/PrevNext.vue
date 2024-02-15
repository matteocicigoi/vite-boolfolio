<script>
export default {
    props : [ 'prev', 'next']
}
</script>

<template>
    <div class="prev-next d-flex justify-content-between">
        <button v-if="prev !== null" type="button" class="btn btn-outline-primary m-2" @click="$emit('prev')"><font-awesome-icon :icon="['fas', 'arrow-left']" /></button>
        <button v-if="next !== null" type="button" class="btn btn-outline-primary ms-auto m-2" @click="$emit('next')"><font-awesome-icon :icon="['fas', 'arrow-right']" /></button>
    </div>
</template>