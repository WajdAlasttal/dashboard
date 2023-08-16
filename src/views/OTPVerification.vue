<template>
    <div class="wrapper">
      <div class="otp-verify">
        <div class="logo d-flex justify-content-center align-items-center">
          <i class="fa-solid fa-asterisk ms-1"></i>
          <h4>هيومانلاين</h4>
        </div>
        <div class="header">
          <h5>التحقق من OTP</h5>
          <p>لقد أرسلنا رمز التحقق إلى عنوان البريد الإلكتروني </p>
        </div>
        <div class="form-floating">
          <OTPForm/>
        </div>
        <div class="footer d-flex justify-content-between">
            <p style="color: #a0aec0">© 2023 هيومانلاين. الحقوق محفوظة.</p>
            <p>الشروط والأحكام</p>
            <p>سياسة الخصوصية</p>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  import OTPForm from '../components/OTPForm.vue';
  export default {
    components: {
        OTPForm,
    },
  };
  </script>
  
  <style scoped>
  .wrapper {
    background-image: url("../assets/images/Background.png");
    width: 100%;
    height: 100vh;
    position: relative;
  }
  .otp-verify {
    position: absolute;
    top: 20%;
    left: 30%;
    direction: rtl;
    width: 100%;
    max-width: 40%;
    padding: 15px;
  }
  .logo i{
      color: #27a376;
  }
  .header {
    text-align: center;
  }
  .header h5{
      font-size: 32px;
  }
  .header p{
      font-size: 18px;
  }
  .footer {
    position: absolute;
    bottom: -77%;
    left: 12%;
    display: flex;
    justify-content: center;
  }
  .footer p {
    margin-left: 1rem;
    font-size: 14px;
  }
  @media (max-width: 768px) {
  .otp-verify {
    top: 5%;
    left: 10%;
    max-width: 80%;
  }
  .header h5{
      font-size: 30px;
  }
  .header p{
      font-size: 15px;
  }
  .footer {
    margin-top: 8rem;
  }
  .footer p {
    font-size: 12px;
  } 
  }
  @media(min-width: 768px)and (max-width: 1024px) { 
  .otp-verify {
    top: 25%;
    left: 15%;
    max-width: 70%;
  }
  .header h5{
      font-size: 32px;
  }
  .header p{
      font-size: 18px;
  }
  .footer {
    margin-top: 15rem;
  }
  .footer p {
    font-size: 15px;
  } 
  }
  @media (min-width:1024px) and (max-width: 1115px){
  .otp-verify {
    top: 10%;
    left: 10%;
    max-width: 80%;
  }
  .footer p {
    font-size: 15px;
  } 
  }
  </style>