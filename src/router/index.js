import { createRouter, createWebHistory } from "vue-router";
import SignIn from "../views/SignIn.vue";
import ResetPassword from "../views/ResetPassword.vue";
import NewPassword from "../views/NewPassword.vue";
import OTPVerification from "../views/OTPVerification.vue";
import SuccessState from '../views/SuccessState.vue'
import StepsPage from '../views/StepsPage.vue';
import HomePage from '../views/HomePage.vue';
// import HomeContents from '../views/HomeContents.vue'
import EmployeesPage from '../views/EmployeesPage.vue';
const routes = [
  {
    path: "/",
    name: SignIn,
    component: SignIn,
    meta: { showSidebar: false, showNavbar: false } 
  },
  {
    path: "/resetpassword",
    name: ResetPassword,
    component: ResetPassword,
    meta: { showSidebar: false, showNavbar: false } 
  },
  {
    path: "/newpassword",
    name: NewPassword,
    component: NewPassword,
    meta: { showSidebar: false, showNavbar: false } 
  },
  {
    path:"/otpverification",
    name:OTPVerification,
    component:OTPVerification,
    meta: { showSidebar: false, showNavbar: false } 
  },
  {
    path:'/success',
    name:SuccessState,
    component:SuccessState,
    meta: { showSidebar: false, showNavbar: false } 
  },
  {
    path:'/steps',
    name:StepsPage,
    component:StepsPage,
    meta: { showSidebar: false, showNavbar: false } 
  },
  {
    path:'/home',
    name:HomePage,
    component:HomePage,
    meta: { showSidebar: true, showNavbar: true } 
  },
  // {
  //   path:'/dashboard',
  //   name:HomeContents,
  //   component:HomeContents,
  // },
  {
    path:'/employees',
    name:EmployeesPage,
    component:EmployeesPage,
    meta: { showSidebar: true, showNavbar: true } 
  },
];
const router = createRouter({
  routes,
  history: createWebHistory(),
});
export default router;
