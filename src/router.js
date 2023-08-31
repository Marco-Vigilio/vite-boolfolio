import { createRouter, createWebHistory } from "vue-router";


import AppHome from "./components/pages/AppHome.vue";
import AppAbout from "./components/pages/AppAbout.vue";

//alert(typeof createRouter);

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {
            path: "/",
            name: "home",
            component: AppHome,
        },
        {
            path: "/about",
            name: "about",
            component: AppAbout,
        }
    ]

});

export { router };