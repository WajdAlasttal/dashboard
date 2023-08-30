<template>
  <div>
    <h4>مجموع الموظفين</h4>
    <canvas id="donut" width="300" height="200"></canvas>
  </div>
</template>
    
    <script>
import Chart from "chart.js/auto";
export default {
  mounted() {
    const ctx = document.getElementById("donut");
    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["الجدد", "الاخرين", "القدامى"],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: [
              "#27A376",
              "#FFD023",
              "#2F78EE",
            ],
            borderWidth: 0,
            hoverOffset: 4,
          },
        ],
      },
      options: {
        cutout: "70%",
        plugins: {
          afterDraw: (chart) => {
            const ctx = chart.ctx;
            const canvasWidth = chart.canvas.width;
            const canvasHeight = chart.canvas.height;
            const text = "102"; //
            const textX = canvasWidth / 2;
            const textY = canvasHeight / 2;
            ctx.fillStyle = "white"; // Text color
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.font = "20px"; // Text font and size
            ctx.fillText(text, textX, textY);
          },
      },
    }
    });
  },
};
</script>
  <style scoped>
h4 {
  margin-right: 1rem;
  color: var(--text-primary-color);
}
</style>
    