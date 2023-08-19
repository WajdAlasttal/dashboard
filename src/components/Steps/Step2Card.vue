<template>
  <div class="steps-input">
    <form action="">
      <div class="domain-input pb-3 border-bottom mt-1 mb-5">
        <label class="form-label mb-2" for="companyName">اسم دومين الشركة</label
        ><span>*</span>
        <input class="form-control" type="text" placeholder="ادخل دومين الشركة" />
      </div>

      <div class="radio-content">
        <h5>ما هو مجالك؟</h5>
        <div class="form-check form-check-inline border border-2 rounded my-3">
          <label class="form-check-label ms-4" for="inlineRadio1"
            >الكريبتو</label
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
            التجارة الإلكترونية</label
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
            التكنولوجيا المالية</label
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
          <label class="form-check-label ms-4" for="inlineRadio4"
            >التكنولوجيا الصحية</label
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
            >تفويض البرمجيات</label
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
export default {
};
</script>
  
  <style scoped>
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
  background-color: #E9EAEC;
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