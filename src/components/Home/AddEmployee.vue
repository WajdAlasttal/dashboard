<template>
  <aside class="sidebar d-flex flex-column flex-shrink-0 p-3" :class="{ 'sidebar-open': isOpen }">
    <i class="fa-solid fa-arrow-left" @click="closeSidebar"></i>
    <h3 class="mb-4">إضافة ملف تعريف جديد</h3>
    <form class="form" v-on:submit.prevent="submit">
      <div class="mb-3">
        <label for="exampleInputName" class="form-label">الاسم الاول</label>
        <span>*</span>
        <input
          type="text"
          class="form-control"
          v-model.trim="state.name"
          :class="{ 'invalid-input': v$.name.$error }"
          id="exampleInputName"
          placeholder="ادخل الاسم الاول"
        />
        <span v-if="v$.name.$error">{{ v$.name.$errors[0].$message }}</span>
      </div>
      <div class="mb-3">
        <label for="exampleInputLastName" class="form-label">الاسم الثاني</label>
        <span>*</span>
        <input
          type="text"
          class="form-control"
          v-model.trim="state.lastName"
          :class="{ 'invalid-input': v$.lastName.$error }"
          id="exampleInputLastName"
          placeholder="ادخل الاسم الاخير"
        />
        <span v-if="v$.lastName.$error">{{ v$.lastName.$errors[0].$message }}</span>
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail" class="form-label"
          >البريد الالكتروني</label
        >
        <span>*</span>
        <input
          type="text"
          class="form-control"
          v-model.trim="state.email"
          :class="{ 'invalid-input': v$.email.$error }"
          id="exampleInputEmail"
          aria-describedby="emailHelp"
          placeholder="ادخل البريد الالكتروني"
        />
        <span v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</span>
      </div>
      <label for="date" class="form-label">تاريخ الانضمام</label>
      <span>*</span>
      <DatePicker/>
    </form>
    <div class="buttons d-flex">
      <ButtonSlider class="btn2 me-1" text="الغاء" />
      <ButtonSlider class="me-2" text="أضف" @click="submitForm"
        :disabled="v$.$error" />
    </div>
  </aside>
</template>
  
  <script>
import DatePicker from '../DatePicker.vue';
import useValidate from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import ButtonSlider from "../ButtonSlider.vue";
import Swal from 'sweetalert2'

export default {
  setup() {
    const state = reactive({
      name:'',
      lastName:'',
      email: "",
      sidebarOpen: true,
    });
    const rules = computed(() => {
      return {
        name:{
          required:helpers.withMessage("يجب ادخال قيمة", required)
        },
        lastName:{
          required:helpers.withMessage("يجب ادخال قيمة", required)
        },
        email: {
          required: helpers.withMessage("يجب ادخال قيمة", required),
          email: helpers.withMessage(
            "القيمة ليست عنوان بريد إلكتروني صالحًا",
            email
          ),
        },


      };
    });

    const v$ = useValidate(rules, state);
    return {
      state,
      v$,
    };
  },
  components:{
    DatePicker,
    ButtonSlider,
  },
  props: {
    isOpen: Boolean, 
  },
  methods: {
    closeSidebar() {
      this.$emit('close-sidebar'); 
    },
    submitForm: function () {
      this.v$.$validate();
      if (!this.v$.$error) {
        Swal.fire({
          title: "تمت الاضافة بنجاح",
          imageUrl: "https://res.cloudinary.com/dgcz5jz53/image/upload/v1693468764/humanline/Illustration_ob0sfk.png",
          imageAlt: "تمت الاضافة بنجاح",
          confirmButtonText: 'تم',
        });
      }
    },
  },
};
</script>
  
  <style scoped>
  h3,
p {
  color: var(--text-primary-color);
}
.sidebar-open {
  position: absolute;
  top: 0%;
  left: 0%;
  height: 100%;
  background-color: var(--background-color-primary);
  border-left: 1px solid var(--accent-color);
  width: 350px;
  transition: width 0s ease;
}
.sidebar-closed {
  width: 0%;
}
.form-label {
  font-size: 14px;
  margin-bottom: 0.3rem;
  color: var(--text-primary-color);
}
span{
  color: red;
}
.form-control {
  width: 100%;
  border: 1px solid #e9eaec;
  padding: 15px 20px 15px 20px;
  border-radius: 10px;
  box-shadow: none;
  color: var(--text-primary-color);
  background-color: var(--background-color-primary);
}
.form-control:focus {
  outline: none !important;
  border: 2px solid #27a376 !important;
}
.invalid-input {
  border-color: red;
}
.fa-arrow-left{
  background-color: var(--background-color-primary);
  padding: 1rem;
  border-radius: 5rem;
  color: var(--text-primary-color);
  position: absolute;
  top: 50%;
  right: -15%;
  cursor: pointer;
}
.buttons{
  position: absolute;
  bottom: 2%;
  left: 2%;
  width: 95%;
}
.btn2 {
  padding: 18px 21px 18px 21px;
  width: 100%;
  font-size: 1rem;
  border: 1px solid var(--text-primary-color);
  border-radius: 10px;
  cursor: pointer;
  background-color: var(--background-color-primary);
  color: var(--text-primary-color);
}

</style>