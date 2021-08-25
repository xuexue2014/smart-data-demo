<template>
  <div id="myChart" :style="{ width: '300px', height: '300px' }"></div>
</template>

<script>
// import echarts from 'echarts'
export default {
  components: {
    //   echarts
  },
  mounted(){
     this.drawLine();
  },
  methods: {
    drawLine() {
    console.log(this);
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      myChart.setOption({
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
      });
    },
  },
};
</script>

<style>
</style>