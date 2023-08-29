<template>
<div class="home d-flex">
    <SideBar/>
    <div class="home-content w-100">
      <Navbar/>
      <div class="welcome">
        <h4>مرحبًا بريشيا</h4>
        <p>هذا هو تقرير الموارد البشرية الخاص بك حتى الآن</p>
      </div>
      <div class="home-conte">
        <HomeContent1/>
      </div>
    </div>
</div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import Navbar from '../components/NavbarVue.vue';
import HomeContent1 from '../components/Home-content1.vue';
export default {
  components: {
    SideBar,
    Navbar,
    HomeContent1
  },
};
</script>

<style scoped>
.home{
    direction: rtl;
    background: var(--accent-color);
}
.welcome{
  padding: 1.5rem 1rem;
  color: var(--text-primary-color);
}
.home-conte{
  background-color: var(--background-color-primary);
  margin: 0 1rem;
  border-radius: 10px;
}
</style>