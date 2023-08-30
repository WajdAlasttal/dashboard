<template>
  <div class="home d-flex">
    <SideBar />
    <div class="home-content w-100">
      <Navbar />
      <div class="welcome">
        <h4>مرحبًا بريشيا</h4>
        <p>هذا هو تقرير الموارد البشرية الخاص بك حتى الآن</p>
      </div>
      <div class="home-conte mb-4">
        <HomeContent1 />
      </div>
      <div class="bottom-content d-flex ">
        <div class="home-conte w-100">
          <HomeContent2 />
        </div>
        <div class="donut">
          <div class="home-conte p-3">
            <DonutChart/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import Navbar from "../components/NavbarVue.vue";
import HomeContent1 from "../components/Home/HomeContent1.vue";
import HomeContent2 from "../components/Home/HomeContent2.vue";
import DonutChart from '../components/Charts/DonutChart.vue';
export default {
  components: {
    SideBar,
    Navbar,
    HomeContent1,
    HomeContent2,
    DonutChart
  },
};
</script>

<style scoped>
.home {
  direction: rtl;
  background: var(--accent-color);
}
.welcome {
  padding: 1.5rem 1rem;
  color: var(--text-primary-color);
}
.home-conte {
  background-color: var(--background-color-primary);
  margin: 0 1rem;
  border-radius: 10px;
}
</style>