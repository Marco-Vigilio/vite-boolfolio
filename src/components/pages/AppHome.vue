<script>
import axios from "axios";
import SingleProjects from '../pages/SingleProjects.vue';


export default {
    name: "AppHome",
    components: {
        SingleProjects
    },
    data() {
        return {
            projects: [],
            apiUrl: "http://127.0.0.1:8000/api/projects",
        }
    },
    methods: {
        getProjects() {
            //recupero projects e popolo le variabili
            axios.get(this.apiUrl, {
                params: {}
            })
                .then((response) => {
                    console.log(response.data);
                    this.projects = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    },

    created() {
        this.getProjects();
    }
}
</script>

<template>
    <section>
        <h1>Home</h1>
        <SingleProjects v-if="projects" :projects='projects' />
    </section>
</template>
<style lang="scss"></style>