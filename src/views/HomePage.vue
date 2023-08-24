<template>
<div class="home">
    <SideBar/>
</div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
export default {
  components: {
    SideBar,
  },
};
</script>

<style scoped>
.home{
    direction: rtl;
}
</style>