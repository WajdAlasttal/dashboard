import { createRouter , createWebHistory } from "vue-router";
import SignIn from '../views/SignIn.vue';
import ResetPassword from '../views/ResetPassword.vue';
const routes = [
    {
    path: '/',
    name: SignIn,
    component: SignIn,
    },
    {
    path:'/resetpassword',
    name: ResetPassword,
    component: ResetPassword
    }
]
const router=createRouter({
    routes,
    history: createWebHistory(),
})
export default router;