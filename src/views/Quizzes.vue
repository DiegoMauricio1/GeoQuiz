<script setup>
import {ref} from "vue";
import Card from "@/components/Card.vue";
import q from "@/data/quizzes.json";

const quizzes = ref(q);
</script>

<template>

    <div class="logo-container">
        <img src="../components/logo.png" class="logo" alt="GeoQuiz logo"/>
        <h3 class="slogan">Rundt om verden på 1 minut!</h3>
    </div>
    <div class="container">
        <div class="row row-cols-3 mt-5">
            <Card v-for="quiz in quizzes" :quiz="quiz" />
        </div>
    </div>
    <footer class="text-center text-lg-start">
        <div class="text-center p-4 fs-5">© 2024 GeoQuiz</div>
    </footer>
</template>
<style scoped>

.logo-container {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 1000;
}

.logo {
    width: 20vw;
    height: auto;
}

.slogan {
    margin-top: -25px;
    color: white;
    font-style: italic;
}

.container {
    margin-top: 120px;
}

footer {
    bottom: 0;
    width: 100%;
    color: white;
    font-weight: 300;
    margin-top: 200px;
    line-height: 30px;
}

footer a {
    color: white;
    font-size: 1.2em;
    transition: 0.3s ease-in-out;
}

a:hover {
    color: black;
    font-size: 1.2em;

}

@media (max-width: 768px) {
    .logo {
        width: 400px;
    }
}

@media (max-width: 480px) {
    .logo {
        width: 250px;
    }
}

</style>