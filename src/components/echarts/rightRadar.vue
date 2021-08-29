<template>
  <div id="rightRadar"></div>
</template>

<script>
export default {
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      console.log(this);
      let myChart = this.$echarts.init(document.getElementById("rightRadar"));
      myChart.setOption({
        title: {
          text: "基础雷达图",
          // subtext: "纯属虚构",
          textStyle: {
            color: "rgba(33,225,219,0.5)",
          },
          left: "center",
          top: "3%",
          backgroundColor: "rgba(227, 231, 231, 0.3)",
          borderRadius: [3, 3, 3, 3],
        },
        legend: {
          top: "5%",
          left: "right",
          orient: "vertical",
          // 图例与文字的对齐设定
          align: "right",
          data: ["预算分配", "实际开销"],
        },
      
        radar: {
          center: ["50%", "55%"],
          radius: ["0%", "65%"],
          name:{
            color:"#000"
          },
          // shape: 'circle',
          indicator: [
            { name: "销售", max: 6500 },
            { name: "管理", max: 16000 },
            { name: "信息技术", max: 30000 },
            { name: "客服", max: 38000 },
            { name: "研发", max: 52000 },
            { name: "市场", max: 25000 },
          ],
        },
        series: [
          {
            name: "预算 vs 开销（Budget vs spending）",
            type: "radar",
            data: [
              {
                value: [4200, 3000, 20000, 35000, 50000, 18000],
                name: "预算分配",
              },
              {
                value: [5000, 14000, 28000, 26000, 42000, 21000],
                name: "实际开销",
              },
            ],
          },
        ],
      });
    },
  },
};
</script>

<style>
#rightRadar {
  width: 100%;
  height: 100%;
}
</style>