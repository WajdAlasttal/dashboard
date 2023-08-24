<template>
  <div id="app">
    <div
      class="container height-100 d-flex justify-content-center align-items-center"
    >
      <div class="position-relative">
        <div class="card p-2 text-center">
          <div
            id="otp"
            class="inputs d-flex flex-row justify-content-center mt-2"
          >
            <input
              class="m-2 text-center form-control rounded"
              type="text"
              id="input1"
              v-on:keyup="inputenter(1)"
              maxlength="1"
            />
            <input
              class="m-2 text-center form-control rounded"
              v-on:keyup="inputenter(2)"
              type="text"
              id="input2"
              maxlength="1"
            />
            <input
              class="m-2 text-center form-control rounded"
              v-on:keyup="inputenter(3)"
              type="text"
              id="input3"
              maxlength="1"
            />
            <input
              class="m-2 text-center form-control rounded"
              v-on:keyup="inputenter(4)"
              type="text"
              id="input4"
              maxlength="1"
            />
          </div>
          <div class="mt-4">
            <button type="submit" class="btn">
              <router-link to="/success">تحديث كلمة المرور</router-link>
            </button>
          </div>
          <div
            class="mt-3 content d-flex justify-content-center align-items-center"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    inputenter() {
      const inputs = document.querySelectorAll("#otp > *[id]");
      for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("keydown", function (event) {
          if (event.key === "Backspace") {
            inputs[i].value = "";
            if (i !== 0) inputs[i - 1].focus();
          } else {
            if (i === inputs.length - 1 && inputs[i].value !== "") {
              return true;
            } else if (event.keyCode > 47 && event.keyCode < 58) {
              inputs[i].value = event.key;
              if (i !== inputs.length - 1) inputs[i + 1].focus();
              event.preventDefault();
            } else if (event.keyCode > 64 && event.keyCode < 91) {
              inputs[i].value = String.fromCharCode(event.keyCode);
              if (i !== inputs.length - 1) inputs[i + 1].focus();
              event.preventDefault();
            }
          }
        });
      }
    },
  },
};
</script>

<style scoped>
.card {
  width: 400px;
  border: none;
  height: 150px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: none !important;
}
.inputs input {
  width: 70px;
  height: 40px;
  background-color: var(--background-color-primary);
  color: var(--text-primary-color);
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
}
.form-control:focus {
  box-shadow: none;
  border: 2px solid #27a376;
}
.btn {
  padding: 1rem 6rem 1rem 7rem;
  width: 100%;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  background: var(--button-color-secondary);
  cursor: pointer;
}
.btn a {
  text-decoration: none;
  color: var(--background-color-primary);
}
.btn:hover {
  opacity: 0.7;
}
</style>