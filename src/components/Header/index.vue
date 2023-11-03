<script setup>
import Logo from '@/components/Logo/index.vue'
</script>


<template>
    <header class="header">
        <div class="header__logo">
            <NuxtLink to="/">
                <Logo />
            </NuxtLink>
            
        </div>
        <ul class="header__menu">
            <li>
                <NuxtLink to="/">Posts</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about">About</NuxtLink>
            </li>
        </ul>
        <div class="header__auth">
            <NuxtLink to="/profile">
                <ProfileIcon />
            </NuxtLink>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #EFF0F3;
    box-shadow: 4px 6px 13px 0px rgba(215, 215, 215, 0.25);
    padding: 20px 0px;
    .header__menu {
        padding: 0;
        display: flex;
        list-style: none;
        gap: 0 50px;
    }
}
</style>