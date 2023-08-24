<template>
  <div
    class="sidebar d-flex flex-column flex-shrink-0 p-3"
    style="width: 280px">
   <div class="brand d-flex align-items-center justify-content-between">
    <a
      href="/home"
      class="logo d-flex align-items-center mb-3 mb-md-0 text-decoration-none">
        <i class="fa-solid fa-asterisk ms-2"></i>
        <span class="fs-4">هيومانلاين</span>
    </a>
    <i class="fa-solid fa-forward"></i>
   </div>
    <ul class="nav nav-pills flex-column mb-auto mt-3">
      <li class="nav-item">
        <a href="#" class="nav-link active" aria-current="page">
          لوحة القيادة
        </a>
      </li>
      <li>
        <a href="#" class="nav-link">
          <i class="fa-solid fa-users"></i>
          الموظفين
        </a>
      </li>
      <li>
        <a href="#" class="nav-link">
          <i class="fa-solid fa-rectangle-list"></i>
          قائمة تدقيق
        </a>
      </li>
      <li>
        <a href="#" class="nav-link">
          <i class="fa-solid fa-clock"></i>
          وقت الإنتهاء
        </a>
      </li>
      <li>
        <a href="#" class="nav-link">
          <i class="fa-solid fa-calendar-days"></i>
          الحضور
        </a>
      </li>
      <li>
        <a href="#" class="nav-link">
          <i class="fa-regular fa-calendar-days"></i>
          كشف الرواتب
        </a>
      </li>
      <li>
        <a href="#" class="nav-link">
          <i class="fa-solid fa-chart-line"></i>
          الأداء
        </a>
      </li>
      <li>
        <a href="#" class="nav-link">
          <i class="fa-solid fa-briefcase"></i>
          التوظيف
        </a>
      </li>
    </ul>
    <ul class="nav nav-pills flex-column">
      <li>
        <a href="#" class="nav-link">
          <i class="fa-solid fa-question"></i>
          مركز المساعدة
        </a>
      </li>
      <li>
        <a href="#" class="nav-link">
          <i class="fa-solid fa-gear"></i>
          إعدادات
        </a>
      </li>
      <li>
        <ThemeButton/>
      </li>
    </ul>
  </div>
</template>

<script>
import ThemeButton from './ThemeButton.vue';
export default {
    components:{
        ThemeButton,
    }
};
</script>

<style scoped>
.sidebar {
  height: 100vh;
  background-color: var(--accent-color);
}
.logo i{
  color: #27a376;
}
.logo span {
  color: var(--text-primary-color);
}
.brand i{
    color:var(--text-primary-color);
    font-size: 14px;
}
.active {
  background-color: #27a376 !important;
}
.nav-link {
  color: var(--text-primary-color);
}
.nav-link i {
  margin-left: 5px;
  color: #a0aec0;
}
</style>