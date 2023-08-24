import { createRouter, createWebHistory } from "vue-router";
import SignIn from "../views/SignIn.vue";
import ResetPassword from "../views/ResetPassword.vue";
import NewPassword from "../views/NewPassword.vue";
import OTPVerification from "../views/OTPVerification.vue";
import SuccessState from '../views/SuccessState.vue'
import StepsPage from '../views/StepsPage.vue';
import HomePage from '../views/HomePage.vue';
const routes = [
  {
    path: "/",
    name: SignIn,
    component: SignIn,
  },
  {
    path: "/resetpassword",
    name: ResetPassword,
    component: ResetPassword,
  },
  {
    path: "/newpassword",
    name: NewPassword,
    component: NewPassword,
  },
  {
    path:"/otpverification",
    name:OTPVerification,
    component:OTPVerification
  },
  {
    path:'/success',
    name:SuccessState,
    component:SuccessState,
  },
  {
    path:'/steps',
    name:StepsPage,
    component:StepsPage,
  },
  {
    path:'/home',
    name:HomePage,
    component:HomePage,
  }
];
const router = createRouter({
  routes,
  history: createWebHistory(),
});
export default router;
