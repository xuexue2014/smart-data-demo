<template>
  <div id="rightBar"></div>
</template>

<script>
export default {
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      console.log(this);
      let myChart = this.$echarts.init(document.getElementById("rightBar"));
      myChart.setOption({
        title: {
          text: "全年降雨量",
          // subtext: "纯属虚构",
          textStyle: {
            color: "rgba(33,225,219,0.5)",
          },
          left: "center",
          top: "3%",
          backgroundColor: "rgba(227, 231, 231, 0.3)",
          borderRadius: [3, 3, 3, 3],
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        grid: {
          left: "18%",
          top: "40%",
          right: "18%",
          height: "50%",
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true },
          },
          top: "10%",
        },
        legend: {
          data: ["蒸发量", "降水量", "平均温度"],
          textStyle: {
            color: "#fff",
          },
          // orient: "vertical",
          left: "center",
          top: "20%",
          // align:"bottom",
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月",
            ],
            axisPointer: {
              type: "shadow",
            },
            axisLabel: {
              color: "#000",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "水量",
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: "{value} ml",
              color: "#fff",

            },
            
          },
          {
            type: "value",
            name: "温度",
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              formatter: "{value} °C",
            },
          },
        ],
        series: [
          {
            name: "蒸发量",
            type: "bar",
            data: [
              2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4,
              3.3,
            ],
          },
          {
            name: "降水量",
            type: "bar",
            data: [
              2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0,
              2.3,
            ],
          },
          {
            name: "平均温度",
            type: "line",
            yAxisIndex: 1,
            data: [
              2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2,
            ],
          },
        ],
      });
    },
  },
};
</script>

<style>
#rightBar {
  width: 100%;
  height: 100%;
}
</style>