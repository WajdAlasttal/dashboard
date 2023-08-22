<template>
  <div class="steps-input">
    <form action="">
      <div class="domain-input pb-2 border-bottom mb-2">
        <p class="form-label mb-2 mt-0">اسم دومين الشركة</p>
        <p class="domain-name">unpixel.hrline.com</p>
      </div>
      <div class="radio-content">
        <h5 class="my-3">اختر وفقاً لاحتياجاتك.</h5>
        <section class="radio-section">
          <div class="radio-list">
            <div class="radio-item">
              <input name="radio" id="radio18" type="radio" />
              <label for="radio18" class="label-content"
                >التعامل مع الموظفين الجدد
                <p>أرغب في ضم الكثير من الموظفين الجدد بطريقة متسقة ومنهجية.</p>
              </label>
            </div>
            <div class="radio-item">
              <input name="radio" id="radio19" type="radio" /><label class="label-content"
                for="radio19">تتبع الوقت عبر الإنترنت
                <p>
                  أرغب في تتبع وقت الحضور والانصراف والموافقة عليه عبر الإنترنت
                  ، من أي مكان.
                </p>
              </label>
            </div>
            <div class="radio-item">
              <input name="radio" id="radio20" type="radio" /><label
                for="radio20" class="label-content"
                >ادارة الأداء
                <p>
                  أرغب في إدارة أداء الموظفين والحفاظ عليه بطريقة مستمرة
                  وموضوعية.
                </p>
              </label>
            </div>
            <div class="radio-item">
              <input name="radio" id="radio21" type="radio" /><label
                for="radio21" class="label-content"
                >تفاعل الموظف
                <p>أريد أن أبقي موظفيي سعداء ومشاركين ونشطين ومتحمسين.</p>
              </label>
            </div>
            <div class="radio-item">
              <input name="radio" id="radio22" type="radio" /><label for="radio22" class="label-content">توظيف
                <p>
                  أرغب في توظيف أفضل المواهب لتحسين أداء الأعمال وترتيب صاحب
                  العمل.
                </p>
              </label>
            </div>
          </div>
        </section>
      </div>
    </form>
  </div>
</template>
      
      <script>
export default {};
</script>
      
  <style scoped>
  .label-content{
    display: flex;
    flex-direction: column;
  }
.domain-input .domain-name {
  font-size: 20px;
  color: #000;
  font-weight: 500;
}
.steps-input {
  background-color: #fff;
  border-radius: 10px;
  padding: 1rem 1rem 1.7rem 1rem;
  max-height: 100%;
  height: 100%;
  width: 100%;
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
}
.radio-content {
  margin-bottom: 7.5rem;
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
  max-width: 100%;
  width: 100%;
}
.radio-item label {
  display: flex;
  padding: 6px 20px 6px 20px;
  font-size: 14px;
  font-weight: 500;
  border: 2px solid #e9eaec;
  border-radius: 8px;
  position: relative;
  cursor: pointer;
}
.radio-item label:after,
.radio-item label:before {
  content: "";
  position: absolute;
  border-radius: 50%;
}
.radio-item label:after {
  height: 20px;
  width: 20px;
  border: 1px solid #e9eaec;
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
@media (min-width:800px) and (max-width: 1280px){
  .radio-content {
  margin-bottom: 11.5rem;
}
}
</style>