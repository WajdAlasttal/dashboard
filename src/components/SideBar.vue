<template>
  <div
    class="sidebar d-flex flex-column flex-shrink-0 p-3"
    :class="{ 'sidebar-closed': !sidebarOpen }"
  >
    <div class="brand d-flex align-items-center justify-content-between">
      <a
      v-if="sidebarOpen"
        href="/home"
        class="logo d-flex align-items-center mb-3 mb-md-0 text-decoration-none"
      >
        <i class="fa-solid fa-asterisk ms-2"></i>
        <span class="fs-4">هيومانلاين</span>
      </a>
      <i  @click="toggleSidebar" class="btn p-0 m-0" :class="{
              'fa-solid fa-forward': sidebarOpen,
              'fa-solid fa-backward': !sidebarOpen,
            }"></i>
    </div>
    <ul v-if="sidebarOpen" class="nav nav-pills flex-column mb-auto mt-3">
      <li class="nav-item">
        <a
          href="#"
          class="nav-link d-flex align-items-center justify-content-between"
          :class="{ active: activeLink === 0 }"
          @click="activeLink = 0"
          aria-current="page"
        >
          لوحة القيادة
          <i class="fa-solid fa-table-cells-large text-white"></i>
        </a>
      </li>
      <li class="mt-4">
        <div
          class="link d-flex align-items-center justify-content-between"
          @click="toggleDropdown(0)"
          data-bs-toggle="collapse"
          href="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          <a class="nav-link">
            <i
              :class="{
                'fa-solid fa-users': true,
                'text-primary-color': dropdowns[0].clicked,
                'text-original-color': !dropdowns[0].clicked,
              }"
            ></i>
            الموظفين
          </a>
          <i
            :class="{
              'fa-solid fa-angle-up': dropdowns[0].isOpen,
              'fa-solid fa-angle-down': !dropdowns[0].isOpen,
            }"
          ></i>
        </div>
        <ul class="collapse nav nav-pills submenu" id="collapseExample">
          <li><a href="#" class="nav-link ms-5">إدارة الموظفين</a></li>
          <li><a href="#" class="nav-link ms-3">دلبل الموظفين</a></li>
          <li><a href="#" class="nav-link">المخطط الهيكلي</a></li>
        </ul>
      </li>
      <li>
        <div
          class="link d-flex align-items-center justify-content-between"
          data-bs-toggle="collapse"
          href="#collapseExample2"
          aria-expanded="false"
          aria-controls="collapseExample2"
          @click="toggleDropdown(1)"
        >
          <a class="nav-link">
            <i
              :class="{
                'fa-solid fa-rectangle-list': true,
                'text-primary-color': dropdowns[1].clicked,
                'text-original-color': !dropdowns[1].clicked,
              }"
            ></i>
            قائمة تدقيق
          </a>
          <i
            :class="{
              'fa-solid fa-angle-up': dropdowns[1].isOpen,
              'fa-solid fa-angle-down': !dropdowns[1].isOpen,
            }"
          ></i>
        </div>
        <ul class="collapse nav nav-pills submenu" id="collapseExample2">
          <li><a href="#" class="nav-link ms-5">قائمة المهام</a></li>
          <li><a href="#" class="nav-link">المهام غير مكتملة</a></li>
          <li><a href="#" class="nav-link">المهام المكتملة</a></li>
        </ul>
      </li>
      <li>
        <div
          class="link d-flex align-items-center justify-content-between"
          data-bs-toggle="collapse"
          href="#collapseExample3"
          aria-expanded="false"
          aria-controls="collapseExample3"
          @click="toggleDropdown(2)"
        >
          <a class="nav-link">
            <i
              :class="{
                'fa-solid fa-clock': true,
                'text-primary-color': dropdowns[2].clicked,
                'text-original-color': !dropdowns[2].clicked,
              }"
            ></i>
            وقت الإنتهاء
          </a>
          <i
            :class="{
              'fa-solid fa-angle-up': dropdowns[2].isOpen,
              'fa-solid fa-angle-down': !dropdowns[2].isOpen,
            }"
          ></i>
        </div>
        <ul class="collapse nav nav-pills submenu" id="collapseExample3">
          <li><a href="#" class="nav-link ms-5">وقت اجازتي</a></li>
          <li><a href="#" class="nav-link">وقت اجازة الفريق</a></li>
          <li><a href="#" class="nav-link ms-4">وقت اجازة الموظفين</a></li>
          <li><a href="#" class="nav-link">الاعدادات</a></li>
        </ul>
      </li>
      <li>
        <div
          class="link d-flex align-items-center justify-content-between"
          data-bs-toggle="collapse"
          href="#collapseExample4"
          aria-expanded="false"
          aria-controls="collapseExample4"
          @click="toggleDropdown(3)"
        >
          <a class="nav-link">
            <i
              :class="{
                'fa-solid fa-calendar-days': true,
                'text-primary-color': dropdowns[3].clicked,
                'text-original-color': !dropdowns[3].clicked,
              }"
            ></i>
            الحضور
          </a>
          <i
            :class="{
              'fa-solid fa-angle-up': dropdowns[3].isOpen,
              'fa-solid fa-angle-down': !dropdowns[3].isOpen,
            }"
          ></i>
        </div>
        <ul class="collapse nav nav-pills submenu" id="collapseExample4">
          <li><a href="#" class="nav-link ms-5">وقت حضوري</a></li>
          <li><a href="#" class="nav-link">وقت حضور الفريق</a></li>
          <li><a href="#" class="nav-link ms-4">وقت حضور الموظفين</a></li>
          <li><a href="#" class="nav-link">الاعدادات</a></li>
        </ul>
      </li>
      <li>
        <div
          class="link d-flex align-items-center justify-content-between"
          @click="toggleDropdown(4)"
          data-bs-toggle="collapse"
          href="#collapseExample5"
          aria-expanded="false"
          aria-controls="collapseExample5"
        >
          <a class="nav-link">
            <i
              :class="{
                'fa-regular fa-calendar-days': true,
                'text-primary-color': dropdowns[4].clicked,
                'text-original-color': !dropdowns[4].clicked,
              }"
            ></i>
            كشف الرواتب
          </a>
          <i
            :class="{
              'fa-solid fa-angle-up me-3 pe-4': dropdowns[4].isOpen,
              'fa-solid fa-angle-down me-3 pe-4': !dropdowns[4].isOpen,
            }"
          ></i>
        </div>
        <ul class="collapse nav nav-pills submenu" id="collapseExample5">
          <li><a href="#" class="nav-link ms-5">رواتب الموظفين</a></li>
          <li><a href="#" class="nav-link">الاعدادات</a></li>
        </ul>
      </li>
      <li>
        <div
          class="link d-flex align-items-center justify-content-between"
          @click="toggleDropdown(5)"
          data-bs-toggle="collapse"
          href="#collapseExample6"
          aria-expanded="false"
          aria-controls="collapseExample6"
        >
          <a class="nav-link">
            <i
              :class="{
                'fa-solid fa-chart-line': true,
                'text-primary-color': dropdowns[5].clicked,
                'text-original-color': !dropdowns[5].clicked,
              }"
            ></i>
            الأداء
          </a>
          <i
            :class="{
              'fa-solid fa-angle-up': dropdowns[5].isOpen,
              'fa-solid fa-angle-down': !dropdowns[5].isOpen,
            }"
          ></i>
        </div>
        <ul class="collapse nav nav-pills submenu" id="collapseExample6">
          <li><a href="#" class="nav-link ms-5">أدائي</a></li>
          <li><a href="#" class="nav-link ps-5 ms-5">أداء الفريق</a></li>
          <li><a href="#" class="nav-link">أداء الموظفين</a></li>
        </ul>
      </li>
      <li>
        <div
          class="link d-flex align-items-center justify-content-between"
          data-bs-toggle="collapse"
          href="#collapseExample7"
          aria-expanded="false"
          aria-controls="collapseExample7"
          :class="{ clicked: dropdowns[6].clicked }"
          @click="toggleDropdown(6)"
        >
          <a class="nav-link">
            <i
              :class="{
                'fa-solid fa-briefcase': true,
                'text-primary-color': dropdowns[6].clicked,
                'text-original-color': !dropdowns[6].clicked,
              }"
            ></i>
            التوظيف
          </a>
          <i
            :class="{
              'fa-solid fa-angle-up me-5 pe-4': dropdowns[6].isOpen,
              'fa-solid fa-angle-down me-5 pe-4': !dropdowns[6].isOpen,
            }"
          ></i>
        </div>
        <ul class="collapse nav nav-pills submenu" id="collapseExample7">
          <li><a href="#" class="nav-link ms-5">الوظائف</a></li>
          <li><a href="#" class="nav-link ms-5">المرشحين</a></li>
          <li><a href="#" class="nav-link ms-5">الاعدادات</a></li>
        </ul>
      </li>
    </ul>
    <ul v-if="sidebarOpen" class="nav nav-pills flex-column">
      <li class="d-flex justify-content-between align-items-center">
        <a href="#" class="nav-link">
          <i class="fa-solid fa-question"></i>
          مركز المساعدة
        </a>
        <span class="badge bg-danger rounded-pill">8</span>
      </li>
      <li>
        <a href="#" class="nav-link">
          <i class="fa-solid fa-gear"></i>
          إعدادات
        </a>
      </li>
      <li>
        <ThemeButton class="mt-2" />
      </li>
    </ul>
  </div>
