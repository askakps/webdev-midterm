<script setup>
import Header from '@/components/Header/index.vue'
</script>


<template>
        <div class="container">
            <Header />
            <div class="content">
                <slot></slot>
            </div>
        </div>
</template>

<style lang="scss" scoped></style>