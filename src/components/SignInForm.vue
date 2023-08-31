<template>
  <div class="form-container">
    <form class="form" v-on:submit.prevent="submit">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label"
          >البريد الالكتروني</label
        >
        <span>*</span>
        <input
          type="email"
          class="form-control"
          v-model.trim="state.email"
          :class="{ 'invalid-input': v$.email.$error }"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="ادخل البريد الالكتروني"
        />
        <span v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</span>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"
          >كلمة المرور</label
        >
        <span>*</span>
        <input
          type="password"
          class="form-control"
          v-model.trim="state.password"
          :class="{ 'invalid-input': v$.password.$error }"
          id="exampleInputPassword1"
          placeholder="ادخل كلمة المرور"
        />
        <span v-if="v$.password.$error">{{
          v$.password.$errors[0].$message
        }}</span>
      </div>
      <div class="check-forget">
        <div class="mb-3 form-check">
          <input type="checkbox" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">تذكرني</label>
        </div>
        <div class="password">
          <p>
            <router-link to="/resetpassword">هل نسيت كلمة المرور</router-link>
          </p>
        </div>
      </div>
      <button
        type="submit"
        class="btn"
        @click="submitForm"
        :disabled="v$.$error"
      >
        <router-link to="/home">تسجيل دخول</router-link>
      </button>
    </form>
  </div>
</template>
  
<script>
import useValidate from "@vuelidate/core";
import { required, email, minLength, helpers } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import Swal from 'sweetalert2'
export default {
  name: "SignInForm",
  setup() {
    const state = reactive({
      email: "",
      password: "",
    });
    const rules = computed(() => {
      return {
        email: {
          required: helpers.withMessage("يجب ادخال قيمة", required),
          email: helpers.withMessage(
            "القيمة ليست عنوان بريد إلكتروني صالحًا",
            email
          ),
        },
        password: {
          required: helpers.withMessage("يجب ادخال قيمة", required),
          minLength: helpers.withMessage(
            "يجب أن تكون طولها 8 أحرف على الأقل",
            minLength(8)
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
  methods: {
    submitForm: function () {
      this.v$.$validate();
      if (!this.v$.$error) {
        Swal.fire({
          title: "اهلا بك في هيومانلاين",
          text: "استمتع براحة إدارة موظفي شركتك!",
          imageUrl: "https://res.cloudinary.com/dgcz5jz53/image/upload/v1693468764/humanline/Illustration_ob0sfk.png",
          imageAlt: "اهلا وسهلا",
          confirmButtonText: 'انطلق',
        });
        this.$router.push("/home");
      }
    },
  },
};
</script>
  
<style scoped>
.form-label {
  font-size: 14px;
  margin-bottom: 0.3rem;
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
  box-shadow: none;
  color: var(--text-primary-color);
  background-color: var(--background-color-primary);
}
.form-control:focus {
  outline: none !important;
  border: 2px solid #27a376 !important;
}
input[type="checkbox"] {
  accent-color: #27a376;
  margin-left: 0.3rem;
  width: 15px;
  height: 15px;
}
.form-check-label {
  color: #687588;
  font-size: 14px;
}
.check-forget {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
}
.check-forget .password p a {
  font-size: 13px;
  color: #687588;
  text-decoration: none;
}
.check-forget .password p a:hover {
  color: #27a376;
}
.btn {
  margin-top: 1rem;
  padding: 18px 21px 18px 21px;
  width: 100%;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  color: var(--background-color-primary);
  background: var(--button-color-secondary);
  cursor: pointer;
}
.btn a {
  color: var(--background-color-primary);
  text-decoration: none;
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