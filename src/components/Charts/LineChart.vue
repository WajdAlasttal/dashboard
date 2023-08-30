<template>
  <div>
    <h4>أداء الفريق</h4>
    <canvas id="myChart" width="500" height="400"></canvas>
  </div>
</template>
  
  <script>
import Chart from "chart.js/auto";
export default {
  mounted() {
    const ctx = document.getElementById("myChart");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
        datasets: [
          {
            label: "فريق المشروع",
            data: [45500, 40200, 40800, 30400,35700,41000],
            borderColor: "#FFC837",
            borderWidth: 2,
            tension: 0.5, 
            pointBackgroundColor:"#FFC837"
          },
          {
            label: "فريق المنتج",
            data: [45000, 55000, 35000, 40000,43000,30000],
            borderColor: "#27a376",
            borderWidth: 2,
            tension: 0.5, 
            pointBackgroundColor:"#27a376",
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  },
};
</script>
<style scoped>
h4{
    margin-right: 1rem;
    color: var(--text-primary-color);
}
</style>
  