</template>

<script>
import ThemeButton from "./ThemeButton.vue";
export default {
  components: {
    ThemeButton,
  },
  data() {
    return {
      activeLink: 0,
      dropdowns: [
        { isOpen: false, clicked: false },
        { isOpen: false },
        { isOpen: false },
        { isOpen: false },
        { isOpen: false },
        { isOpen: false },
        { isOpen: false },
      ],
      sidebarOpen: true,
    };
  },
  methods: {
    toggleDropdown(index) {
      this.dropdowns[index].isOpen = !this.dropdowns[index].isOpen;
      this.dropdowns[index].clicked = !this.dropdowns[index].clicked;
    },
    toggleSidebar() {
    console.log(this.sidebarOpen);
    this.sidebarOpen = !this.sidebarOpen;
  },
  },
};
</script>

<style scoped>
.sidebar {
  height: 100vh;
  background-color: var(--background-color-primary);
  border-left: 1px solid var(--accent-color);
  width: 280px;
  transition: width 0.3s ease;
}
.sidebar-closed {
  width: 3%;
}
.brand .logo i {
  font-size: 18px;
  color: #27a376;
}
.logo span {
  color: var(--text-primary-color);
}
.brand i {
  color: var(--text-primary-color);
  font-size: 14px;
}
.nav-link {
  color: var(--text-primary-color);
  padding: 0.5rem 0.5rem;
}
.nav-link.active {
  background-color: #27a376 !important;
  color: #fff;
  padding: 1rem 0.5rem;
}
.nav-link i {
  margin-left: 5px;
  color: #a0aec0;
}
.nav-link .text-primary-color {
  color: #27a376;
}
.fa-angle-up,
.fa-angle-down {
  color: #a0aec0;
}
.submenu a:hover{
  background-color: #27a376;
}

</style>