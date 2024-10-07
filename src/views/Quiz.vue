<script setup>
import quizzes from "@/data/quizzes.json";
import { useRoute } from "vue-router";
import Question from "@/components/Question.vue";
import Result from "@/components/Result.vue";
import { ref } from "vue";

const route = useRoute();
const quizId = parseInt(route.params.id);
const quiz = quizzes.find(q => q.id === quizId);
const currentQuestionIndex = ref(0);
const numberOfCorrectAnswers = ref(0);
const showResult = ref(false);

let isProcessing = false;

function onOptionSelected(isCorrect) {
    if (isProcessing) return;
    isProcessing = true;

    if (isCorrect) {
        numberOfCorrectAnswers.value++;
    }
    setTimeout(() => {
        if (quiz.questions.length - 1 === currentQuestionIndex.value) {
            showResult.value = true;
        } else {
            currentQuestionIndex.value++;
        }
        isProcessing = false;
    }, 200);
}

</script>

<template>
    <div class="container">
        <div class="mt-3">
            <Question
                v-if="!showResult"
                :question="quiz.questions[currentQuestionIndex]"
                @selectOption="onOptionSelected"
            />
            <Result
                v-else
                :quizQuestionLength="quiz.questions.length"
                :numberOfCorrectAnswers="numberOfCorrectAnswers"
            />
        </div>
    </div>
</template>

<style scoped>

</style>
