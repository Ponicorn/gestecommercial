import { createRouter, createWebHistory } from 'vue-router';

import Etape1 from "../views/Etape1.vue";
import Etape2 from "../views/Etape2.vue";
import Etape3 from "../views/Etape3.vue";

const routes = [
    { path: '/', component: Etape1 },
    { path: '/chargement', component: Etape2 },
    { path: '/offre', component: Etape3 },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router