<template>
  <div id="myChart"></div>
</template>

<script>
// import echarts from 'echarts'
export default {
  components: {
    //   echarts
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      console.log(this);
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      myChart.setOption({
        title: {
          text: "未来一周气温变化",
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
        },
        // 组件上方的图例
        legend: {
          data: [
            {
              name: "最高气温",
              // icon: "triangle",
            },
            {
              name: "最低气温",
              // icon: "rect",
            },
          ],
          top: "12%",
          left: "right",

          // 图例图标的样式
          itemStyle: {
            // 间隔宽度
            itemGap: 20,
            itemWidth: 3,
            itemheigh: 3,
            /*  shadowColor:"rgba(135,132,132,1)",
            shadowOffsetX:2.5,
            shadowOffsetY:4.5 */
          },
          textStyle: {
            color: "#fff",
            fontStyle: "italic",
          },
        },
        // 右上角的5个工具，包括导出图片、试图切换、查看原始值
        /*  toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: "none",
            },
            dataView: { readOnly: false },
            magicType: { type: ["line", "bar"] },
            restore: {},
            saveAsImage: {},
          },
        }, */

        grid: {
          left: "14%",
          top: "25%",
          right: "10%",
          height: "55%",
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          axisLabel:{
            color:"#000"
          }
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value} °C",
            color:"rgba(235,242,242,1)"
          },
                 
        },
        series: [
          {
            name: "最高气温",
            type: "line",
            data: [10, 11, 13, 11, 12, 12, 9],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" },
              ],
            },
            markLine: {
              data: [{ type: "average", name: "平均值" }],
            },
          },
          {
            name: "最低气温",
            type: "line",
            data: [1, -2, 2, 5, 3, 2, 0],
            markPoint: {
              data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }],
            },
            markLine: {
              data: [
                { type: "average", name: "平均值" },
                [
                  {
                    symbol: "none",
                    x: "90%",
                    yAxis: "max",
                  },
                  {
                    symbol: "circle",
                    label: {
                      position: "start",
                      formatter: "最大值",
                    },
                    type: "max",
                    name: "最高点",
                  },
                ],
              ],
            },
          },
        ],
      });
    },
  },
};
</script>

<style>
#myChart {
  width: 100%;
  height: 100%;
}
</style>