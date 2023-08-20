<template>
  <div class="steps-page">
    <nav class="navbar border-bottom pb-3">
      <div class="container">
        <h1 class="navbar-brand d-flex align-items-center">
          <i class="fa-solid fa-asterisk mt-2 ms-1"></i>هيومانلاين
        </h1>
      </div>
    </nav>
    <div class="steps-content">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-6">
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
                  <div class="d-flex w-75 flex-row-reverse">
                    <ButtonSlider class="next me-2" text="التالي" />
                    <button class="btn2">
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
                  <div class="d-flex w-75 flex-row-reverse">
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
                  <div class="d-flex w-75 flex-row-reverse">
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
                  <div class="d-flex w-75 flex-row-reverse">
                    <ButtonSlider class="next me-2" text="التالي" />
                    <ButtonSlider class="prev btn2 me-1" text="عود الى الخلف" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="step-card col-6">
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
}
.navbar .navbar-brand i {
  color: #27a376;
}
.step-card {
  margin: 3rem 0;
  padding: 1rem;
  background-color: #f1f2f4;
  border-radius: 10px;
  max-height: 100%;
  height: 100%;
}
.btn2 {
  margin-top: 1rem;
  padding: 18px 21px 18px 21px;
  width: 100%;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #111827;
  color: #111827;
}
.btn2 a {
  color: #111827;
  text-decoration: none;
}
.step{
  color: #A0AEC0;
  margin-bottom: 3rem;
}
</style>