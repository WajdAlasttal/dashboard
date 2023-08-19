<template>
      <button class="btn">{{ text }}</button>
  </template>
  <script>
  export default {
    props: {
      text: String,
    },
  }
  </script>
  
  <style scoped>
.btn {
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
.btn:hover {
  opacity: 0.7;
}
  </style>