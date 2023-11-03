<script setup>
const user = ref({
    name: 'Askar',
    surname: 'Kopbossynov',
    birthday: '23 February 2001',
    age: 22,
})
</script>

<template>
    <div>
        <h1>
            Profile page
        </h1>
        User: {{ user.name + ' ' + user.surname  }} <br>
        Birthday: {{ user.birthday  }} <br>
        Age: {{ user.age  }} <br>
    </div>
</template>