<template>
    <div class="login">
      <div class="side-bar">
        <div class="side-image">
          <img src="../assets/images/Photo.png" alt="onboarding" />
        </div>
        <div class="content">
          <div class="logo">
            <i class="fa-solid fa-asterisk"></i>
            <h4>هيومانلاين</h4>
          </div>
          <h5>دعنا نمكن موظفيك اليوم.</h5>
          <p>نحن نساعد على إكمال جميع احتياجات النقل الخاصة بك بسهولة</p>
        </div>
      </div>
      <div class="login-form">
        <h1 class="login-header">تسجيل الدخول أولا إلى حسابك</h1>
        <form action="">
          <FormInputs
            label="البريد الالكتروني"
            type="email"
            placeholder="ادخل البريد الالكتروني"
          />
          <FormInputs
            label="كلمة المرور"
            type="password"
            placeholder="ادخل كلمة المرور"
          />
          <div class="check-forget">
            <div class="check-box">
              <FormInputs label="تذكرني" type="checkbox" />
            </div>
            <div class="password">
              <p><a href="#">هل نسيت كلمة السر</a></p>
            </div>
          </div>
          <FormButtons text="تسجيل الدخول" :disabled="true" />
        </form>
        <div class="container">
          <div class="line"></div>
          <div class="word">أو تسجيل الدخول باستخدام</div>
        </div>
       <div class="login-buttons">
          <ButtonVue icon="fa-google" text="جوجل"  />
          <ButtonVue icon="fa-apple" text="آبل"  />
       </div>
       <p class="create-acc">هل أنت جديد هنا؟ <span>إنشاء حساب</span></p>
       <div class="footer">
          <p style="color: #A0AEC0;">© 2023 هيومانلاين. الحقوق محفوظة.</p>
          <p>الشروط والأحكام</p>
          <p>سياسة الخصوصية</p>
      </div>
      </div>
    </div>
  </template>
  
  <script>
  import FormInputs from "../components/FormInputs.vue";
  import FormButtons from "../components/FormButtons.vue";
  import ButtonVue from '../components/ButtonVue.vue';
  export default {
    components: {
      FormInputs,
      FormButtons,
      ButtonVue,
    },
  };
  </script>
  
  <style  scoped>
  @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800;900&display=swap');
  * {
    font-family: 'Tajawal', sans-serif;
  }
  .login {
    direction: rtl;
    display: flex;
    align-items: center;
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
    padding: 2.5rem 2rem;
  }
  h1 {
    text-align: center;
  }
  .content .logo {
    display: flex;
  }
  .content .logo i {
    font-size: 25px;
    color: #27a376;
    margin-left: 0.2rem;
  }
  .content h5 {
    font-size: 38px;
    font-weight: 700;
  }
  .content p {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 3rem;
  }
  .login-form {
    margin-right: 15rem;
  }
  .login-header{
    margin-bottom: 1rem;
  }
  .check-box {
    display: flex;
    justify-content: flex-end;
    flex-direction: row-reverse;
    color: #687588;
  }
  .check-forget {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width: 100%;
  }
  .check-forget .password p a {
    font-size: 13px;
    color: #687588;
    text-decoration: none;
  }
  .check-forget .password p a:hover {
    color: #27a376;
  }
  
  .container {
    text-align: center;
    position: relative;
  }
  .line {
    width: 100%;
    height: 1px;
    background-color: #F1F2F4; 
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
  .login-buttons{
      display: flex;
      justify-content: space-evenly;
  }
  .create-acc span{
      color: #27a376;
  }
  .create-acc{
      margin-top: 1rem;
      text-align: center;
      font-size: 14px;
  }
  .footer{
      margin-top: 4rem;
      display: flex;
  }
  .footer p{
      margin-left: 1rem;
      font-size: 14px;
  }
  </style>