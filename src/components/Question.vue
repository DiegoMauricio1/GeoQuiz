<script setup>
import { defineProps, defineEmits, ref, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import { RouterLink } from "vue-router";

const { question } = defineProps(['question']);
const emit = defineEmits(['selectOption']);
const router = useRouter();

let timeLeft = ref(60);
let timer = null;
const userAnswer = ref("");
const numberOfCorrectAnswers = ref(0);

function emitSelectedOption(isCorrect) {
    emit('selectOption', isCorrect);
    if (isCorrect) {
        numberOfCorrectAnswers.value++;
    }
    userAnswer.value = '';
}

function startTimer() {
    const timerSound = document.getElementById("timer-sound");
    if (timerSound) {
        timerSound.play();
    }
    const timerDisplay = document.getElementById('timer-display');
    timer = setInterval(() => {
        if (timeLeft.value > 0) {
            timeLeft.value--;
            timerDisplay.innerText = `Tid tilbage: ${timeLeft.value}s`;
        } else {
            onTimerEnd();
        }
    }, 1000);
}

function stopTimer() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

onMounted(() => {
    startTimer();
});

onBeforeUnmount(() => {
    stopTimer();
});

</script>


<template>
    <div class="header">
        <RouterLink to="/">
        <img src="../components/logo.png" class="logo" alt="GeoQuiz logo"/>
        </RouterLink>
            <div class="timer mb-3" :class="{ 'blinking' : timeLeft <= 10}">
                <h2 id="timer-display">{{ timeLeft }}</h2>
            </div>
    </div>
        <audio id="timer-sound" src="/timer.mp3" preload="auto"></audio>
    <div class="quiz-container text-center">
        <h1>{{ question.text }}</h1>
        <img :src="question.img" class="quiz-image" alt="">
        <div v-if="question.type === 'text'">
            <input
                type="text"
                v-model="userAnswer"
                placeholder="Skriv dit svar her"
                class="form-control border rounded-4 text-center input-box"
                @keyup.enter="emitSelectedOption(userAnswer.toLowerCase() === question.answer.toLowerCase())"
            />
        </div>
        <div class="row" v-else>
            <div class="col-12 col-md-6 mb-3" v-for="option in question.options" :key="option.id">
                <div class="form-check border rounded-4 text-center option-box" @click="emitSelectedOption(option.isCorrect)" style="cursor: pointer;">
                    <input class="form-check-input d-none" type="radio" :name="question.id" :id="option.id">
                    <label class="form-check-label w-100 h-100 d-flex align-items-center justify-content-center fs-4 fs-md-2" :for="option.id">
                        {{ option.text }}
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    width: 100%;
    top: 0;
    z-index: 1000;
}

img {
    max-width: 100%;
    height: 420px;
    object-fit: cover;
    border-radius: 8px;
}

.logo {
    width: 240px;
    height: auto;
    transition: transform 0.3s ease
}

.logo:hover {
    transform: scale(1.1)
}

h1 {
    font-size: 3em;
    color: white;
    font-weight: 500;
}

.quiz-image {
    margin-bottom: 20px;
}

.option-box {
    height: 80px;
    background-color: #f8f9fa;
    transition: background-color 0.3s ease;
    padding: 20px;
    font-weight: bold;
}

.option-box:hover {
    background-color: rebeccapurple;
    color: white;
}

.input-box {
    max-width: 50%;
    height: auto;
    background-color: #f8f9fa;
    transition: background-color 0.3s ease;
    padding: 20px;
    font-size: 1.5rem;
    line-height: 1.5;
    margin: 0 auto;
    display: block;
}

.input-box:focus {
    outline: none;
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.timer {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: green;
    color: white;
    font-size: 3rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    transition: background-color 1s linear;
}

.timer.blinking {
    animation: blink 0.3s step-start infinite;
}

.timer h2 {
    transition: color 0.5s ease-in-out;
}

@keyframes blink {
    0% { background-color: red; }
    50% { background-color: transparent; }
    100% { background-color: red; }
}

@media (max-width: 576px) {
    h1 {
        font-size: 2em;
    }
    .logo {
        width: 160px;
    }
    .timer {
        width: 80px;
        height: 80px;
    }
    .option-box {
        height: 60px;
        padding: 10px;
        font-size: 14px;
    }
    .form-check-label {
        font-size: 1rem;
    }
}

</style>
