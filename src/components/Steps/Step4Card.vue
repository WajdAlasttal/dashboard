<template>
    <div class="steps-input">
      <form action="">
        <div class="domain-input pb-3 border-bottom mt-1 mb-5">
          <p class="form-label mb-2">اسم دومين الشركة</p>
          <p class="domain-name">unpixel.hrline.com</p>
        </div>
        <div class="radio-content">
          <h5>اختر وفقاً لاحتياجاتك.</h5>
          <div class="form-check form-check-inline border border-2 rounded my-3 mx-0">
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
          <div class="form-check form-check-inline border border-2 rounded my-3 mx-0">
            <label class="form-check-label" for="inlineRadio2">
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
          <div class="form-check form-check-inline border border-2 rounded my-3 mx-0">
            <label class="form-check-label" for="inlineRadio3">
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
          <div class="form-check form-check-inline border border-2 rounded my-3 mx-0">
            <label class="form-check-label" for="inlineRadio4">
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
          <div class="form-check form-check-inline border border-2 rounded my-3 mx-0">
            <label class="form-check-label" for="inlineRadio5"
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
  .form-label {
    font-size: 14px;
    margin-bottom: 0.3rem;
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
    width: 100%;
    padding: 16px 35px 16px 30px;
    font-size: 14px;
    font-weight: 500;
  }
  input[type="radio"]:checked {
    background-color: #27a376;
    border-color: #27a376;
  }
  </style>