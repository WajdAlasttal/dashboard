<template>
  <div class="steps-input">
    <h5 class="mb-4">اكتب اسم شركتك</h5>
    <form action="">
      <label class="form-label" for="companyName">اسم الشركة</label><span>*</span>
      <input class="form-control" type="text" placeholder="ادخل اسم الشركة" />
      <label class="form-label" for="domainName">مجال الشركة</label>
      <input class="form-control" type="text" placeholder="ادخل مجال الشركة" />
      <p>
        <i class="fa-solid fa-triangle-exclamation ms-1"></i>سننشئ رابط فريد للشركة
        لتتمكن من تسجيل الدخول إلى هيومانلاين
      </p>
      <div class="radio-content">
        <h5>ما هو حجم شركتك</h5>
        <div class="form-check form-check-inline border border-2 rounded my-3">
            <label class="form-check-label ms-4" for="inlineRadio1">1-10</label>
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
          />
        </div>
        <div class="form-check form-check-inline border border-2 rounded my-3">
            <label class="form-check-label ms-4" for="inlineRadio2">11-50</label>
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
          />
        </div>
        <div class="form-check form-check-inline border border-2 rounded my-3">
        <label class="form-check-label ms-4" for="inlineRadio3">51-100</label>
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio3"
            value="option3"
          />
        </div>
        <div class="form-check form-check-inline border border-2  rounded">
        <label class="form-check-label ms-4" for="inlineRadio4">101-200</label>
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio4"
            value="option4"
          />
        </div>
        <div class="form-check form-check-inline border border-2 rounded">
        <label class="form-check-label ms-4" for="inlineRadio5">201-500</label>
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio5"
            value="option5"
          />
        </div>
        <div class="form-check form-check-inline border border-2 rounded">
        <label class="form-check-label ms-4" for="inlineRadio6">500+</label>
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio6"
            value="option6"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "StepsCard",
};
</script>

<style scoped>
.steps-input{
    background-color: #fff;
    border-radius: 10px;
    padding: 1rem;

}
.rounded{
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
.form-control::placeholder{
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
.steps-input p{
    font-size: 12px;
    color: #687588;
    margin: 1rem 0;
}
.radio-content{
    margin-bottom: 6rem;
}
.form-check{
    padding: 16px 35px 16px 30px;
    font-size: 14px;
    font-weight: 500;
    gap: 10px;
}
input[type="radio"]:checked {
    background-color: #27a376;
    border-color: #27a376;
}


</style>