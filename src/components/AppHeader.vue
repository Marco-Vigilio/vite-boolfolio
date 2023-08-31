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
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">About</a>
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