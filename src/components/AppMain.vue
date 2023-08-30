<template>
    <div>
        <h1>Main</h1>
    </div>
    <div>
        <p v-for="project in projects">
            {{ project.title }}
        </p>
    </div>
</template>
<script>
import axios from "axios";

export default {
    name: "AppMain",

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
                    //console.log(response.data);
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
<style lang="scss"></style>