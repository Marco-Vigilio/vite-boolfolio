import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./components/pages/AppHome.vue";
import AppAbout from "./components/pages/AppAbout.vue";

const router = createRouter({
    history: createWebHistory(),
    routers: [
        {
            path: "/",
            name: "home",
            component: AppHome,
        },
        {
            path: "/about",
            name: "projects",
            component: AppAbout,
        }
    ]
});

export { router };