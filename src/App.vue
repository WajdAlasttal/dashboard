<template>
  <div class="home d-flex">
    <SideBar v-if="shouldRenderSidebar" />
    <div class="home-content w-100">
      <Navbar v-if="shouldRenderSidebar" />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";
import Navbar from "./components/NavbarVue.vue";
export default {
  name: "App",
  components: {
    SideBar,
    Navbar,
  },
  computed: {
    shouldRenderSidebar() {
      // Check if the current route requires the sidebar
      return this.$route.matched.some(route => route.meta.showSidebar);
    },
    shouldRenderNavbar() {
      // Check if the current route requires the navbar
      return this.$route.matched.some(route => route.meta.showNavbar);
    }
  },
};
</script>

<style>
/* @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap'); */
@import url("https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800;900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-shadow: none;
}
body {
  height: 100%;
  font-family: "Tajawal", sans-serif;
  position: relative;
  direction: rtl;
}
:root {
  --background-color-primary: #fff;
  --background-color-secondary: #111827;
  --accent-color: #f1f2f4;
  --text-primary-color: #111827;
  --text-secondary-color: #fff;
  --button-color-secondary: #111827;
  --element-size: 3.8rem;
  --button-theme: #fff;
}

:root.dark-theme {
  --background-color-primary: #111827;
  --background-color-secondary: #323b49;
  --accent-color: #323b49;
  --button-color-secondary: #fff;
  --text-primary-color: #fff;
  --button-theme: #323b49;
}
.home {
  direction: rtl;
  background: var(--accent-color);
}
div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm {
  background: var(--background-color-secondary) !important;
  padding: 1rem 7rem;
}
</style>
