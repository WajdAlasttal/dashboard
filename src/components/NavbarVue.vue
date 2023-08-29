<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0 align-items-center flex-row-reverse">
          <li class="nav-item"><a href="#" class="nav-link">مستندات</a></li>
          <li class="nav-item"><a href="#" class="nav-link">الاخبار</a></li>
          <li class="nav-item"><a href="#" class="nav-link">قسيمة الدفع</a></li>
          <li class="nav-item"><a href="#" class="nav-link">التقرير</a></li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control shadow-none ps-4 pe-5 position-relative"
            type="search"
            placeholder="ابحث"
            aria-label="Search"
          />
          <button class="btn position-absolute shadow-none" type="submit"><i class="fa-solid fa-magnifying-glass text-success"></i></button>
        </form>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 align-items-center flex-row-reverse">
          <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-bs-expanded="false">
          <img src="../assets/images/1.png" width="40" height="40" class="rounded-circle">
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">تعديل الصفحة الشخصية</a>
          <a class="dropdown-item" href="#">تسجيل خروج</a>
        </div>
      </li>
          <li>
            <button type="button" class="btn position-relative shadow-none">
              <i class="fa-solid fa-envelope"></i>
              <span
                class="position-absolute top-15 start-75 translate-middle badge rounded-pill bg-danger mt-1 p-1"
              >
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>
          </li>
          <li>
            <button type="button" class="btn position-relative shadow-none">
              <i class="fa-solid fa-message"></i>
              <span
                class="position-absolute top-15 start-75 translate-middle badge rounded-pill bg-danger mt-1 p-1"
              >
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  background-color: var(--background-color-primary);
}
.top-15{
  top: 15% !important;
}
.start-75{
  left : 75% !important ;
}
.dropdown-menu {
  background-color: var(--background-color-primary);
}
.dropdown-menu a{
  color: var(--text-primary-color);
}
.dropdown-menu a:hover{
  background-color: #27a376 !important;
}
.btn,.dropdown-toggle{
  color: var(--text-primary-color) !important;
}
.nav-item .nav-link{
  color: var(--text-primary-color) !important;
  margin: 0 1rem;
}
.nav-item .nav-link:hover{
  color: #27a376 !important;
}
.form-control{
  border: 1px solid var(--accent-color);
  background-color: var(--accent-color);
  color: var(--text-primary-color) !important;
}
.form-control:focus{
  border: 2px solid #27a376;
  background-color: var(--background-color-primary);
}
</style>