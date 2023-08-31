<template>
  <div class="table-employee p-3">
    <div class="employee-search d-flex justify-content-between">
      <h4>الموظفين</h4>
      <form class="d-flex">
        <input
          class="form-control shadow-none ps-4 pe-5 position-relative"
          type="search"
          placeholder="ابحث"
          aria-label="Search"
        />
        <button class="btn position-absolute shadow-none" type="submit">
          <i class="fa-solid fa-magnifying-glass text-success"></i>
        </button>
      </form>
    </div>
    <div class="drop-downs d-flex justify-content-between my-3">
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          المكاتب
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <a v-for="(employee, index) in employees" :key="index" class="dropdown-item" href="#">{{ employee.office }}</a>
        </div>
      </div>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton2"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          الوظائف
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
          <a scope="row" v-for="(employee, index) in employees" :key="index" class="dropdown-item" href="#">{{ employee.jobTitle }}</a>
        </div>
      </div>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton3"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
        الحالات
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton3">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
    </div>
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