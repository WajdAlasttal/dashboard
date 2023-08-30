<template>
  <div class="table-employee p-3">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">الاسم</th>
          <th scope="col">الوظيفة</th>
          <th scope="col">المدير</th>
          <th scope="col">القطاع</th>
          <th scope="col">المكتب</th>
        </tr>
      </thead>
      <tbody>
        <tr scope="row" v-for="(employee, index) in employees" :key="index">
          <td>{{ employee.name }}</td>
          <td>{{ employee.jobTitle }}</td>
          <td>{{ employee.lineManager }}</td>
          <td>{{ employee.department }}</td>
          <td>{{ employee.office }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import employeeData from "../../assets/data.json";
export default {
    data() {
    return {
      employees: employeeData,
    };
  },
};
</script>

<style scoped>
th , tr{
    color: var(--text-primary-color);
}
</style>