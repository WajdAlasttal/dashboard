<template>
  <div>
    <input
      @change="toggleTheme"
      id="checkbox"
      type="checkbox"
      class="switch-checkbox"
    />
    <label for="checkbox" class="switch-label">
      <div class="dark"><i class="fa-solid fa-moon"></i>
      <span class="me-2">ليلي</span>
    </div>    
      <div class="light">
        <i class="fa-solid fa-sun"></i>
      <span class="me-2">مضيئ</span>
      </div>
      <div
        class="switch-toggle"
        :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }"
      ></div>
    </label>
  </div>
</template>

<script>
export default {
  mounted() {
    const initUserTheme = this.getTheme() || this.getMediaPreference();
    this.setTheme(initUserTheme);
  },

  data() {
    return {
      userTheme: "light-theme",
    };
  },

  methods: {
    toggleTheme() {
      const activeTheme = localStorage.getItem("user-theme");
      if (activeTheme === "light-theme") {
        this.setTheme("dark-theme");
      } else {
        this.setTheme("light-theme");
      }
    },

    getTheme() {
      return localStorage.getItem("user-theme");
    },

    setTheme(theme) {
      localStorage.setItem("user-theme", theme);
      this.userTheme = theme;
      document.documentElement.className = theme;
    },

    getMediaPreference() {
      const hasDarkPreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (hasDarkPreference) {
        return "dark-theme";
      } else {
        return "light-theme";
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.switch-checkbox {
  display: none;
}
i{
  color: #27a376;
}
span{
  color: var(--text-primary-color);
}
.switch-label {
  align-items: center;
  background: var(--accent-color);
  border: calc(var(--element-size) * 0.025) solid var(--accent-color);
  border-radius: var(--element-size);
  cursor: pointer;
  display: flex;
  font-size: calc(var(--element-size) * 0.25);
  height: calc(var(--element-size) * 0.25);
  position: relative;
  padding: 1rem 0.3rem;
  transition: background 0.5s ease;
  justify-content: space-between;
  width: calc(var(--element-size)*3);
  z-index: 1;
}

.switch-toggle {
  position: absolute;
  border: 2px solid var(--background-color-primary) ;
  background-color: var(--button-theme);
  box-shadow: 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  opacity: 0.5;
  border-radius: 5rem;
  top: calc(var(--element-size) * 0);
  left: calc(var(--element-size) * 0.01);
  height: 2rem;
  width: 5.5rem;
  transform: translateX(0);
  transition: transform 0.3s ease, background-color 0.5s ease;
}

.switch-toggle-checked {
  transform: translateX(calc(var(--element-size) *1.5)) !important;
}
</style>
