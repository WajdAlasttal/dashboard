<template>
  <div class="form-container">
    <form class="form" v-on:submit.prevent="submit">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label text-right"
          >البريد الالكتروني المسجل</label
        >
        <span>*</span>
        <input
          type="email"
          class="form-controll"
          v-model.trim="state.email"
          :class="{ 'invalid-input': v$.email.$error }"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="ادخل البريد الالكتروني"
        />
        <span v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</span>
      </div>
      <button
        type="submit"
        class="btn"
        @click="submitForm"
        :disabled="v$.email.$error">
        <router-link to="/newpassword">تحديث كلمة المرور</router-link>
      </button>
      <button type="submit" class="btn">
        <router-link to="/">العودة لتسجيل الدخول</router-link>
      </button>
    </form>
  </div>
</template>

<script>
import useValidate from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";
import { reactive, computed } from "vue";
export default {
  setup() {
    const state = reactive({
      email: "",
    });
    const rules = computed(() => {
      return {
        email: {
          required: helpers.withMessage("يجب ادخال قيمة", required),
          email,
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
        this.$router.push("/newpassword");
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
.form-controll {
  width: 100%;
  border: 1px solid #e9eaec;
  padding: 16px 20px 16px 20px;
  border-radius: 10px;
  color: var(--text-primary-color);
  background-color: var(--background-color-primary);
}
.form-controll:focus {
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
  cursor: pointer;
  background: var(--button-color-secondary);
}
.btn a {
  text-decoration: none;
  color: var(--background-color-primary);
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