<template>
  <div class="steps-input">
    <form action="">
      <div class="domain-input pb-3 border-bottom mt-1 mb-5">
        <p class="form-label mb-2">اسم دومين الشركة</p>
        <p class="domain-name">unpixel.hrline.com</p>
      </div>
      <div class="radio-content">
        <h5>ما هو منصبك؟</h5>
        <div class="form-check form-check-inline border border-2 rounded my-3">
          <label class="form-check-label ms-4" for="inlineRadio1"
            >المدير التنفيذي / المالك / المؤسس</label
          >
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
          />
        </div>
        <div class="form-check form-check-inline border border-2 rounded my-3">
          <label class="form-check-label ms-4" for="inlineRadio2">
            مدير الموارد البشرية</label
          >
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
          />
        </div>
        <div class="form-check form-check-inline border border-2 rounded my-3">
          <label class="form-check-label ms-4" for="inlineRadio3">
            موظف موارد بشرية</label
          >
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio3"
            value="option3"
          />
        </div>
        <div class="form-check form-check-inline border border-2 rounded">
          <label class="form-check-label ms-4" for="inlineRadio4">
            مدير تقنية المعلومات / التكنولوجيا</label
          >
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio4"
            value="option4"
          />
        </div>
        <div class="form-check form-check-inline border border-2 rounded">
          <label class="form-check-label ms-4" for="inlineRadio5"
            >موظف تكنولوجيا المعلومات / التقنية</label
          >
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio5"
            value="option5"
          />
        </div>
        <div class="form-check form-check-inline border border-2 rounded">
          <label class="form-check-label ms-4" for="inlineRadio5"
            >شيء آخر</label
          >
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio5"
            value="option5"
          />
        </div>
        <div class="mt-4">
          <label class="form-label" for="companyName">ما هو منصبك</label
          ><span>*</span>
          <input
            class="form-control"
            type="text"
            placeholder="ادخل منصبك"
          />
        </div>
      </div>
    </form>
  </div>
</template>
    
    <script>
export default {};
</script>
    
<style scoped>
.domain-input .domain-name{
    font-size: 20px;
    color: #000;
    font-weight: 500;
}
.steps-input {
  background-color: #fff;
  border-radius: 10px;
  padding: 1rem;
  height: 100vh;
}
.rounded {
  border-radius: 10px !important;
}
span {
  color: red;
  font-size: 13px;
}
.form-control {
  width: 100%;
  border: 1px solid #e9eaec;
  padding: 16px 20px 16px 20px;
  border-radius: 10px;
  margin-bottom: 1.5rem;
}
.form-control::placeholder {
  font-size: 14px;
}
.form-label {
  font-size: 14px;
  margin-bottom: 0.3rem;
}
.form-control:focus {
  outline: none !important;
  border: 2px solid #27a376 !important;
}
.steps-input p {
  font-size: 12px;
  color: #687588;
  margin: 1rem 0;
}
.radio-content {
  margin-bottom: 6rem;
}
.form-check {
  padding: 16px 35px 16px 30px;
  font-size: 14px;
  font-weight: 500;
  gap: 10px;
}
input[type="radio"]:checked {
  background-color: #27a376;
  border-color: #27a376;
}
.btn {
  width: 20%;
  background-color: #cbd5e0;
  color: #687588;
  padding: 0.9rem;
  margin-right: 1rem;
}
</style>