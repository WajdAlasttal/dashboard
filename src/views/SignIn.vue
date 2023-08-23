<template>
  <div class="login d-flex">
    <div class="col-md-12 col-lg-5 d-none d-md-block">
    <div class="side-bar">
      <div class="side-image">
        <img
        src="../assets/images/Photo.png"
      />
      </div>
      <div class="content">
        <div class="logo d-flex">
          <i class="fa-solid fa-asterisk"></i>
          <h4>هيومانلاين</h4>
        </div>
        <h5>دعنا نمكن موظفيك اليوم.</h5>
        <p>نحن نساعد على إكمال جميع احتياجات النقل الخاصة بك بسهولة</p>
      </div>
    </div>
    </div>
    <div class="col-md-12 col-lg-6 ">
      <div class="login-form">
        <h1 class="login-header text-center mt-sm-0">
        تسجيل الدخول أولا إلى حسابك
        </h1>
        <SignInForm />
        <div class="container">
          <div class="line"></div>
          <div class="word">أو تسجيل الدخول باستخدام</div>
        </div>
        <div class="login-buttons">
          <ButtonVue icon="fa-google" text="جوجل" />
          <ButtonVue icon="fa-apple" text="آبل" />
        </div>
        <p class="create-acc">هل أنت جديد هنا؟ <span>إنشاء حساب</span></p>
        <div class="footer">
          <p style="color: #a0aec0">© 2023 هيومانلاين. الحقوق محفوظة.</p>
          <p>الشروط والأحكام</p>
          <p>سياسة الخصوصية</p>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import SignInForm from "../components/SignInForm.vue";
import ButtonVue from "../components/ButtonVue.vue";
export default {
  components: {
    SignInForm,
    ButtonVue,
  },
};
</script>
  
<style  scoped>
html,
body {
  max-height: 100%;
  height:100%;
}
.login {
  direction: rtl;
}
.side-bar {
  background-color: #111827;
  color: #fff;
}
.side-image img {
  width: 100%;
  height: 64vh;
  border-bottom: 5px solid #27a376;
}
.side-bar .content {
  padding: 2rem 1rem;
}
.content .logo i {
  font-size: 20px;
  color: #27a376;
  margin-left: 0.3rem;
  margin-top: 0.3rem;
}
.content h5 {
  font-size: 38px;
  font-weight: 700;
  margin: 1rem 0;
}
.content p {
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 3.3rem;
}
.login-form {
  margin-top: 3rem;
  margin-right: 10rem;
}
.login-header {
  margin-bottom: 1rem;
}
.container {
  text-align: center;
  position: relative;
}
.line {
  width: 100%;
  height: 1px;
  background-color: #f1f2f4;
  margin-top: 2rem;
}
.word {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  color: #687588;
  padding: 0 10px;
}
.login-buttons {
  display: flex;
  justify-content: space-evenly;
}
.create-acc span {
  color: #27a376;
}
.create-acc {
  margin-top: 1rem;
  text-align: center;
  font-size: 14px;
}
.footer {
  position: absolute;
  bottom: 0%;
  left: 12%;
  display: flex;
  justify-content: center;
}
.footer p {
  margin-left: 1rem;
  font-size: 14px;
}
@media (max-width: 768px) { 
*{
  justify-content: center;
}
  .login-form {
  justify-content: center;
  margin-right:0;
  margin: 4rem;
}
.line {
  margin-top: 2rem;
}
.word {
  font-size: 12px;
  margin: 0;
}
.footer {
  left:0%;
  right: 3%;
}
.footer p {
  font-size: 10.5px;
}
}
@media (max-width: 376px) {
  .footer {
  left:0%;
  right: 7%;
}
.footer p {
  font-size: 8px;
}
}
@media(min-width: 766px)and (max-width: 1025px) { 
.login{
  flex-direction: column-reverse;
}
.login-form {
  margin-right:0;
  margin: 4rem;
}
.line {
  margin-top: 2rem;
}
.word {
  font-size: 12px;
  margin: 0;
}
.footer {
  left: 25%;
}
.footer p {
  color: #27a376;
}
}
@media (min-width:1024px) and (max-width: 1115px){
  .side-bar .content {
  padding: 3rem 0;
}
.content h5 {
  font-size: 28px;
}
.content p {
  font-size: 16px;
}
.login-form {
  margin-top: 1rem;
}
.login-header {
  font-size: 31px;
}
.word {
  font-size: 14px;
}
.footer p {
  margin-left: 1rem;
  font-size: 14px;
}
.footer {
  left: 25%;
}
}
</style>