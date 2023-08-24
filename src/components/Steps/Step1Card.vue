<template>
  <div class="steps-input">
    <h5 class="mb-4">اكتب اسم شركتك</h5>
    <form action="">
      <label class="form-label" for="companyName">اسم الشركة</label
      ><span>*</span>
      <input class="form-control" type="text" placeholder="ادخل اسم الشركة"  v-model.trim="state.name" />
      <label class="form-label" for="domainName">دومين الشركة</label>
      <div class="d-flex align-items-baseline flex-row-reverse">
        <input
          class="form-control"
          type="text"
          placeholder="ادخل دومين الشركة"
        />
        <ButtonSlider disabled class="btn" text=".hrline.com" />
      </div>
      <p>
        <i class="fa-solid fa-triangle-exclamation ms-1"></i>سننشئ رابط فريد
        للشركة لتتمكن من تسجيل الدخول إلى هيومانلاين
      </p>
      <div class="radio-content">
        <h5>ما هو حجم شركتك</h5>
        <section class="radio-section">
          <div class="radio-list">
            <div class="radio-item">
              <input name="radio" id="radio1" type="radio" /><label for="radio1"
                >1-10</label
              >
            </div>
            <div class="radio-item">
              <input name="radio" id="radio2" type="radio" /><label for="radio2"
                >11-50</label
              >
            </div>
            <div class="radio-item">
              <input name="radio" id="radio3" type="radio" /><label for="radio3"
                >51-100</label
              >
            </div>
            <div class="radio-item">
              <input name="radio" id="radio4" type="radio" /><label for="radio4"
                >101-200</label
              >
            </div>
            <div class="radio-item">
              <input name="radio" id="radio5" type="radio" /><label for="radio5"
                >201-500</label
              >
            </div>
            <div class="radio-item">
              <input name="radio" id="radio6" type="radio" /><label for="radio6"
                >500+</label
              >
            </div>
          </div>
        </section>
      </div>
    </form>
  </div>
</template>

<script>
import ButtonSlider from "../ButtonSlider.vue";
import useValidate from "@vuelidate/core";
import { required,helpers} from "@vuelidate/validators";
import { reactive, computed } from "vue";
export default {
  name: "StepsCard",
  components: {
    ButtonSlider,
  },
  setup() {
    const state = reactive({
      name:""
    });
    const rules = computed(() => {
      return {
        name: {
          required: helpers.withMessage("يجب ادخال قيمة", required),
        },
      };
    });

    const v$ = useValidate(rules, state);
    return {
      state,
      v$,
    };
  },
};
</script>

<style scoped>
.steps-input {
  border-radius: 10px;
  padding: 1rem 1rem 6.6rem 1rem;
  max-height: 100%;
  height: 100%;
  background-color: var(--background-color-primary);
}
span {
  color: red;
  font-size: 13px;
}
.form-control {
  width: 100%;
  border: 1px solid #e9eaec;
  padding: 18px 20px 18px 20px;
  border-radius: 10px;
  margin-bottom: 1rem;
  box-shadow: none;
  color: var(--text-primary-color);
  background-color: var(--background-color-primary);
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
  margin: 0.5rem 0;
}
.radio-content {
  margin-bottom: 8rem;
}
.btn {
  width: 20%;
  background-color: #f1f2f4;
  color: #687588;
  padding: 0.9rem;
  margin-left: 1rem;
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
@media (max-width: 768px) {
  .steps-input {
  background-color: transparent;
}
.radio-content {
  margin-bottom: 0;
}
.radio-list {
  flex-wrap: nowrap;
  flex-direction: column;
}
.radio-item {
  width: 100%;
}
.btn {
  width: 30%;
}
}
@media (min-width:800px) and (max-width: 1280px){
  .radio-content {
  margin-bottom: 11.5rem;
}
}
</style>