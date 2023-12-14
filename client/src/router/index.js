import { createRouter, createWebHistory } from 'vue-router';
import FormRegistrasi from '../views/FormRegistrasi.vue';
import CekStatusPendaftaran from '../views/CekStatusPendaftaran.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: FormRegistrasi,
        },
        {
            path: '/status',
            name: 'status',
            component: CekStatusPendaftaran,
        },
    ],
});

export default router;
