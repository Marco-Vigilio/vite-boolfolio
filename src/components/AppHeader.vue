<template>
    <nav>
        <ul>
            <!--
            <li v-for="(item, index) in menuItems" :key="index">
                <router-link :to="{ name: item.routeName }" class="nav-link">
                    {{ item.label }}
                </router-link>
            </li>
            -->
            <li>
                <router-link :to="{ name: 'home' }">Home</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'about' }">About us</router-link>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    name: "AppHeader",
}
</script>

<style lang="scss" scoped>
nav {
    background-color: rgb(247, 255, 252);
    display: flex;
    align-items: center;
    justify-content: center;

    ul {
        display: flex;
        list-style: none;



        li {
            margin: 2rem;

            a {
                text-decoration-line: none;
            }
        }
    }
}
</style>