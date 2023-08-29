<template>
<div class="home d-flex">
    <SideBar/>
    <div class="home-content w-100">
      <Navbar/>
    </div>
</div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import Navbar from '../components/NavbarVue.vue';
export default {
  components: {
    SideBar,
    Navbar
  },
};
</script>

<style scoped>
.home{
    direction: rtl;
    background: var(--accent-color);
}
</style>