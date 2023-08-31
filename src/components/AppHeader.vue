<template>
    <h1>
        Sono Header
    </h1>
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
    background-color: black;
    color: white;
}
</style>