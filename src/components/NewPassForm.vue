<template>
  <div class="form-container">
    <form class="form" v-on:submit.prevent="submit">
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"
          >كلمة المرور الجديدة</label
        >
        <span>*</span>
        <input
          type="password"
          class="form-control"
          v-model.trim="state.password.password"
          :class="{ 'invalid-input': v$.password.$error }"
          id="exampleInputPassword1"
          placeholder=" ادخل كلمة المرور الجديدة"
        />
        <span v-if="v$.password.password.$error">
          {{ v$.password.password.$errors[0].$message }}
        </span>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"
          >تأكيد كلمة المرور الجديدة</label
        >
        <span>*</span>
        <input
          type="password"
          class="form-control"
          v-model.trim="state.password.confirm_passowrd"
          :class="{ 'invalid-input': v$.password.confirm_passowrd.$error }"
          id="exampleInputPassword1"
          placeholder="ادخل تأكيد كلمة المرور الجديدة"
        />
        <span v-if="v$.password.confirm_passowrd.$error">{{
          v$.password.confirm_passowrd.$errors[0].$message
        }}</span>
      </div>
      <button
        type="submit"
        class="btn"
        @click="submitForm"
        :disabled="v$.$error"
      >
        <router-link to="/otpverification">تحديث كلمة المرور </router-link>
      </button>
    </form>
  </div>
</template>
  
  <script>
import useValidate from "@vuelidate/core";
import { required, sameAs, helpers } from "@vuelidate/validators";
import { reactive, computed } from "vue";
export default {
  setup() {
    const state = reactive({
      password: {
        password: "",
        confirm_passowrd: "",
      },
    });
    const passwordComplexity = (value) => {
      return (
        /[A-Z]/.test(value) &&
        /[a-z]/.test(value) &&
        /\d/.test(value) &&
        value.length >= 8
      );
    };
    const rules = computed(() => {
      return {
        password: {
          password: {
            required: helpers.withMessage("يجب ادخال قيمة", required),
            passwordComplexity: helpers.withMessage(
              "يجب أن تحتوي على حرف كبير وصغير ورقم، ويجب أن تكون طولها 8 أحرف على الأقل",
              passwordComplexity
            ),
          },
          confirm_passowrd: {
            required: helpers.withMessage("يجب ادخال قيمة", required),
            sameAs: helpers.withMessage(
              "يجب أن تكون القيمة مساوية للقيمة الأخرى",
              sameAs(state.password.password)
            ),
          },
        },
      };
    });

    const v$ = useValidate(rules, state);
    return {
      state,
      v$,
    };
  },
  methods: {
    submitForm: function () {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.$router.push('/otpverification');
      }
    },
  },
};
</script>
  
  <style scoped>
.form-label {
  font-size: 14px;
  margin-bottom: 0.3rem;
  text-align: right;
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
}
.form-control:focus {
  outline: none !important;
  border: 2px solid #27a376 !important;
}
.btn {
  margin-top: 1rem;
  padding: 18px 21px 18px 21px;
  width: 100%;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  color: #fff;
  background: #111827;
  cursor: pointer;
}
.btn a {
  text-decoration: none;
  color: #fff;
}

.btn:hover {
  opacity: 0.7;
}
.btn:disabled {
  opacity: 0.5;
}
.invalid-input {
  border-color: red;
}
</style>