<template>
  <div class="steps-input">
    <form action="">
      <div class="domain-input pb-3 border-bottom mt-1 mb-5">
        <label class="form-label mb-2" for="companyName">اسم دومين الشركة</label
        ><span>*</span>
        <input class="form-controll" type="text" placeholder="ادخل دومين الشركة" />
      </div>

      <div class="radio-content">
        <h5>ما هو مجالك؟</h5>
        <section class="radio-section">
          <div class="radio-list">
            <div class="radio-item">
              <input name="radio" id="radio7" type="radio" /><label for="radio7"
                >الكريبتو</label
              >
            </div>
            <div class="radio-item">
              <input name="radio" id="radio8" type="radio" /><label for="radio8"
                >التجارة الإلكترونية</label
              >
            </div>
            <div class="radio-item">
              <input name="radio" id="radio9" type="radio" /><label for="radio9"
                >التكنولوجيا المالية</label
              >
            </div>
            <div class="radio-item">
              <input name="radio" id="radio10" type="radio" /><label for="radio10"
                >التكنولوجيا الصحية</label
              >
            </div>
            <div class="radio-item">
              <input name="radio" id="radio11" type="radio" /><label for="radio11"
                >تفويض البرمجيات</label
              >
            </div>
          </div>
        </section>
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
  padding: 1rem 1rem 16rem 1rem;
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
  background-color: #E9EAEC;
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
  margin-bottom: 6rem;
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