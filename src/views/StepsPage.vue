<template>
  <div class="steps-page">
    <nav class="navbar border-bottom pb-3">
      <div class="container">
        <h1 class="navbar-brand d-flex align-items-center">
          <i class="fa-solid fa-asterisk mt-1 ms-1"></i>هيومانلاين
        </h1>
      </div>
    </nav>
    <div class="steps-content">
      <div class="container">
        <div class="row align-items-center ">
          <div class="col-lg-6 col-md-12">
            <div class="content">
              <div class="owl-carousel owl-theme">
                <div class="item">
                  <div class="steps">
                    <ul id="carousel-custom-dots" class="owl-dots d-flex ">
                      <li class="owl-dot ms-1"><img src="../assets/images/Steps.png" alt=""></li>
                      <li class="owl-dot ms-1"><img src="../assets/images/Step.png" alt=""></li>
                      <li class="owl-dot ms-1"><img src="../assets/images/Step.png" alt=""></li>
                      <li class="owl-dot ms-1"><img src="../assets/images/Step.png" alt=""></li>
                    </ul>
                    <p class="step">الخطوة 1 من 4</p>
                  </div>
                  <StepHeader
                    header="نحتاج إلى بعض معلومات شركتك"
                    body="هذه البيانات مطلوبة حتى نتمكن من توفير الحلول بسهولة وفقًا لقدرة شركتك"
                  />
                  <div class="buttons">
                    <ButtonSlider class="next me-2" text="التالي" />
                    <button type="submit" class="btn2">
                      <router-link to="/">الغاء</router-link>
                    </button>
                  </div>
                </div>
                <div class="item">
                  <div class="steps">
                    <ul id="carousel-custom-dots" class="owl-dots d-flex ">
                      <li class="owl-dot mx-1"><img src="../assets/images/Steps.png" alt=""></li>
                      <li class="owl-dot ms-1"><img src="../assets/images/Steps.png" alt=""></li>
                      <li class="owl-dot ms-1"><img src="../assets/images/Step.png" alt=""></li>
                      <li class="owl-dot ms-1"><img src="../assets/images/Step.png" alt=""></li>
                    </ul>
                    <p class="step">الخطوة 2 من 4</p>
                  </div>
                  <StepHeader
                    header="يمكننا الآن إنشاء مساحة عمل لفريقك."
                    body="هذه البيانات مطلوبة حتى نتمكن من توفير الحلول بسهولة وفقًا لقدرة شركتك"
                  />
                  <div class="buttons">
                    <ButtonSlider class="next me-2" text="التالي" />
                    <ButtonSlider class="prev btn2 me-1" text="عود الى الخلف" />
                  </div>
                </div>
                <div class="item">
                  <div class="steps">
                    <ul id="carousel-custom-dots" class="owl-dots d-flex ">
                      <li class="owl-dot mx-1"><img src="../assets/images/Steps.png" alt=""></li>
                      <li class="owl-dot ms-1"><img src="../assets/images/Steps.png" alt=""></li>
                      <li class="owl-dot ms-1"><img src="../assets/images/Steps.png" alt=""></li>
                      <li class="owl-dot ms-1"><img src="../assets/images/Step.png" alt=""></li>
                    </ul>
                    <p class="step">الخطوة 3 من 4</p>
                  </div>
                  <StepHeader
                    header="ما هو دورك في شركتك؟"
                    body="هذه البيانات مطلوبة حتى نتمكن من توفير الحلول بسهولة وفقًا لقدرة شركتك"
                  />
                  <div class="buttons">
                    <ButtonSlider class="next me-2" text="التالي" />
                    <ButtonSlider class="prev btn2 me-1" text="عود الى الخلف" />
                  </div>
                </div>
                <div class="item">
                  <div class="steps">
                    <ul id="carousel-custom-dots" class="owl-dots d-flex ">
                      <li class="owl-dot mx-1"><img src="../assets/images/Steps.png" alt=""></li>
                      <li class="owl-dot ms-1"><img src="../assets/images/Steps.png" alt=""></li>
                      <li class="owl-dot ms-1"><img src="../assets/images/Steps.png" alt=""></li>
                      <li class="owl-dot ms-1"><img src="../assets/images/Steps.png" alt=""></li>
                    </ul>
                    <p class="step">الخطوة 4 من 4</p>
                  </div>
                  <StepHeader
                    header="ما الذي ستستخدمه بشكل أساسي في Grove HR؟"
                    body="هذه البيانات مطلوبة حتى نتمكن من توفير الحلول بسهولة وفقًا لقدرة شركتك"
                  />
                  <div class="buttons">
                    <ButtonSlider class="next me-2" text="التالي" />
                    <ButtonSlider class="prev btn2 me-1" text="عود الى الخلف" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="step-card col-lg-6 col-md-12">
            <div class="owl-carousel owl-theme">
              <div class="item">
                <Step1Card />
              </div>
              <div class="item">
                <Step2Card />
              </div>
              <div class="item">
                <Step3Card />
              </div>
              <div class="item">
                <Step4Card />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Step1Card from "../components/Steps/Step1Card.vue";
import Step2Card from "../components/Steps/Step2Card.vue";
import Step3Card from "../components/Steps/Step3Card.vue";
import Step4Card from "../components/Steps/Step4Card.vue";
import StepHeader from "../components/StepHeader.vue";
import ButtonSlider from "../components/ButtonSlider.vue";
export default {
  components: {
    StepHeader,
    Step1Card,
    Step2Card,
    Step3Card,
    Step4Card,
    ButtonSlider,
  },
  mounted() {
    const $ = window.jQuery;
    $(".owl-carousel").owlCarousel({
      items: 1,
      rtl: true,
      touchDrag: true,
      mouseDrag: false,
      pullDrag: false,
      dotsContainer: "#carousel-custom-dots",
    });
    var owl = $(".owl-carousel");
    owl.owlCarousel();
    $(".next").click(function () {
      owl.trigger("next.owl.carousel");
    });
    $(".prev").click(function () {
      owl.trigger("prev.owl.carousel", [300]);
    });
    $(".owl-dot").click(function () {
      owl.trigger("to.owl.carousel", [$(this).index(), 300]);
    });
  },
};
</script>

<style scoped>
.steps-page {
  direction: rtl;
  background-color: var(--background-color-primary);
  color: var(--text-primary-color);
}
.navbar .navbar-brand i {
  color: #27a376;
}
.step-card {
  margin: 3rem 0;
  padding: 1rem;
  background: var(--accent-color);
  border-radius: 10px;
  max-height: 100%;
  height: 100%;
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
.btn2 a {
  color: var(--text-primary-color);
  text-decoration: none;
}
.step{
  color: #A0AEC0;
  margin-bottom: 3rem;
}
.buttons{
  display: flex;
  flex-direction: row-reverse;
  width: 75%;
}
@media (max-width: 768px) { 
  .body{
    position: relative;
  }
.step-card {
  margin: 0 0;
  padding: 0;
  background-color: transparent;
}
.steps{
  margin-top: 2rem;
}
.step{
  margin-bottom: 0rem;
}
.btn2 {
  padding: 15px 10px 15px 10px;
}
.buttons{
  margin: 1.5rem 0;
}
}

</style>