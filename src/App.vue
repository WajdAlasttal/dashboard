<template>
  <router-view/>
</template>

<script>


export default {
  name: 'App',
}
</script>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap'); */
@import url("https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800;900&display=swap");
*{
  margin: 0;
  padding: 0;
}
body{
  height: 100%;
  font-family: 'Tajawal', sans-serif;
  position: relative;
}
:root {
  --background-color-primary: #fff;
  --background-color-secondary: #111827;
  --accent-color: #cacaca;
  --text-primary-color: #111827;
  --text-secondary-color: #fff;
  --button-color-secondary: #111827;
  --element-size: 3.8rem;
}

:root.dark-theme {
  --background-color-primary: #111827;
  --background-color-secondary: #323B49;
  --accent-color: #323B49;
  --button-color-secondary: #fff;
  --text-primary-color: #fff;
}

</style>
