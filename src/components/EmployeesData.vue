<template>
  <div class="table-employee p-3">
    <div
      class="employee-search d-flex align-items-center justify-content-between"
    >
      <div class="header">
        <h4>الموظفين</h4>
        <p>إدارة الموظف الخاص بك</p>
      </div>
      <div class="btns d-flex">
        <button class="btn1 d-flex align-items-center ms-2">
          <i class="fa-solid fa-download ms-1"></i> تنزيل
        </button>
        <button class="btn1 btn2">
          <i class="fa-solid fa-plus ms-1"></i>اضف
        </button>
      </div>
    </div>
    <div class="d-flex justify-content-between my-3">
      <form class="d-flex w-50 position-relative">
        <input
          class="form-control shadow-none"
          type="search"
          placeholder="ابحث"
          aria-label="Search"
        />
        <div class="position-absolute top-5 end-75 shadow-none">
          <i class="fa-solid fa-magnifying-glass text-success"></i>
        </div>
      </form>
      <div class="drop-downs d-flex">
        <div class="dropdown">
          <button
            class="btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            المكاتب
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
            <a
              scope="row"
              v-for="(office, index) in offices"
              :key="index"
              class="dropdown-item"
              href="#"
              >{{ office }}</a
            >
          </div>
        </div>
        <div class="dropdown">
          <button
            class="btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            الوظائف
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
            <a
              scope="row"
              v-for="(job, index) in jobs"
              :key="index"
              class="dropdown-item"
              href="#"
              >{{ job }}</a
            >
          </div>
        </div>
        <div class="dropdown">
          <button
            class="btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton3"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            الحالات
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton3">
            <a class="dropdown-item" href="#">الكل</a>
            <a class="dropdown-item" href="#">نشط</a>
            <a class="dropdown-item" href="#">غير نشط</a>
          </div>
        </div>
      </div>
    </div>
    <div style="overflow-x: auto">
      <table class="table">
        <thead>
          <tr>
            <th scope="col"><input type="checkbox" /></th>
            <th scope="col">الاسم</th>
            <th scope="col">الوظيفة</th>
            <th scope="col">المدير</th>
            <th scope="col">القطاع</th>
            <th scope="col">المكتب</th>
            <th scope="col">الحالة</th>
            <th scope="col">الحساب</th>
          </tr>
        </thead>
        <tbody>
          <tr scope="row" v-for="(employee, index) in employees" :key="index">
            <td scope="col"><input type="checkbox" /></td>
            <td >{{ employee.name }}</td>
            <td>{{ employee.jobTitle }}</td>
            <td>{{ employee.lineManager }}</td>
            <td>{{ employee.department }}</td>
            <td>{{ employee.office }}</td>
            <td>{{ employee.status }}</td>
            <td>{{ employee.account }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <nav aria-label="Page navigation">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
  
  <script>
import employeeData from "../assets/employees.json";
export default {
  data() {
    return {
      employees: employeeData,
      jobs: [
        "مهندس برمجيات",
        "مدير هندسة",
        "المدير التنفيذي",
        "أخصائي تسويق",
        "مدير تسويق",
        "مهندس ميكانيكي",
        "مدير مشتريات",
        "المدير التنفيذي",
        "محاسبة",
        "مدير مالية",
        "مدير موارد بشرية",
      ],
      offices: [
        "نيويورك",
        "سان فرانسيسكو",
        "لوس أنجلوس",
        "القاهرة",
        "الرياض",
        "لندن",
        "دبي",
      ],
    };
  },
};
</script>
  
  <style scoped>
.top-5 {
  top: 25%;
}
.end-75 {
  right: 95%;
}
th,
tr,
h4,
p {
  color: var(--text-primary-color);
}
.form-control {
  color: var(--background-color-primary);
}
.form-control:focus {
  border: 2px solid #27a376;
  box-shadow: none;
}
.btn {
  margin-right: 1rem;
  padding: 0.5rem 2rem;
  background-color: var(--background-color-primary);
  color: var(--text-primary-color);
  box-shadow: none;
}
.btn1 {
  font-family: "Tajawal", sans-serif;
  font-weight: 500;
  font-size: 16px;
  padding: 1rem 3rem;
  width: 100%;
  color: var(--text-primary-color);
  background-color: var(--background-color-primary);
  border: none;
  border-radius: 12px;
  cursor: pointer;
}
.btn2 {
  color: var(--background-color-primary);
  background-color: var(--button-color-secondary);
}
input[type="checkbox"] {
  accent-color: #27a376;
  margin-left: 0.3rem;
  width: 15px;
  height: 15px;
  border-radius: 50%;
}
.page-link {
  color: var(--text-primary-color);
  background: var(--background-color-primary);
  border: none;
}
.page-item:last-child .page-link {
  border-top-left-radius: 0.25rem !important;
  border-bottom-left-radius: 0.25rem !important;
  border-top-right-radius: 0rem;
  border-bottom-right-radius: 0rem;
}
.page-item:first-child .page-link {
  border-top-right-radius: 0.25rem !important;
  border-bottom-right-radius: 0.25rem !important;
  border-top-left-radius: 0rem;
  border-bottom-left-radius: 0rem;
}
.dropdown-menu {
  text-align: right;
  background-color: var(--background-color-primary);
}
.dropdown-menu .dropdown-item {
  color: var(--text-primary-color);
}
</style>