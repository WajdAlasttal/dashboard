<template>
    <div class="label">
      <label for="email">{{ label }}</label>
    </div>
    <div class="form-input">
      <input :type="type" :placeholder="placeholder" />
    </div>
  </template>
  
  <script>
  export default {
  name:'FormInputs',
  props:{
      label: {
          type:String,
          required:true,
      },
      type:{
          type : String,
          required:true,
      },
      placeholder:{
          type:String,
      }
  }
  }
  </script>
  
  <style scoped>
  .label{
      font-size: 14px;
      margin-bottom: 0.3rem;
  }
  .form-input input {
      font-family: 'Tajawal', sans-serif;
      width: 92%;
      border: 1px solid #E9EAEC;
      padding: 16px 20px 16px 20px;
      border-radius: 10px;
      margin-bottom: 1.5rem;
  }
  .form-input input:focus{
      outline: none !important;
      border: 2px solid #27A376 !important;
  }
  input[type=checkbox]{
    accent-color:  #27A376; 
    margin-left: 0.3rem;
    width: 17px;
    height: 17px;
    }
  
  </style>