<template>
    <div>
      <label class="input-group">
          <input
          ref="datepickerInput"
          id="datepicker"
          type="text"
          class="form-control"
          v-model="selectedDate"
          >
          <div class="input-group-prepend position-relative">
            <span class="icon-clickable" @click="openDatePicker">
              <i class="fas fa-calendar-alt"></i>
            </span>
          </div>
      </label>
    </div>
  </template>
  
  <script>
  import 'flatpickr/dist/flatpickr.css';
  import flatpickr from 'flatpickr';
  
  export default {
    data() {
      return {
        selectedDate: null,
        flatpickrConfig: {
          dateFormat: 'Y-m-d',
          onClose: this.onDateSelected, // Add a callback when a date is selected
        },
      };
    },
    methods: {
      openDatePicker() {
        // Manually open the date picker when the icon is clicked
        flatpickr(this.$refs.datepickerInput, this.flatpickrConfig).open();
      },
      onDateSelected(selectedDates) {
        // This method will be called when a date is selected
        this.selectedDate = selectedDates[0];
      },
    },
  };
  </script>
  
  <style scoped>
  .form-label {
  font-size: 14px;
  margin-bottom: 0.3rem;
}
  .icon-clickable {
    cursor: pointer;
  }
  span {
  color: red;
  font-size: 16px;
}
.form-control {
  width: 100%;
  border: 1px solid #e9eaec;
  padding: 10px 20px 10px 20px;
  border-radius: 10px !important;
  box-shadow: none;
  color: var(--text-primary-color);
  background-color: var(--background-color-primary);
}
.form-control:focus {
  outline: none !important;
  border: 2px solid #27a376 !important;
  box-shadow: none;
  background: none;
}
.fa-calendar-alt{
    position:absolute;
    padding: 10px;
    top: 8%;
    left: 2%;
    color: var(--text-primary-color);
}
  </style>
  