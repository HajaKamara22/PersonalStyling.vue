<script setup>
import { RouterView } from 'vue-router'
</script>

<template>







<RouterView/>

<RouterLink to="/"> 
    <!-- <img class="logo" href="http://localhost:5176/" src="../src/assets/1.png"> -->
</RouterLink>


</template>

<style scoped>

.logo{
    border-radius: 500px;
    width: 60px;
    height: auto;
    position: absolute;
    top: 20px;
    left: 5%;
    transform: translateX(-50%);
    padding: 10px;
}


</style>
