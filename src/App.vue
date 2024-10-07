<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';

onMounted(() => {
    const logo = document.getElementById('logo');
    if (logo) {
        logo.addEventListener('click', () => {
            const startupScreen = document.getElementById('startup-screen');
            if (startupScreen) startupScreen.style.display = 'none';
            const appDiv = document.getElementById('app');
            if (appDiv) appDiv.style.display = 'block';
        });
    }
});
</script>

<template>
    <RouterView/>
</template>

