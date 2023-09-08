<template>
  <div class="personal-info">
    <h4 class="m-3">معلومات شخصية</h4>
    <hr />
    <div class="upload text-center">
      <img
        src="../assets/images/Group.png"
        class="mt-5 mb-3"
        alt="upload your file"
      />
      <div class="text">
        <h6>قم بالسحب والافلات هنا للتحميل</h6>
        <p>أو حدد الملف من جهاز الكمبيوتر الخاص بك</p>
      </div>
      <div class="file-input-container">
        <label class="file-label">
          <input
            type="file"
            ref="fileInput"
            @change="handleFileChange"
            style="display: none"
          />
          <span class="file-icon" @click="triggerFileInput">
            <i class="fa fa-download"></i> Upload File
          </span>
        </label>
      </div>
    </div>
  </div>
  <div class="personal-info mt-3">
    <h6 class="m-2">كشوف المرتبات</h6>
    <hr />
    <div class="uploaded-files">
      <div
        class="header d-flex align-items-center p-3 rounded justify-content-between mx-2"
      >
        <h6>اسم الملف</h6>
        <h6>الاجراء</h6>
      </div>
      <div
        v-for="(file, index) in uploadedFiles"
        :key="index"
        class="file d-flex align-items-center p-3 justify-content-between mx-2"
      >
        <p class="file-name">{{ file.name }}</p>
        <div class="actions">
          <img src="../assets/images/Action.png" alt="download" />
          <img src="../assets/images/delete.png" @click="deleteFile(index)" alt="delete" class="me-1" />
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      uploadedFiles: [],
    };
  },
  methods: {
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      // Handle the file change event here
      const selectedFiles = event.target.files;
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        this.uploadedFiles.push(file);
        console.log(this.uploadedFiles);
      }
    },
    deleteFile(index) {
      // Remove the file from the uploadedFiles array
      this.uploadedFiles.splice(index, 1);
    },
  },
};
</script>
  
  <style scoped>
  h4,h6,p{
    color: var(--text-primary-color);
  }
  .header{
    background: var(--accent-color);
  }
span {
  color: var(--background-color-primary);
  background: var(--button-color-secondary);
  padding: 0.5rem 1rem;
  border-radius: 10px;
}
hr {
  border: 1px solid #f1f2f4;
}
.personal-info {
  border: 2px solid #f1f2f4;
  border-radius: 10px;
  padding: 1rem;
}
.file-label {
  cursor: pointer;
}

.file-icon {
  display: inline-block;
  cursor: pointer;
}

.fa.fa-download::before {
  content: "\f019";
  font-family: FontAwesome;
  margin-right: 5px;
}

input[type="file"] {
  display: none;
}

.uploaded-file {
  margin-top: 10px;
}
</style>
  