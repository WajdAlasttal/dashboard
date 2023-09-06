<template>
  <div class="employees">
    <EmployeesData />
  </div>
</template>

<script>
import EmployeesData from '../components/Home/EmployeesData.vue';
export default {
  components:{
    EmployeesData
  }
};
</script>

<style scoped>
th,
tr,
h4 {
  color: var(--text-primary-color);
}
.form-control {
  background: var(--accent-color);
  border: none;
  color: var(--text-primary-color);
}
</style>