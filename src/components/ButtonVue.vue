<template>
    <div class="button">
      <button class="icon-button">
      <span class="icon"><i :class="iconClass"></i></span>
      <span class="text">{{ buttonText }}</span>
    </button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      icon: String,
      text: String,
    },
    computed: {
      iconClass() {
        return ['fa-brands', this.icon];
      },
      buttonText() {
        return this.text || 'Button';
      },
    },
  }
  </script>
  
  <style scoped>
  button{
    font-family: 'Tajawal', sans-serif;
    font-weight: 500;
    font-size: 16px;
    padding: 1rem 4rem;
    width: 100%;
    color: var(--text-primary-color);
    background-color: var(--background-color-primary);
    border: 1px solid #E9EAEC;
    border-radius: 12px;
    cursor: pointer;
  }
  .button {
    margin-top: 2rem;
    display: flex;
    flex-direction: row-reverse;
  }
  .icon {
    margin-left: 1rem;
  }
  @media (max-width: 768px) { 
    button{
    font-size: 14px;
  }
    .icon {
    margin-left: 0rem;
  } 
  }
  </style>