import { createRouter, createWebHistory } from 'vue-router';
import Quizzes from "@/views/Quizzes.vue";
import Quiz from "@/views/Quiz.vue";
import Result from "@/components/Result.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "quizzes",
            component: Quizzes,
        },
        {
            path: "/quiz/:id",
            name: "quiz",
            component: Quiz,
        }
    ]
});

export default router;
