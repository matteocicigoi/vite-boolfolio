<script>
export default {}
</script>
<template>
    <header>
        <nav class="navbar bg-body-tertiary p-3">
            <div class="container-fluid justify-content-center align-content-center">
                <a class="navbar-brand" href="#">Portfolio</a>
                <ul class="list-unstyled px-3 m-0">
                    <li class="d-inline px-2"><RouterLink :to="{name : 'home'}">Home</RouterLink></li>
                    <li class="d-inline px-2"><RouterLink :to="{name : 'projects'}">Projects</RouterLink></li>
                </ul>
            </div>
        </nav>
    </header>
</template>