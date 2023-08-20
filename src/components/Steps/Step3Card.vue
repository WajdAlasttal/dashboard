<template>
  <div class="steps-input">
    <form action="">
      <div class="domain-input pb-3 border-bottom mt-1 mb-5">
        <p class="form-label mb-2">اسم دومين الشركة</p>
        <p class="domain-name">unpixel.hrline.com</p>
      </div>
      <div class="radio-content">
        <h5>ما هو منصبك؟</h5>

        <section class="radio-section">
          <div class="radio-list">
            <div class="radio-item">
              <input name="radio" id="radio12" type="radio" /><label for="radio12"
                >المدير التنفيذي / المالك / المؤسس</label
              >
            </div>
            <div class="radio-item">
              <input name="radio" id="radio13" type="radio" /><label for="radio13"
                >مدير الموارد البشرية</label
              >
            </div>
            <div class="radio-item">
              <input name="radio" id="radio14" type="radio" /><label for="radio14"
                >موظف موارد بشرية</label
              >
            </div>
            <div class="radio-item">
              <input name="radio" id="radio15" type="radio" /><label for="radio15"
                >مدير تقنية المعلومات / التكنولوجيا</label
              >
            </div>
            <div class="radio-item">
              <input name="radio" id="radio16" type="radio" /><label for="radio16"
                >موظف تكنولوجيا المعلومات / التقنية</label
              >
            </div>
            <div class="radio-item">
              <input name="radio" id="radio17" type="radio" /><label for="radio17"
                >شيء آخر</label
              >
            </div>
          </div>
        </section>
        <div class="mt-4">
          <label class="form-label" for="companyName">ما هو منصبك</label
          ><span>*</span>
          <input
            class="form-controll"
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
  padding: 1rem 1rem 3.5rem 1rem;
  background-color: #fff;
  border-radius: 10px;
  max-height: 100%;
  height: 100%;
}
span {
  color: red;
  font-size: 13px;
}
.form-controll {
  width: 100%;
  border: 1px solid #e9eaec;
  padding: 16px 20px 16px 20px;
  border-radius: 10px;
  margin-bottom: 1.5rem;
}
.form-controll::placeholder {
  font-size: 14px;
}
.form-label {
  font-size: 14px;
  margin-bottom: 0.3rem;
}
.form-controll:focus {
  outline: none !important;
  border: 2px solid #27a376 !important;
}
.steps-input p {
  font-size: 12px;
  color: #687588;
  margin: 1rem 0;
}
.radio-content {
  margin-bottom: 7rem;
}
.radio-list {
	display: flex;
  align-items: baseline;
  flex-wrap: wrap;
}
.radio-item [type="radio"] {
	display: none;
}
.radio-item {
	margin-top: 15px;
  margin-left: 1rem;
}
.radio-item label {
  display: flex;
  justify-content: space-between;
  padding: 16px 40px 16px 40px;
  font-size: 14px;
  font-weight: 500;
	border: 2px solid #E9EAEC;
	border-radius: 8px;
	position: relative;
	cursor: pointer;
}
.radio-item label:after,
.radio-item label:before {
	content: "";
	position: absolute;
	border-radius: 50%;
  margin-right: 3rem;
}
.radio-item label:after {
	height: 20px;
	width: 20px;
	border: 1px solid #E9EAEC;
	left: 10px;
	top: calc(50% - 10px);
}
.radio-item label:before {
  border: 6px solid #27a376;
	height: 20px;
	width: 20px;
	left: 10px;
	top: calc(50% - 10px);
	transform: scale(5);
	opacity: 0;
	visibility: hidden;
}
.radio-item [type="radio"]:checked ~ label {
	border-color: #27a376;
}
.radio-item [type="radio"]:checked ~ label::before {
	opacity: 1;
	visibility: visible;
	transform: scale(1);
}
</style>