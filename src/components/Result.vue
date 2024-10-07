<script setup>
import { defineProps } from "vue";
import { useRoute, RouterLink } from "vue-router";

const route = useRoute();
const { quizQuestionLength, numberOfCorrectAnswers } = defineProps(['quizQuestionLength', 'numberOfCorrectAnswers']);

</script>

<template>
    <div class="result-container">
        <div class="text-center">
            <h3 class="result-title">
                {{
                    numberOfCorrectAnswers === 20
                        ? "🎉 Du klarede det! 🎉"
                        : numberOfCorrectAnswers >= 15
                            ? "Du var der næsten! 😩"
                            : "Du kan gøre det bedre! 😕"
                }}
            </h3>
            <div class="result-score">
                <p class="score"><span> {{ numberOfCorrectAnswers }} </span> ud af <span> {{ quizQuestionLength }} </span> spørgsmål besvaret korrekt!</p>
            </div>
            <br>
            <br>
            <RouterLink class="custom-btn" to="/">Prøv igen</RouterLink>
            <br>
            <footer class="text-center text-lg-start">
                <div class="text-center p-4 fs-5">© 2024 GeoQuiz</div>
            </footer>
        </div>
    </div>
</template>

<style scoped>

.result-container {
    padding: 20px;
    border-radius: 10px;
    margin-top: 100px;
}

.result-title {
    font-size: 5rem;
    color: white;
    animation: scaleUp 1s ease-in-out;
}

.result-score {
    margin: 20px 0;
}

.score {
    font-size: 2.8rem;
    color: white;
    animation: scaleUp 1s ease-in-out;
}

span {
    color: rebeccapurple;
    font-size: 4rem;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes scaleUp {
    from { transform: scale(0.5); }
    to { transform: scale(1); }
}

.custom-btn {
    display: inline-block;
    padding: 12px 36px;
    font-size: 1.6em;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    color: white;
    background-color: #15a838;
    border-radius: 20px;
    border: 2px solid #6c757d;
    box-shadow: 4px 4px 2px rgba(0, 0, 0, 1);
    transition: background-color 0.3s, transform 0.2s;
    margin-top: 50px;
    margin-bottom: 140px;
}

.custom-btn:hover {
    background-color: #2b9d44;
}

footer {
    bottom: 0;
    width: 100%;
    color: white;
    font-weight: 300;
    margin-top: 180px;
    line-height: 30px;
}

@media (max-width: 768px) {
    .result-title {
        font-size: 3rem;
    }
}

</style>


