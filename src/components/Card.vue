<script setup>
import {defineProps} from "vue";

const {quiz} = defineProps(['quiz']);
</script>

<template>

    <div class="container col-12 col-md-4 mb-4">
        <div class="row justify-content-center">
            <div class="card rounded-4">
                <img :src="quiz.img" class="card-img-top" alt="card-img">
                <div class="card-body text-center">
                    <h3 class="card-title">{{ quiz.name}}</h3>
                    <p> {{ quiz.description }}</p>
                    <RouterLink :to="'/quiz/'+ quiz.id" class="custom-btn">Start</RouterLink>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>

.card {
    max-width: 80%;
    height: 400px;
    background-color: rgba(0, 0, 0, 0.4);
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
}

.card-body {
    color: white;
}

.card-img-top {
    height: 200px;
    padding: 10px;
    border-radius: 22px;
}

.custom-btn {
    display: inline-block;
    padding: 8px 30px;
    font-size: 1.2em;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    color: white;
    background-color: rebeccapurple;
    border-radius: 20px;
    border: 2px solid #6c757d;
    box-shadow: 4px 4px 2px rgba(0, 0, 0, 1);
    transition: background-color 0.3s, transform 0.2s;
}

.custom-btn:hover {
    background-color: #00ff00;
    color: #101010;
}

</style>