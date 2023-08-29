<template>
  <div class="performance py-3">
    <div class="counter me-5">
        <div class="row text-center w-50">
            <div class="col-6 p-0">
               <div class="employees">
                <i class="fa-solid fa-user"></i>
                <div class="d-flex align-items-center justify-content-center">
                    <h4 class="ms-5 me-5 pe-5">3,540</h4>
                    <span class="badge rounded-pill bg-success">+25,5%<i class="fa-solid fa-arrow-trend-up"></i></span>
                </div>
                <p>عدد الموظفين</p>
               </div>
            </div>
            <div class="col-6 p-0">
                <div class="job">
                <i class="fa-solid fa-briefcase"></i>
                <div class="d-flex align-items-center justify-content-center">
                    <h4 class="ms-5 me-5 pe-5">1,150</h4>
                    <span class="badge rounded-pill bg-success">+4,10%<i class="fa-solid fa-arrow-trend-up"></i></span>
                </div>
                <p>المتقدمين للوظيفة</p>
               </div> 
            </div>
        </div>
        <div class="row text-center w-50">
            <div class="col-6 p-0">
               <div class="newemployees">
                <i class="fa-solid fa-plus"></i>
                <div class="d-flex align-items-center justify-content-center">
                    <h4 class="ms-5 me-5 pe-4">500</h4>
                    <span class="badge rounded-pill bg-success">+5,1%<i class="fa-solid fa-arrow-trend-up"></i></span>
                </div>
                <p>الموظفين الجدد</p>
               </div>
            </div>
            <div class="col-6">
                <div class="reemployees">
                <i class="fa-solid fa-minus"></i>
                <div class="d-flex align-items-center justify-content-center">
                    <h4 class="ms-5 me-5 pe-5">93</h4>
                    <span class="badge rounded-pill bg-danger">+25,5%<i class="fa-solid fa-arrow-trend-down"></i></span>
                </div>
                <p>الموظفين المستقيلين</p>
               </div> 
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
    
}
</script>

<style scoped>
.fa-user,.fa-minus, .fa-plus ,.fa-briefcase{
    background-color: var(--accent-color);
    padding: 20px;
    border-radius: 50%;
    color: var(--text-primary-color);
    font-size: 20px;
    margin-bottom: 1rem;
}
.counter h4 , p{
    color: var(--text-primary-color);
}
.employees,.job ,.newemployees , .reemployees{
    padding: 2rem 1rem;
    width: 100%;
}
.employees {
    border-left: 1px solid var(--accent-color);
    border-bottom:1px solid var(--accent-color) ;
}
.job{
    border-bottom: 1px solid var(--accent-color);
}
.newemployees{
    border-left: 1px solid var(--accent-color);
}
</style>