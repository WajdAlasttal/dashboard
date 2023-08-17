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
                    <p>الخطوة 1 من 4</p>
                  </div>
                  <StepHeader
                    header="نحتاج إلى بعض معلومات شركتك"
                    body="هذه البيانات مطلوبة حتى نتمكن من توفير الحلول بسهولة وفقًا لقدرة شركتك"
                  />
                  <div class="d-flex w-75 flex-row-reverse">
                    <ButtonSlider class="next me-2" text="التالي" />
                    <button type="submit" class="btn btn2">
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
                    <p>الخطوة 2 من 4</p>
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
                    <p>الخطوة 3 من 4</p>
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
                    <p>الخطوة 4 من 4</p>
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
                <StepsCard />
              </div>
              <div class="item">
                <StepsCard />
              </div>
              <div class="item">
                <StepsCard />
              </div>
              <div class="item">
                <StepsCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import StepsCard from "../components/StepsCard.vue";
import StepHeader from "../components/StepHeader.vue";
import ButtonSlider from "../components/ButtonSlider.vue";
export default {
  components: {
    StepHeader,
    StepsCard,
    ButtonSlider,
  },
  mounted() {
    const $ = window.jQuery;
    $(".owl-carousel").owlCarousel({
      items: 1,
      rtl: true,
      touchDrag: false,
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
  margin-top: 2rem;
  padding: 1rem;
  background-color: #f1f2f4;
  border-radius: 10px;
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
.btn:hover {
  opacity: 0.7;
}
.btn2 {
  background-color: #fff;
  border: 1px solid #111827;
  color: #111827;
}
.btn2 a {
  color: #111827;
  text-decoration: none;
}
</style>