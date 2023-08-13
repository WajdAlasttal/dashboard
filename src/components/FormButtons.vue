<template>
    <div class="form-button">
      <button class="btn" :disabled="disabled">{{ text }}</button>
    </div>
  </template>
  
  <script>
  export default {
      props:{
          text:{
              type:String,
              required:true,
          },
          disabled:{
              type:Boolean,
              required:false
          }
      }
  }
  </script>
  
  <style scoped>
  .form-button{
      text-align: center;
  }
  .btn{
      font-family: 'Tajawal', sans-serif;
      margin-top: 1rem;
      padding: 18px 21px 18px 21px;
      width: 100%;
      font-size: 1rem;
      border: none;
      border-radius: 10px;
      color: #fff;
      background: #111827;
      cursor: pointer;
  }
  .btn:hover{
      opacity: 0.7;
  }
  .btn:disabled{
      opacity: 0.5;
  }
  </style>