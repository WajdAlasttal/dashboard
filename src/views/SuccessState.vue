<template>
    <div class="wrapper">
      <div class="success-state">
        <div class="text-center">
          <img src="../assets/images/Illustration.png" alt="success" />
        </div>
        <div class="header">
          <h5>تم تغيير كلمة المرور الخاصة بك بنجاح</h5>
          <p>تذكر دائمًا كلمة المرور لحسابك في Humanline!</p>
        </div>
        <button type="submit" class="btn">
        <router-link to="/">العودة لتسجيل الدخول</router-link>
      </button>
      </div>
    </div>
  </template>
  <style scoped>
  .wrapper {
    background-image: url("../assets/images/Background.png");
    width: 100%;
    height: 100vh;
    position: relative;
  }
  .success-state {
    position: absolute;
    top: 25%;
    left: 30%;
    direction: rtl;
    width: 100%;
    max-width: 35%;
    padding: 15px;
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
  .btn {
  padding: 18px 21px 18px 21px;
  width: 100%;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  color: #fff;
  background: #111827;
  cursor: pointer;
}
.btn a {
  text-decoration: none;
  color: #fff;
}
.btn:hover {
  opacity: 0.7;
}
  @media (max-width: 768px) {
  .success-state {
    top: 20%;
    left: 10%;
    max-width: 80%;
  }
  .header h5{
      font-size: 30px;
  }
  .header p{
      font-size: 15px;
  }
  }
  @media(min-width: 768px)and (max-width: 1024px) { 
  .success-state {
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
  }
  @media (min-width:1024px) and (max-width: 1115px){
  .success-state {
    top: 10%;
    left: 10%;
    max-width: 80%;
  } 
  }
  </style>