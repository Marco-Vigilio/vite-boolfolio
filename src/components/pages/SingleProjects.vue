<template lang="">
    <article class="single-post w-100">
        <h2>
            {{ projects.id }}
        </h2>
    </article>
</template>
<script>
export default {
    name: 'SingleProject',
    props: {
        'projects': Object,
    }
}
</script>
<style lang="scss" scoped>
.single-post {
    width: calc((100% / 2) - 1rem);
    border-radius: 1rem;
    padding: 1rem;
    margin-right: 1rem;
    background-color: rgb(221, 221, 221);
    color: black;
    margin-bottom: 2rem;

    * {
        margin-bottom: 1rem;
    }

    img {
        width: 100%;
        height: 10rem;
        object-fit: cover;
    }

    h6 span {
        margin-right: 1rem;
    }

    &:hover {
        background-color: white;
    }
}
</style>