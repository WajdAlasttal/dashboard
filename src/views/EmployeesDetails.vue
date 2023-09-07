<template>
  <div class="details">
    <template v-if="employeeDetails">
      <div class="row w-100">
        <div class="col-4 profile">
          <div class="profile-data">
            <div class="image text-center">
              <img
                :src="employeeDetails.imgUrl"
                alt="profile picture"
                class="rounded-circle p-1"
                height="85"
                width="100"
              />
              <h4>{{ employeeDetails.name }}</h4>
              <p>{{ employeeDetails.jobTitle }}</p>
              <button class="btn active-button">
                {{ employeeDetails.status }}
              </button>
            </div>
            <hr />
            <div class="data">
              <p>
                <i class="fa-solid fa-envelope ms-1"></i
                >{{ employeeDetails.email }}
              </p>
              <p>
                <i class="fa-solid fa-phone ms-1"></i
                >{{ employeeDetails.phone }}
              </p>
              <p><i class="fa-solid fa-globe ms-1"></i> GMT +07:00</p>
            </div>
            <hr />
            <div class="data-2">
              <div
                class="job-data d-flex align-items-center justify-content-between"
              >
                <div class="header-data">
                  <span>القطاع</span>
                  <p>{{ employeeDetails.department }}</p>
                </div>
                <i class="fa-solid fa-chevron-left"></i>
              </div>
              <div
                class="job-data d-flex align-items-center justify-content-between"
              >
                <div class="header-data">
                  <span>المكتب</span>
                  <p>{{ employeeDetails.office }}</p>
                </div>
                <i class="fa-solid fa-chevron-left"></i>
              </div>
              <div
                class="job-data d-flex align-items-center justify-content-between"
              >
                <div class="header-data">
                  <span>المدير</span>
                  <p>{{ employeeDetails.lineManager }}</p>
                </div>
                <i class="fa-solid fa-chevron-left"></i>
              </div>
            </div>
            <ButtonSlider class="mt-2 btn2" text="إجراء" />
          </div>
        </div>
        <div class="col-7">
          <div class="tabs">
            <TabsWrapper>
              <SingleTab title="العام">
                <div class="personal-info">
                  <h4 class="m-3">معلومات شخصية</h4>
                  <hr />
                  <div class="info d-flex justify-content-around">
                    <div class="first-part">
                      <p>
                        <span>الاسم الكامل : </span>{{ employeeDetails.name }}
                        {{ employeeDetails.lastName }}
                      </p>
                      <p>
                        <span>تاريخ الميلاد : </span>{{ employeeDetails.DOB }}
                      </p>
                      <p>
                        <span>الجنسية : </span>{{ employeeDetails.Nationality }}
                      </p>
                      <p>
                        <span>البريد الالكتروني : </span
                        >{{ employeeDetails.email }}
                      </p>
                      <p><span>التأمين الصحي : </span>-</p>
                    </div>
                    <div class="second-part">
                      <p><span>الجنس : </span>{{ employeeDetails.gender }}</p>
                      <p><span>الحالة الاجتماعية : </span>-</p>
                      <p><span>معرف الضريبة الشخصية : </span>-</p>
                      <p><span>التأمينات الاجتماعية : </span>-</p>
                      <p>
                        <span>رقم الهاتف : </span>{{ employeeDetails.phone }}
                      </p>
                    </div>
                  </div>
                </div>
                <div class="personal-info mt-4">
                  <h4 class="m-3">العنوان</h4>
                  <hr />
                  <div class="first-part me-5">
                    <p><span>العنوان: </span>{{ employeeDetails.address }}</p>
                    <p><span>البلد : </span>{{ employeeDetails.country }}</p>
                    <p><span>المدينة : </span>{{ employeeDetails.city }}</p>
                    <p>
                      <span>كود البريد : </span>{{ employeeDetails.postCode }}
                    </p>
                  </div>
                </div>
                <div class="personal-info mt-4">
                  <h4 class="m-3">الاتصال بالطوارىء</h4>
                  <hr />
                  <div class="first-part me-5">
                    <p><span>الاسم كامل: </span>ألبرت جونسون</p>
                    <p><span>رقم الهاتف : </span>+1234567890</p>
                  </div>
                </div>
              </SingleTab>
              <SingleTab title="الوظيفة">
                <div class="personal-info">
                  <h4 class="m-3">معلومات التوظيف</h4>
                  <hr />
                  <div class="first-part me-5">
                    <p><span>هوية الموظف : </span>{{ employeeDetails.id }}</p>
                    <p><span>سنة الخدمة : </span>3 سنوات و 7 أشهر</p>
                    <p><span>تاريخ الانضمام : </span>20 أغسطس 2019</p>
                  </div>
                </div>
                <div class="personal-info mt-4">
                  <h4 class="m-3">الجدول الزمني للوظيفة</h4>
                  <hr />
                  <div class="first-part m-1">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">تاريخ النفاذ</th>
                          <th scope="col">مسمى وظيفي</th>
                          <th scope="col">نوع الوظيفة</th>
                          <th scope="col">نوع الوظيفة</th>
                          <th scope="col">مدير</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>20 أغسطس 2019</td>
                          <td>{{ employeeDetails.jobTitle }}</td>
                          <td>-</td>
                          <td>وقت كامل</td>
                          <td>{{ employeeDetails.lineManager }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="personal-info mt-4">
                  <h4 class="m-3">الجدول الزمني للعقد</h4>
                  <hr />
                  <div class="first-part m-1">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">رقم التعاقد</th>
                          <th scope="col">اسم العقد</th>
                          <th scope="col">نوع العقد</th>
                          <th scope="col">تاريخ البدء</th>
                          <th scope="col">تاريخ الانتهاء</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#12345</td>
                          <td>دوام كامل عن بعد</td>
                          <td>دوام كامل عن بعد</td>
                          <td>20 أغسطس 2019</td>
                          <td>-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </SingleTab>
              <SingleTab title="الراتب"> </SingleTab>
              <SingleTab title="مستندات">docs</SingleTab>
              <SingleTab title="الاعدادات">
                <div class="personal-info mt-4">
                  <h4 class="m-3">إعدادت الحساب</h4>
                  <hr />
                  <div class="time-zone mx-3">
                    <p><span class="ms-5">وحدة زمنية</span>GMT +07:00</p>
                  </div>
                </div>
                <div class="personal-info pb-2 mt-4">
                  <h4 class="m-3">الخصوصية</h4>
                  <hr />
                  <div class="time-zone d-flex justify-content-between mx-3 align-items-center">
                    <span>من يمكنه رؤية تاريخ ميلادك في التقويم؟</span>
                    <div class="dropdown">
                      <button
                        class="btn drop-button dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        الجميع
                      </button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <a class="dropdown-item" href="#">الجميع</a>
                        <a class="dropdown-item" href="#">انا فقط</a>
                        <a class="dropdown-item" href="#"
                          >لا احد</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </SingleTab>
            </TabsWrapper>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <p>Employee not found.</p>
    </template>
  </div>
</template>

<script>
import employeeData from "../assets/employees.json";
import ButtonSlider from "../components/ButtonSlider.vue";
import TabsWrapper from "../components/TabsWrapper.vue";
import SingleTab from "../components/SingleTab.vue";
export default {
  components: {
    ButtonSlider,
    TabsWrapper,
    SingleTab,
  },
  data() {
    return {
      employeeDetails: null,
    };
  },
  watch: {
    $route(to) {
      this.loadEmployeeDetails(to.params.id);
    },
  },
  created() {
    this.loadEmployeeDetails(this.$route.params.id);
  },
  methods: {
    loadEmployeeDetails(employeeId) {
      // Filter the employeeData array based on the chosen employee's ID
      const employee = employeeData.find((e) => e.id === parseInt(employeeId));
      if (employee) {
        this.employeeDetails = employee;
      } else {
        // Handle not found case
        this.employeeDetails = null;
      }
    },
  },
};
</script>

<style scoped>
h4,
p {
  color: var(--text-primary-color);
}
.profile {
  padding: 1rem;
  margin: 2rem;
  background: var(--background-color-primary);
  border-radius: 10px;
  height: 50%;
}
i,
span {
  font-size: 14px;
  color: #a0aec0;
}
hr {
  border: 1px solid #f1f2f4;
}
.btn2 {
  margin: 0 2rem;
  width: 80%;
}
.active-button {
  background: #e7f7ef;
  color: #0caf60;
}
.tabs {
  margin: 2rem 1rem;
  background: var(--background-color-primary);
  border-radius: 10px;
  padding-bottom: 0.5rem;
}
.personal-info {
  border: 2px solid #f1f2f4;
  border-radius: 10px;
}
.drop-button{
  color: var(--text-primary-color);
  border: 2px solid #f1f2f4;
  padding: 0.5rem 2rem;
  border-radius: 10px;
}
.dropdown-menu{
  text-align: right;
}
</style>