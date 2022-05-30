import {createRouter, createWebHistory} from 'vue-router';

import ChoachDetail from './pages/coaches/ChoachDetail.vue';
import ChoachesList from './pages/coaches/ChoachesList.vue';
import ChoachRegistration from './pages/coaches/ChoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/coaches'},
        {path: '/coaches', component: ChoachesList},
        {path: '/coaches/:id', component: ChoachDetail, children: [
            {path: 'contact', component: ContactCoach},
        ]},
        {path: '/register', component: ChoachRegistration},
        {path: '/requests', component: RequestsReceived},
        {path: '/:notFound(.*)', component: NotFound},
    ],
});

export default router;